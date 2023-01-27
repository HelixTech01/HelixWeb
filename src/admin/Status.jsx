import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
// import UpdateEmp from './admin/UpdateEmp';


const Status = () => {
    const [employer, setEmployer] = useState([]);
    const [jobSeekers, setJobSeekers] = useState([]);

useEffect(()=>{
    async function getEmployers(){
        try {
            const EmployerData = await axios.get("https://helix12.herokuapp.com/helix/admin/employer")
            // console.log(EmployerData.data)
            setEmployer(EmployerData.data)
        } catch (error) {
            console.log(error)
            
        }

}
getEmployers()
},[])
const navigate = useNavigate()
const logout = () =>{
  Cookies.remove('email')
  navigate('/helix/admin')
}
useEffect(() => {
    async function getJobSeekers(){
        try {
            const JobSeekerData = await axios.get('https://helix12.herokuapp.com/helix/admin/jobseeker')
            setJobSeekers(JobSeekerData.data)

        } catch (error) {
            console.log(error)
        }
    }
    getJobSeekers()
}, []);
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
                    <Link to="/helix/status" className="nav-item nav-link active"><i className="fa fa-th me-2"></i>Status</Link>
                    <Link to='/helix/jobs' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>jobs</Link>
                    <Link to='/helix/locationadd' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>add</Link>
                    <Link to='/helix/showapplyer' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Show Job Apply</Link>
                    <Link to='/helix/faq' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Faq</Link>
                    <Link to='/helix/contactform' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>show Contact</Link>
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
                                    <th scope="col">Company Address</th>
                                    <th scope="col">Contact Person</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Company Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employer.map((curElm)=>{
                                            
                                        return(
                                        <>
                                        <tr key={curElm._id}>
                                    <td>{curElm.c_name}</td>
                                    <td>{curElm.c_address}</td>
                                    <td>{curElm.c_person}</td>
                                    <td>{curElm.c_number}</td>
                                    <td>{curElm.c_email}</td>
                                    <td>{curElm.c_description} </td>
                                    <td>
                                    {
                                            (curElm.approve ==='approve')?
                                            <i className="fa fa-thumbs-up" aria-hidden="true"> </i>
                                            :<i className="fa fa-thumbs-down" aria-hidden="true"> </i>
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

                                    {/* JobSeekers */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">

                        <h6 className="mb-0">Job Seekers</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    {/* <th scope="col"><input className="form-check-input" type="checkbox"/></th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jobSeekers.map((curElm)=>{
                                        // const {id,name,address,person,number,email,desscription} = curElm
                                        return(
                                        <>
                                        <tr key={curElm._id}>
                                    <td>{curElm.j_name}</td>
                                    <td>{curElm.j_number}</td>
                                    <td>{curElm.j_email}</td>
                                    <td>{curElm.j_address}</td>
                                    {/* <td>{curElm.c_description}</td> */}
                                    <td>
                                        {
                                            (curElm.approve ==='approve')?
                                            <i className="fa fa-thumbs-up" aria-hidden="true"> </i>
                                            :<i className="fa fa-thumbs-down" aria-hidden="true"> </i>
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

export default Status
