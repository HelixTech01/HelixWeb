import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';
import swal from 'sweetalert';
const AddLocation = () => {
    const [locationGet, setLocationGet] = useState([]);
    const [addLocation, setAddLocation] = useState({
      "location":""
    });

    const [companyType,setCompanyType] = useState({
        "c_type":""
    })
    const [showType,setShowType] = useState([])

useEffect(()=>{
    async function getLocation(){
        try {
            const locationData = await axios.get("https://helix12.herokuapp.com/helix/admin/show/location")
            // console.log(locationData.data)
            setLocationGet(locationData.data)
        } catch (error) {
            console.log(error)
            
        }

}
getLocation()
},[addLocation])

// add company name
const locationAdd = async (e) =>{
    e.preventDefault()
    try {
      const data = await axios.post(`https://helix12.herokuapp.com/helix/admin/location/add`,addLocation)
      // console.log(data)
      swal(data.data,'', "success");
    //   window.location.reload();
    } catch (error) {
    //   alert('something wrong')
    swal('something wrong','', "error");
    }
  }

    // company type show
    useEffect(()=>{
        async function getCompnanyType(){
            try {
                const locationData = await axios.get("https://helix12.herokuapp.com/helix/admin/companytype/show")
                // console.log(locationData.data)
                setShowType(locationData.data)
            } catch (error) {
                console.log(error)
                
            }
    
    }
    getCompnanyType()
    },[companyType])

    // add company type
const AddCompnayType = async (e) =>{
  e.preventDefault()
  try {
    const data = await axios.post(`https://helix12.herokuapp.com/helix/admin/companytype/add`,companyType)
    // console.log(data)
    // alert(data.data)
    swal(data.data,'', "success");
    // window.location.reload();
  } catch (error) {
    // alert('something wrong')
    swal('something wrong','', "error");
  }
}
const onTextFieldOType = (e) =>{
    setCompanyType({
        ...companyType,[e.target.name]:e.target.value
    })
}
const onTextFieldChange = (e)=>{
  setAddLocation({
      // add value dynamically
      ...addLocation,[e.target.name]:e.target.value
  })
}
const navigate = useNavigate()
const logout = () =>{
    Cookies.remove('admin')
    // alert('logout successful')
    swal('logout successful','', "error");
    navigate('/helix/admin')
}
  return (
    <>
<div className="container-xxl position-relative bg-white d-flex p-0">
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary"  role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}

        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">

                    <h3 className="text-primary"><i className="fa  me-2"></i>Helix</h3>

                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        {/* <img className="rounded-circle" src="img/user.jpg" alt="" /> */}
                        <div className="rounded-circle position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    {/* <div className="ms-3">
                        <h6 className="mb-0">Admin</h6>
                        <span>Admin</span>
                    </div> */}
                </div>
                <div className="navbar-nav w-100">
                    <Link to='/helix/Admin_Home' className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Users</Link>
                    <div className="nav-item dropdown">
                        
                           </div>
                    <Link to="/helix/status" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Status</Link>
                    <Link to='/helix/jobs' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>jobs</Link>
                    <Link to='/helix/locationadd' className="nav-item nav-link active"><i className="fa fa-keyboard me-2"></i> add</Link>
                    <Link to='/helix/showapplyer' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Show Job Apply</Link>
                    <Link to='/helix/faq' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Faq</Link>
                    <Link to='/helix/contactform' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>show Contact</Link>
                </div>
            </nav>
        </div>
        </div>
        <div className="content">

<nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
    </a>
   
    <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
            
            
        </div>
       
        <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                
                <span className="d-none d-lg-inline-flex">Admin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                {/* <a href="#" className="dropdown-item">My Profile</a> */}
                {/* <a href="#" className="dropdown-item">Settings</a> */}
                <button onClick={()=>logout()}>Log Out</button>
            </div>
        </div>
    </div>
</nav>
<div className="container">
    <div className="row">
        <div className="col-lg-6 col-6">
        <div class="job-list-header">
                        
                        <div class="row ">
                            
                            <div class="col-lg-5 col-md-6">
                            <h2 className='mo'>Add Country</h2>
                                <div class="filler-job-form fd">
                                    <i class="uil uil-location-point"></i>
                                    <select class="form-select" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                      {locationGet.map((curElm)=>{
                                        return(
                                          <option value="location">{curElm.location}</option>
                                        )
                                      })}
                                 
                                    </select>
                                </div>
                            </div>
                            {/* add location */}
                        
                            <form action="" >
                            <div class="col-lg-5 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-briefcase-alt"></i>
                                    <input type="text" class="form-control filter-job-input-box" onChange={(e)=>onTextFieldChange(e)} value={addLocation.location}
                                    name='location'id="country" placeholder="country name" required/>
                                </div>
                                <button onClick={(e)=>locationAdd(e)} type='submit' className='suy'>Add</button>
                            </div>
                            </form>
                            <div class="col-lg-5 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-clipboard-notes"></i>
                                </div>
                            </div>
                          
                        </div>
                   
                </div>






        </div>
        <div className="col-lg-6 col-6">
        <div class="job-list-header">
                        
                        <div class="row ">
                            
                            <div class="col-lg-5 col-md-6">
                            <h2 className='masd'>Add company type</h2>
                                <div class="filler-job-form">
                                    <i class="uil uil-location-point"></i>
                                    <select class="form-select" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                      {showType.map((curElm)=>{
                                        return(
                                          <option value="location">{curElm.c_type}</option>
                                        )
                                      })}
                                 
                                    </select>
                                </div>
                            </div>
                            {/* add company type */}
                            
                            <form action="" >
                            <div class="col-lg-5 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-briefcase-alt"></i>
                                    <input type="text" class="form-control filter-job-input-box ff" onChange={(e)=>onTextFieldOType(e)} value={companyType.c_type}
                                    name='c_type'id="c_type" placeholder="company Type" required/>
                                </div>
                                <button onClick={(e)=>AddCompnayType(e)} type='submit' className='suy'>Add</button>
                            </div>
                            </form>
                            <div class="col-lg-5 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-clipboard-notes"></i>
                                </div>
                            </div>
                          
                        </div>
                   
                </div> 
        </div>
    </div>
</div>

                    
</div>

        </>
  )
}

export default AddLocation
