import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './DashBoard.css'
import Cookies from 'js-cookie'
// import PostJob from './PostJob'
import {FiEdit } from "react-icons/fi";
const DashBoard = () => {
   
    const [employer, setEmployer] = useState([]);
    const [statusJob, setStatusJob] = useState([]);

    const email = Cookies.get('email')
    
useEffect(()=>{
    async function getEmployers(){
        try {
            const EmployerJobData = await axios.post(`https://helix12.herokuapp.com/helix/job/spec/email/${email}`)
            console.log(EmployerJobData.data)
            setEmployer(EmployerJobData.data)
           
        } catch (error) {
            console.log(error)
            
        }

}
getEmployers()
},[])
useEffect(() => {
    async function getJobStatus(){
        try {
            const JobStatus = await axios.post(`https://helix12.herokuapp.com/helix/job/spec/email/${email}`)
            setStatusJob(JobStatus.data)
            console.log(JobStatus.data)

        } catch (error) {
            console.log(error)
        }
    }
    getJobStatus()
}, []);
const navigate = useNavigate()

const logout = () =>{
  Cookies.remove('email')
  navigate('/helix/Employerss')
}
// useEffect(()=>{
//     if(!Cookies.get('email')){
//         navigate('/Employerss')
//     }
// },[])
  return (
    <>
<div className="container-xxl position-relative bg-white d-flex p-0">
       

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
                    <a  className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Job</a>
                    <div className="nav-item dropdown">
                           </div>
                    <Link to={`/helix/profile/${email}`} className="nav-item nav-link"><i className="fa fa-th me-2"></i>Profile</Link>
                    <Link to='/helix/postjob' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>jobs</Link>
                    
                </div>
            </nav>
        </div>  

        <div className="content">

            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
                </a>
                {/* <a href="#" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a> */}
                {/* <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search"/>
                </form> */}
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        {/* <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </a> */}
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={`${process.env.PUBLIC_URL}/img/user.jpg`} alt="" />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        {/* <small>15 minutes ago</small> */}
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={`${process.env.PUBLIC_URL}/img/user.jpg`} alt="" />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={`${process.env.PUBLIC_URL}/img/user.jpg`} alt="" />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        {/* <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </a> */}
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            {/* <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" /> */}
                            <span className="d-none d-lg-inline-flex">{Cookies.get('email')}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            {/* <a href="#" className="dropdown-item">My Profile</a> */}
                            {/* <a href="#" className="dropdown-item">Settings</a> */}
                            <button onClick={()=>logout()}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
                       
                            {/* posted job */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">

                        <h6 className="mb-0">Posted Job</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    {/* <th scope="col"><input className="form-check-input" type="checkbox"/></th> */}
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Company Email</th>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Job Description</th>
                                    <th scope="col">Add Skill</th>
                                    <th scope="col">Salary Details</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Job Timing</th>
                                    <th scope="col">Job Address</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    employer.map((curElm)=>{
                                            
                                        return(
                                        <>
                                        <tr key={curElm._id}>
                                    <td>{curElm.companyname}</td>
                                    <td>{curElm.empemail}</td>
                                    <td>{curElm.jobtitle}</td>
                                    <td>{curElm.jobdesc}</td>
                                    <td>{curElm.addskill}</td>
                                    <td>{curElm.salarydet}</td>
                                    <td>{curElm.exp}</td>
                                    <td>{curElm.location}</td>
                                    <td>{curElm.jobtime}</td>
                                    <td>{curElm.jobaddress}</td>

                                    <td><Link className="btn btn-sm btn-primary" style={{"borderRadius": "10px"}} to={`/helix/jobedit/${curElm._id}`}><FiEdit></FiEdit></Link>
                                    
                                    </td>
                                </tr>
                                        </>
                                        )

                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

                                    {/* Status Job */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">

                        <h6 className="mb-0">Status of Jobs</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    {/* <th scope="col"><input className="form-check-input" type="checkbox"/></th> */}
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Job Description</th>
                                    <th scope="col">Status</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    statusJob.map((curElm)=>{
                                       
                                        return(
                                        <>
                                        <tr key={curElm._id}>
                                    <td>{curElm.jobtitle}</td>
                                    <td>{curElm.jobdesc}</td>
                                    {
                                            (curElm.approve ==='approve')?
                                            <i className="fa fa-thumbs-up dder" aria-hidden="true"> </i>
                                            :<i className="fa fa-thumbs-down dder" aria-hidden="true"> </i>
                                        }
                                </tr>
                                        </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            

            {/* <div className="container-fluid pt-4 px-4">
                <div className="bg-light rounded-top p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">
                        </div>
                    </div>
                </div>
            </div> */}

        </div>




       
    </div>



    </>

  )
}

export default DashBoard
