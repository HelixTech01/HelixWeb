import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';

import swal from 'sweetalert';
// import {FiEdit } from "react-icons/fi";
const ContactForm = () => {
    const [form, setForm] = useState([]);
    // const [jobSeekers, setJobSeekers] = useState([]);

useEffect(()=>{
    async function getFormData(){
        try {
            const data = await axios.get("https://helix12.herokuapp.com/helix/contactform/form")
            console.log(data.data)
            setForm(data.data)
        } catch (error) {
            console.log(error)
        }

}
getFormData()
},[])


const navigate = useNavigate()
const logout = () =>{
    Cookies.remove('admin')
    // alert('logout successful')
    swal("logout successful!",'', "success");
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
                    <a  className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Users</a>
                    <div className="nav-item dropdown">
                        
                           </div>
                    <Link to="/helix/status" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Status</Link>
                    <Link to='/helix/jobs' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>jobs</Link>
                    <Link to='/helix/locationadd' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i> add</Link>
                    <Link to='/helix/showapplyer' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Show Job Apply</Link>
                    <Link to='/helix/faq' className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Faq</Link>
                    <Link to='/helix/contactform' className="nav-item nav-link active"><i className="fa fa-keyboard me-2"></i>show Contact</Link>
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
                                    <img className="rounded-circle" src="img/user.jpg" alt="" />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        {/* <small>15 minutes ago</small> */}
                                    </div>
                                </div>
                            </a>
                           </div>
                           </div>
                        
                   
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            {/* <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" /> */}
                            <span className="d-none d-lg-inline-flex">Admin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            {/* <a href="#" className="dropdown-item">My Profile</a> */}
                            {/* <a href="#" className="dropdown-item">Settings</a> */}
                            <button onClick={()=>logout()} className="dropdown-item">Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>

                            {/* Employers */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">

                        <h6 className="mb-0">show Contact Forms</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    {/* <th scope="col"><input className="form-check-input" type="checkbox"/></th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    form.map((curElm)=>{
                                            
                                        return(
                                        <>
                                        <tr key={curElm._id}>
                                    <td>{curElm.name}</td>
                                    {/* <td>{curElm.c_type}</td> */}
                                    {/* <td>{curElm.address}</td> */}
                                    <td>{curElm.email}</td>
                                    <td>{curElm.phone}</td>
                                    <td>{curElm.subject}</td>
                                    <td>{curElm.message}</td>
{/* 
                                    <td><Link className="btn btn-sm btn-primary" style={{"borderRadius": "10px"}} to={`/UpdateEmp/${curElm._id}`}><FiEdit></FiEdit></Link> */}
                                    {/* <a className="btn btn-sm btn-danger" href="" style={{"border-radius": "10px"}}>delete</a> */}
                                    {/* </td> */}
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


{/* <ApplyJobs/> */}
    </>

  )
}

export default ContactForm
