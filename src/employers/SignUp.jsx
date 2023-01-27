import React,{useState,useEffect} from 'react'
import axios from 'axios'
// var FormData = require('form-data');
import swal from 'sweetalert';
const SignUp = () => {
    const [registerEmp,setRegisterEmp] = useState({
        "c_name":"",
        "c_type":"",
        "c_address":"",
        "c_person":"",
        "c_number":"",
        "c_email":"",
        "c_password":"",
        "c_repassword":"",
        "c_description":"",
    })
    const onFormSubmit = async (e) =>{
        e.preventDefault()
        try {
            const data = await axios.post(`http://localhost:5000/helix/register/employer`,registerEmp,
            )
            console.log(data)
            // alert()
            swal(data.data,'', "success");
        } catch (error) {
         //   alert(error.response.data)
           swal(error.response.data,'', "error");
        }
    }
    const onTextFieldChange = (e) =>{
        setRegisterEmp({
          // add value dynamically
          ...registerEmp,[e.target.name]:e.target.value
        })
        // console.log(setRegisterEmp())
        // console.log(employer)
      }
    
  return (
    <div className="modal fade" id="loginn" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
         <div className="modal-body p-5">
            <div className="text-center mb-4">
               <h5 className="modal-title" id="staticBackdropLabel"></h5>
            </div>
            <div className="position-absolute end-0 top-0 p-3">
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="mb-3">
               <label htmlFor="" className="form-label">Employer Registration</label>
               </div>
            <div className="mb-3">
               <label htmlFor="c_name" className="form-label"  >Company Name</label>
               <input type="text" name='c_name' className="form-control"  placeholder="Company Name" onChange={e=>onTextFieldChange(e)} value={registerEmp.c_name} />
            </div>
            {/* <div className="mb-3">
               <label htmlFor="c_logo" className="form-label" >Company Logo</label>
               <input type="file" className="form-control"  placeholder="Company Logo" name='c_logo' onChange={e=>onTextFieldChange(e)} value={registerEmp.c_logo} />
            </div> */}
            {/* <div className="mb-3">
               <label htmlFor="c_address" className="form-label" >Company Type</label>
               <input type="text" className="form-control"  placeholder="Company Type" name='c_type'  onChange={e=>onTextFieldChange(e)} value={registerEmp.c_type}/>
            </div> */}
            
            <div className="mb-3">
               <label htmlFor="c_address" className="form-label" >Company Address</label>
               <input type="text" className="form-control"  placeholder="Company Address" name='c_address'  onChange={e=>onTextFieldChange(e)} value={registerEmp.c_address}/>
            </div>
            <div className="mb-3">
               <label htmlFor="c_person" className="form-label" >Contact Person</label>
               <input type="text" className="form-control"  placeholder="Contact Person" name='c_person'onChange={e=>onTextFieldChange(e)} value={registerEmp.c_person} />
            </div>
            <div className="mb-3">
               <label htmlFor="c_number" className="form-label" >Contact Number</label>
               <input type="text" className="form-control"  placeholder="Contact Number" name='c_number' onChange={e=>onTextFieldChange(e)} value={registerEmp.c_number} />
            </div>
            <div className="mb-3">
               <label htmlFor="c_email" className="form-label" >Email</label>
               <input type="email" className="form-control"  placeholder="Enter your email" name='c_email' onChange={e=>onTextFieldChange(e)} value={registerEmp.c_email} />
            </div>
            <div className="mb-3">
               <label htmlFor="c_description" className="form-label" >Company Description</label>
               <input type="text" className="form-control"  placeholder="Company Description" name='c_description' onChange={e=>onTextFieldChange(e)} value={registerEmp.c_description} />
            </div>
            <div className="mb-3">
               <label htmlFor="c_password" className="form-label" >Password</label>
               <input type="password" className="form-control"  placeholder="Password" name='c_password' onChange={e=>onTextFieldChange(e)} value={registerEmp.c_password} />
            </div>
            <div className="mb-3">
               <label htmlFor="c_repassword" className="form-label" >Retype Password</label>
               <input type="password" name='c_repassword' className="form-control"  placeholder="Password" onChange={e=>onTextFieldChange(e)} value={registerEmp.c_repassword} />
            </div>
            <button type="submit" onClick={(e)=>onFormSubmit(e)} className="btn btn-primary w-100">Sign up</button>

         </div>
      </div>
   </div>
</div>
  )
}

export default SignUp