import React,{useState,useEffect} from 'react'
// import './sass/style.scss'
import './css/style.css'
import image from './img/user2.jpg'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import swal from 'sweetalert';

const Profile = () => {

	const navigate =  useNavigate()
	// const [profileData, setProfileData] = useState([]);

	const [dataProfile,setDataProfile] = useState({
		c_name: "",
		c_address: "",
		c_person: "",
		c_number: "",
		c_email: "",
		c_description:"",
	})
	
	const email = Cookies.get('email')
	// find buy email
	useEffect(()=>{
		async function getJobs(){
		  try {
			const getData = await axios.post(`https://helix12.herokuapp.com/helix/login/profile/${email}`)
			// console.log(getData.data)
			setDataProfile(getData.data)
		  } catch (error) {
			console.log(error)
		  }
		}
		// console.log(_id)
		getJobs()
	  },[email])
	//   console.log(profileData)
	const id = dataProfile._id
	// console.log(id)

	const onTextFieldChange = (e) =>{
		setDataProfile({
		  // add value dynamically
		  ...dataProfile,[e.target.name]:e.target.value
		})}
		// console.log(dataProfile.c_name)

	const onFormSubmit = async (e) =>{
		e.preventDefault()
		try {
		  // first is link and second is data
		   const data =await axios.patch(`https://helix12.herokuapp.com/helix/admin/edit/employer/${id}`,dataProfile)
		  console.log(data)
		  // console.log(_id)
			// alert('updated')
			swal("updated",'', "success");
		  navigate('/helix/dashboardemp',{ replace: true })
		} catch (error) {
		//   console.log(error)
		swal(error,'', "error");
		}
	  }
  return (
    <div>
        <section className="py-5 my-5">
		<div className="container">
			{/* <h1 className="mb-5">Account Settings</h1> */}
			<div className="bg-white shadow rounded-lg d-block d-sm-flex">
				<div className="profile-tab-nav border-right">
					<div className="p-4">
						<div className="img-circle text-center mb-3" >
							<img src={image} alt="Image" className="shadow" />
						</div>
						<h4 className="text-center" >{dataProfile.c_name}</h4>
						{/* {console.log(setDataProfile)} */}
					</div>
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							{/* <i className="fa fa-home text-center mr-1"></i>  */}
							Account
						</a>
						{/* <a className="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false" style={{marginLeft: 'auto'}}> */}
							{/* <i className="fa fa-key text-center mr-1"></i>  */}
							{/* Password
						</a> */}
						
					</div>
				</div>
				<form action="" >
				<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 className="mb-4">Profile</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label htmlFor='c_name' >company name</label>
								  	<input type="text" className="form-control" name='c_name' onChange={e=>onTextFieldChange(e)} value={dataProfile.c_name}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label htmlFor='c_person'>person name</label>
								  	<input type="text" className="form-control" name='c_person' onChange={e=>onTextFieldChange(e)}value={dataProfile.c_person}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label htmlFor='c_email'>Email</label>
								  	<input type="text" className="form-control" name='c_email'
									onChange={e=>onTextFieldChange(e)}value={dataProfile.c_email} disabled/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label htmlFor='c_number'>Phone number</label>
								  	<input type="text" name='c_number' className="form-control"
									onChange={e=>onTextFieldChange(e)} value={dataProfile.c_number}/>
								</div>
							</div>
							
							<div className="col-md-6">
								<div className="form-group">
								  	<label htmlFor='c_address'>Address</label>
								  	<input type="text" className="form-control" name='c_address'
									onChange={e=>onTextFieldChange(e)} value={dataProfile.c_address}/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
								  	<label htmlFor='c_description'>Bio</label>
									<textarea name='c_description'  onChange={e=>onTextFieldChange(e)} className="form-control" rows="4" value={dataProfile.c_description}></textarea>
								</div>
							</div>
						</div>
						<div>
						<button className="btn btn-primary " onClick={(e)=>onFormSubmit(e)}>Update</button>
							<Link to='/helix/dashboardemp'><button className="btn btn-light upadate">Cancel</button></Link>
						</div>
					</div>
					
					
				</div>
					</form>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Profile