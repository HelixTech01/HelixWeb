import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router'
// import { BsCheckLg } from "react-icons/bs";
import './admin.css'
import swal from 'sweetalert';
  
const UpdateJobAppliers = () => {
  const {_id} = useParams()
  const navigate = useNavigate()
  const [findAppliers, setFindAppliers] = useState({
    
});
  // console.log(findAppliers)
  useEffect(()=>{
    async function getAppliers(){
      try {
        const showJobsAppliers = await axios.get(`https://helix12.herokuapp.com/helix/job/find/appliers/${_id}`)
        // console.log(employers.data)
        setFindAppliers(showJobsAppliers.data)
      } catch (error) {
        console.log(error)
      }
    }
    // console.log(_id)
    getAppliers()
  },[_id])
 
// download pdf
const pdfData = () =>{
  axios({
      url: `https://helix12.herokuapp.com/helix/job/resume/${_id}`,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${_id}.pdf`);
      document.body.appendChild(link);
      link.click();
    });
}

  function handleClick() {
    navigate('/helix/Admin_home')
}
// approve
const acceptEmp = async () =>{
    try {
       await axios.patch(`https://helix12.herokuapp.com/helix/job/approve/appliers/${_id}`)
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
  await axios.patch(`https://helix12.herokuapp.com/helix/job/reject/appliers/${_id}`)
    // console.log(data.data)
    // alert('rejected')
    swal("rejected",'', "success");  
  } catch (error) {
    // console.log(error)
    swal(error,'','error')
  }
}
  return (
   <>
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className=" text-center">
                         
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
              <h1>Approve and reject Job Appliers</h1>

            </div>
            <form id="contact-form" onSubmit={e=>e.preventDefault()} >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <label htmlFor="c_name" className='labelclass'>Job applier  Id</label>
                    <input type="text" name="c_name" disabled value={findAppliers._id}placeholder="Company Name"/>
                    
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> Job Id</label>
                    <input type="text" name="c_person" placeholder="Contact Person" disabled value={findAppliers.jobid}/>
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> name</label>
                    <input type="text" name="c_number" placeholder="Contact Number" disabled value={findAppliers.name}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> Email</label>
                    <input type="text" name="c_email" placeholder="Email"  value={findAppliers.email} disabled/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'> message</label>
                    <textarea type="text" name="c_description" placeholder="Company Description" disabled value={findAppliers.message}/>
                  </div>
                </div>
                
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="c_address" className='labelclass'>Resume</label>
                  <button onClick={()=>pdfData()}>Download</button>
                  </div>
                </div>
               
                
              
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    {findAppliers.status === 'approve'?
                    <button type="button" className="btn btn-danger btn-icon rounded-circle" onClick={()=>rejectEmp()} style={{marginLeft:'20px'}}>Reject</button>
                    :
                  <button type="button" className="btn btn-success btn-icon rounded-circle" onClick={()=>acceptEmp()} >Approve</button>
                    }

                    
                  </div>
                </div>
                <div className="single-input" style={{marginLeft:"30rem"}}>
                    <button className="cr-btn" type="button">
                      <span onClick={handleClick}>Cancel</span>
                      <b></b>
                    </button>
                  </div>
                
                {/* <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  
                  </div>
                </div> */}
                {/* <div className="single-input">
                    <button onClick={(e)=>onFormSubmit(e)} className="cr-btn" type="submit">
                      <span>Submit</span>
                      <b></b>
                    </button>
                  </div> */}
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

export default UpdateJobAppliers