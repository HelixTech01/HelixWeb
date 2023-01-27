import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router'
import { FcApproval } from "react-icons/fc";
// import { BsCheckLg } from "react-icons/bs";
import './admin.css'
import swal from 'sweetalert';

  
const UpdateEmp = () => {
  const {_id} = useParams()
  const navigate = useNavigate()
  const [employer, setEmployer] = useState({
    _id:"",
    c_name:"",
    c_address:"",
    c_person:"",
    c_number:"",
    c_email:"",
    c_description:""
  });
  // console.log(employer)
  useEffect(()=>{
    async function getEmployer(){
      try {
        const Employers = await axios.get(`https://helix12.herokuapp.com/helix/admin/specemployer/${_id}`)
        // console.log(employers.data)
        setEmployer(Employers.data)
      } catch (error) {
        console.log(error)
      }
    }
    // console.log(_id)
    getEmployer()
  },[_id])
 
  const onTextFieldChange = (e) =>{
    setEmployer({
      // add value dynamically
      ...employer,[e.target.name]:e.target.value
    })
    // console.log(setEmployer())
    // console.log(employer)
  }

  const onFormSubmit = async (e) =>{
    e.preventDefault()
    try {
      // first is link and second is data
      const data = await axios.patch(`https://helix12.herokuapp.com/helix/admin/edit/employer/${_id}`,employer)
      // console.log(data)
      // console.log(_id)
      navigate('/helix/Admin_home')
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(employer)
  function handleClick() {
    navigate('/helix/Admin_home')
}
// approve
const acceptEmp = async () =>{
    try {
       await axios.patch(`https://helix12.herokuapp.com/helix/admin/approve/employers/${_id}`)
      // console.log(data.data)
      // alert('Approved')
      swal("Approved",'', "success");
    } catch (error) {
      // console.log(error)
      swal(error,'','error')
    }
}

// reject
const rejectEmp = async () =>{
  try {
  await axios.patch(`https://helix12.herokuapp.com/helix/admin/reject/employers/${_id}`)
    // console.log(data.data)
    // alert('rejected')
    swal("rejected!",'', "success");
  } catch (error) {
    // console.log(error)
    swal(error,'','error')
  }
}
  return (
   <>
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className=" text-center">
                            <h1>Edit Employer</h1>
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
                    <label htmlFor="c_name" className='labelclass'>company name</label>
                    <input type="text" name="c_name" onChange={e=>onTextFieldChange(e)} value={employer.c_name}placeholder="Company Name"/>
                    
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> company person</label>
                    <input type="text" name="c_person" placeholder="Contact Person" onChange={e=>onTextFieldChange(e)} value={employer.c_person}/>
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> company Number</label>
                    <input type="text" name="c_number" placeholder="Contact Number" onChange={e=>onTextFieldChange(e)} value={employer.c_number}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> company Email</label>
                    <input type="text" name="c_email" placeholder="Email" onChange={e=>onTextFieldChange(e)} value={employer.c_email} disabled/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> company description</label>
                    <input type="text" name="c_description" placeholder="Company Description" onChange={e=>onTextFieldChange(e)} value={employer.c_description}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> company address</label>
                    <textarea type="text" name="c_address" placeholder="Company address"onChange={e=>onTextFieldChange(e)} value={employer.c_address} />
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    {employer.approve === 'approve'?
                    <button type="button" className="btn btn-danger btn-icon rounded-circle" onClick={()=>rejectEmp()}>Reject</button>
                    :
                  <button type="button" className="btn btn-success btn-icon rounded-circle" onClick={()=>acceptEmp()}>Approval</button>
                    }
                  </div>
                </div>
                <div className="single-input">
                    <button onClick={(e)=>onFormSubmit(e)} className="cr-btn hfd" type="submit">
                      <span>Submit</span>
                      <b></b>
                    </button>
                    
                    <button className="cr-btn fgaw" type="button">
                      <span onClick={handleClick}>Cancel</span>
                      <b></b>
                    </button>

                  </div>
                  
              </div>
            </form>
          </div>
        </div>
          
       

        
    </div>
  </div>
</section>

            </main>
   </>
  )
}

export default UpdateEmp