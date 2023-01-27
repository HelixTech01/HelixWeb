import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
// var FormData = require('form-data');
const PostJob = () => {
  const [companyType,setCompanyType] = useState([])
  useEffect(()=>{
    const comType = async () =>{
        const data = await axios.get(`https://helix12.herokuapp.com/helix/admin/companytype/show`)
        // console.log(comType)
        setCompanyType(data.data)
    }
    comType()
},[])
    const [addJob,setaddJob] = useState({
        companyname:"",
        c_type:"",
        empemail:"",
        jobtitle:"",
        jobdesc:"",
        numofopen:"",
        addskill:"",
        salarydet:"",
        exp:"",
        location:"",
        jobtime:"",
        jobaddress:"",
    })
    const navigate =useNavigate()
    const returngo = () =>{
      navigate('/helix/dashboardemp',{ replace: true })
    }
    const onFormSubmit = async (e) =>{
        e.preventDefault()
        try {
            const data = await axios.post(`https://helix12.herokuapp.com/helix/job/addjob`,addJob)
            // console.log(data)
            // alert(data.data)
            swal(data.data,'', "success");
            navigate('/helix/dashboardemp',{ replace: true })
        } catch (error) {
          //  alert(error.response.data)
           swal(error.response.data,'', "error");
        }
    }
    const onTextFieldChange = (e) =>{
        setaddJob({
          // add value dynamically
          ...addJob,[e.target.name]:e.target.value
        })
        // console.log(setRegisterEmp())
        // console.log(employer)
      }
      const [showJobs, setShowJobs] = useState([]);
      useEffect(()=>{
          const getJobs = async () =>{
              const showLocation = await  axios.get(`https://helix12.herokuapp.com/helix/admin/show/location`)
              setShowJobs(showLocation.data)
          }
          getJobs()
      }
      ,[])
  return (
    <>
     <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        
                    </div>
             
        <main className="page-content">

<section className="pricing-area section-padding-lg bg-white">
  <div className="container">
 
    <div className="row">
        <div className="col-lg-12 company-form mt-5">
          <div className="pg-contact-form mr-0 mr-lg-3">
            <div className="small-title">
              {/* <h2>Company Details</h2> */}
              
                            <h1>Add Job</h1>
                        
            </div>
            <form id="contact-form"  >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <label htmlFor="companyname" className='labelclass'>Company name</label>
                    <input type="text" name="companyname" onChange={e=>onTextFieldChange(e)} value={addJob.companyname}placeholder="Company Name"/>
                    
                  </div>
                </div>
                
               
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="email" className='labelclass'> Company Email</label>
                    <input type="text" name="email" placeholder="company Email" onChange={e=>onTextFieldChange(e)} value={addJob.email}/>
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobtitle" className='labelclass'> Job title</label>
                    <input type="text" name="jobtitle" placeholder="Job Title" onChange={e=>onTextFieldChange(e)} value={addJob.jobtitle}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobdesc" className='labelclass'> Job Description</label>
                    <input type="text" name="jobdesc" placeholder="Job Description" onChange={e=>onTextFieldChange(e)} value={addJob.jobdesc} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="numofopen" className='labelclass'> Number of Opening</label>
                    <input type="text" name="numofopen" placeholder="Number of Opening" onChange={e=>onTextFieldChange(e)} value={addJob.numofopen}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="addskill" className='labelclass'> Add Skill</label>
                    <textarea type="text" name="addskill" placeholder="Add Skill"onChange={e=>onTextFieldChange(e)} value={addJob.addskill} />
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="salarydet" className='labelclass'> Salary description</label>
                    <textarea type="text" name="salarydet" placeholder="Salary Details"onChange={e=>onTextFieldChange(e)} value={addJob.salarydet} />
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="exp" className='labelclass'> Experience</label>
                    <textarea type="text" name="exp" placeholder="experience"onChange={e=>onTextFieldChange(e)} value={addJob.exp} />
                    
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                    <label htmlFor="addskill" className='labelclasssss'> Job Type</label>
                                     
                                   <select class="form-select "data-trigger
                                        onChange={e=>onTextFieldChange(e)} value={addJob.c_type} className="form-select hfjk" name="c_type"  aria-label="Default select example">
                                          <option >select</option>
                                            {companyType.map((curElm)=>{
                                                return(
                                                    <option name='c_type'>{curElm.c_type}</option>
                                                )
                                            })
                                            }
                                        </select>
                                    </div>
                                </div>
                 <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                       
                                        <label htmlFor="addskill" className='labelclasssss'> Job Time</label>
                                        <select onChange={e=>onTextFieldChange(e)} value={addJob.jobtime}class="form-select hfjk" data-trigger name="jobtime"  aria-label="Default select example">
                                        {/* value={addJob.location}  */}
                                            <option name="">select</option>
                                            <option name="jobtime">Freelance</option>
                                            <option name="jobtime">FullTime</option>
                                            <option name="jobtime">Internship</option>
                                            <option name="jobtime">PartTime</option>
                                        </select>
                                    </div>
                                </div>
                {/* <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobtime" className='labelclass'> jobtime</label>
                    <textarea type="text" name="jobtime" placeholder="jobtime" />
                    
                  </div>
                </div> */}
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobaddress" className='labelclass'> job address</label>
                  
                    <textarea type="text" name="jobaddress" placeholder="job Address"onChange={e=>onTextFieldChange(e)} value={addJob.jobddress} />
                    
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                        
                                        <label htmlFor="jobaddress" className='labelclasssss'> Location</label>
                                        <select onChange={e=>onTextFieldChange(e)} value={addJob.location}class="form-select hfjk" data-trigger name="location"  aria-label="Default select example">
                                        {/* value={addJob.location}  */}
                                        <option name="">select</option>
                                            {showJobs.map((curElm)=>{
                                                return(
                                                    <option  name='location'>{curElm.location}</option>
                                                    
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                <div className="single-input">
                    <button onClick={(e)=>onFormSubmit(e)} className="cr-btn" type="submit">
                      <span>Submit</span>
                      <b></b>
                    </button>
                    <button onClick={()=>returngo()} className="cr-btn gfg" type="button">
                      <span >Cancel</span>
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

export default PostJob