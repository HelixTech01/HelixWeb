import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router'
// import { BsCheckLg } from "react-icons/bs";
import './admin.css'
import swal from 'sweetalert';


const UpdateJobSeeker = () => {
  const {_id} = useParams()
  const navigate = useNavigate()
  // const [status, setStatus] = useState();
  const [jobSeeker, setJobSeeker] = useState({
    _id:"",
    j_name:"",
    j_number:"",
    j_email:"",
    j_address:"",
  });
  // console.log(employer)
  useEffect(()=>{
    async function getJobSeeker(){
      try {
        const JobSeekers = await axios.get(`https://helix12.herokuapp.com/helix/admin/specjobseeker/${_id}`)
        // console.log(JobSeekers.data)
        setJobSeeker(JobSeekers.data)
      } catch (error) {
        console.log(error)
      }
    }
    // console.log(_id)
    getJobSeeker()
  },[_id])

  const onTextFieldChange = (e) =>{
    setJobSeeker({
      // add value dynamically
      ...jobSeeker,[e.target.name]:e.target.value
    })
    // console.log(setEmployer())
    // console.log(employer)
  }
  const onFormSubmit = async (e) =>{
    e.preventDefault()
    try {
      // first is link and second is data
      await axios.patch(`https://helix12.herokuapp.com/helix/admin/edit/jobseeker/${_id}`,jobSeeker)
      // console.log(data)
      // console.log(_id)
      navigate('/helix/Admin_home')
    } catch (error) {
      console.log(error)
    }
  }

  function handleClick() {
    navigate('/helix/Admin_home')
}



// approve jobSeeker
const approveJobSeeker = async () =>{
  try {
    await axios.patch(`https://helix12.herokuapp.com/helix/admin/approve/jobseeker/${_id}`)
    // alert('approved')
    swal("approved",'', "success");
    // console.log(data)
  } catch (error) {
    swal(error,'','error')
  }
} 

// reject jobSeeker
const rejectJobSeeker = async () =>{
  try {
    await axios.patch(`https://helix12.herokuapp.com/helix/admin/reject/jobseeker/${_id}`)
    // alert('rejected')
    swal("rejected",'', "success");
    // console.log(data)
  } catch (error) {
    swal(error,'','error')
  }
}

  return (
   <>
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className=" text-center">
                            <h1>Edit JobSeeker</h1>
                        </div>
                    </div>
             
        <main className="page-content">

<section className="pricing-area section-padding-lg bg-white">
  <div className="container">
 
    <div className="row">
        <div className="col-lg-12 company-form mt-5">
          <div className="pg-contact-form mr-0 mr-lg-3">
            <div className="small-title">
              {/* <h2>Company Details</h2> */}
            </div>
            <form id="contact-form"  >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <input type="text" name="j_name" onChange={e=>onTextFieldChange(e)} value={jobSeeker.j_name}placeholder="Company Name"/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <input type="text" name="j_address" placeholder="Company address"onChange={e=>onTextFieldChange(e)} value={jobSeeker.j_address} />
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <input type="text" name="j_number" placeholder="Contact Number" onChange={e=>onTextFieldChange(e)} value={jobSeeker.j_number}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <input type="text" name="j_email" placeholder="Email" onChange={e=>onTextFieldChange(e)} value={jobSeeker.j_email} disabled/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <input type="text" name="j_description" placeholder="Company Description" onChange={e=>onTextFieldChange(e)} value={jobSeeker.j_address}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                   {jobSeeker.approve === 'approve'?
                   <button type="button" className="btn btn-danger btn-icon rounded-circle" onClick={()=>rejectJobSeeker()} style={{marginLeft:'20px'}} >Reject</button>
                   :
                   <button type="button" className="btn btn-success btn-icon rounded-circle" onClick={()=>approveJobSeeker()} > Accept</button>
                   }
                  
                  </div>
                </div>
                <div className="single-input">
                    <button onClick={(e)=>onFormSubmit(e)} className="cr-btn" type="submit">
                      <span>Submit</span>
                      <b></b>
                    </button>
                  </div>
              </div>
            </form>
          </div>
        </div>
          
        <div className="single-input" style={{marginLeft:"30rem"}}>
                    <button className="cr-btn" type="button">
                      <span onClick={()=>handleClick()}>Cancel</span>
                      <b></b>
                    </button>
                  </div>

        
    </div>
  </div>
</section>

            </main>
   </>
  )
}

export default UpdateJobSeeker