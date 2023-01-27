import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import swal from 'sweetalert';

const JobEdit = () => {
    const [job, setJob] = useState([]);
    const navigate = useNavigate()
useEffect(()=>{
    async function getJobs(){
        try {
            const Jobs = await axios.get("https://helix12.herokuapp.com/helix/job/showjobs")
            // console.log(Job.data)
            setJob(Jobs.data)

        } catch (error) {
            console.log(error)
            
        }

}
getJobs()
},[])

const logout = () =>{
  Cookies.remove('email')
//   alert('logout successfully')
  swal("logout successful!",'', "success");
  navigate('/helix/admin')
}


// accept job
const acceptJob= async (_id)  =>{
    try {
        await axios.patch(`https://helix12.herokuapp.com/helix/job/approve/job/${_id}`)
    //    console.log(data.data)
    swal('Approved','','success')
    
     } catch (error) {
       console.log(error)
     }
}

const data = () =>{
    setTimeout(() => {
        // window.location.reload()
    }, 1000);
}
// const refreshPage = () =>{
//     navigate('/')
// }

// reject job
const rejectJob = async (_id) =>{
    try {
        await axios.patch(`https://helix12.herokuapp.com/helix/job/reject/job/${_id}`)
    //    console.log(data.data)
    //    alert('reject')
       swal("reject",'', "error");
     } catch (error) {
       swal(error,'','error')
     }
}

  return (
    <>
<div className="container-xxl position-relative bg-white d-flex p-0">
       
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">

                    <h3 className="text-primary"><i className="fa  me-2"></i>Helix</h3>

                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        
                        <div className="rounded-circle position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    
                </div>
                <div className="navbar-nav w-100">
                    <Link  className="nav-item nav-link " to={'/helix/Admin_Home'}><i className="fa fa-tachometer-alt me-2"></i>Users</Link>
                    <div className="nav-item dropdown">
                        
                           </div>
                    <Link to="/helix/status" className="nav-item nav-link "><i className="fa fa-th me-2"></i>Status</Link>
                    <Link to='/helix/jobs' className="nav-item nav-link active"><i className="fa fa-keyboard me-2"></i>jobs</Link>
                    <Link to='/helix/locationadd' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>add</Link>
                    <Link to='/helix/showapplyer' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Show Job Apply</Link>
                    <Link to='/helix/faq' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Faq</Link>
                    <Link to='/helix/contactform' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>show Contact</Link>
                    {/* <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="signin.html" className="dropdown-item">Sign In</a>
                            <a href="signup.html" className="dropdown-item">Sign Up</a>
                            <a href="404.html" className="dropdown-item">404 Error</a>
                            <a href="blank.html" className="dropdown-item">Blank Page</a>
                        </div>
                    </div> */}
                </div>
            </nav>
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

                            {/* Employers */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">

                        <h6 className="mb-0">Employers</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    {/* <th scope="col"><input className="form-check-input" type="checkbox"/></th> */}
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Job Description</th>
                                    <th scope="col">Number of Opening</th>
                                    <th scope="col">Add Skill</th>
                                    <th scope="col">Salary Details</th>
                                    
                                    <th scope="col">Experience</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Job Timing</th>
                                    <th scope="col">Job Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    job.map((curElm)=>{
                                            var _id = curElm._id 
                                        return(
                                        <>
                                        <tr key={curElm._id}>
                                    <td>{curElm.companyname}</td>
                                    <td>{curElm.empemail}</td>
                                    <td>{curElm.jobtitle}</td>
                                    <td>{curElm.jobdesc}</td>
                                    <td>{curElm.numofopen}</td>
                                    <td>{curElm.addskill}</td>
                                    <td>{curElm.salarydet} </td>
                                    <td>{curElm.exp}</td>
                                    <td>{curElm.location} </td>
                                    <td>{curElm.jobtime} </td>
                                    <td>{curElm.jobaddress} </td>
                                    <td>
                                    
                                        {curElm.approve === "approve"?
                                    <button type="button" className=" hdgr" onClick={()=>{rejectJob(`${_id}`);data()}} ><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
                                    :<button type="button" className="hdgr" onClick={()=>{acceptJob(`${_id}`);data()}} ><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                                    
                            }
                            
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

            

            

        </div>




       
    </div>



    </>

  )
}

export default JobEdit
