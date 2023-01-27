import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router'
// import { BsCheckLg } from "react-icons/bs";
import './admin.css'
import swal from 'sweetalert';
  
const EditJob = () => {
  const {_id} = useParams()
  const navigate = useNavigate()
  const [companyType,setCompanyType] = useState([])
  useEffect(()=>{
    const comType = async () =>{
        const data = await axios.get(`https://helix12.herokuapp.com/helix/admin/companytype/show`)
        // console.log(comType)
        setCompanyType(data.data)
    }
    comType()
},[])
  const [jobs, setJobs] = useState({
    _id:"",
    c_type:"",
    companyname:"",
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
  });
  // console.log(jobs)
  useEffect(()=>{
    async function getJobs(){
      try {
        const showJobs = await axios.patch(`https://helix12.herokuapp.com/helix/job/spec/jobs/${_id}`)
        // console.log(showJobs.data)
        setJobs(showJobs.data)
      } catch (error) {
        console.log(error)
      }
    }
    // console.log(_id)
    getJobs()
  },[_id])
 
  const onTextFieldChange = (e) =>{
    setJobs({
      // add value dynamically
      ...jobs,[e.target.name]:e.target.value
    })
  }

  const onFormSubmit = async (e) =>{
    e.preventDefault()
    try {
      // first is link and second is data
      const data = await axios.patch(`https://helix12.herokuapp.com/helix/job/editjob/${_id}`,jobs)
    //   console.log(data)
      // console.log(_id)
      // alert('job updated')
      swal("job updated", '',"success");
      navigate('/helix/dashboardemp')
    } catch (error) {
      // console.log(error)
      swal(error,'','error')
    }
  }
  // console.log(employer)
  function handleClick() {
    navigate('/helix/dashboardemp')
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
              <h1>Edit Jobs</h1>
            </div>
            <form id="contact-form"  >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    <label htmlFor="companyname" className='labelclass'>company name</label>
                    <input type="text" name="companyname" onChange={e=>onTextFieldChange(e)} value={jobs.companyname}placeholder="Company Name"/>
                    
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="empemail" className='labelclass'> employer Email</label>
                    <input type="text" name="empemail" placeholder="Contact Person" onChange={e=>onTextFieldChange(e)} value={jobs.empemail} disabled/>
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobtitle" className='labelclass'>Job Title</label>
                    <input type="text" name="jobtitle" placeholder="Contact Number" onChange={e=>onTextFieldChange(e)} value={jobs.jobtitle}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobdesc" className='labelclass'> company Email</label>
                    <input type="text" name="jobdesc" placeholder="job description" onChange={e=>onTextFieldChange(e)} value={jobs.jobdesc} disabled/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="numofopen" className='labelclass'> number of open </label>
                    <input type="text" name="numofopen" placeholder="Number of open" onChange={e=>onTextFieldChange(e)} value={jobs.numofopen}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="addskill" className='labelclass'> skills</label>
                    <textarea type="text" name="addskill" placeholder="skills"onChange={e=>onTextFieldChange(e)} value={jobs.addskill} />
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="salarydet" className='labelclass'> salary description</label>
                    <textarea type="text" name="salarydet" placeholder="salary description"onChange={e=>onTextFieldChange(e)} value={jobs.salarydet} />
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="exp" className='labelclass'> experience</label>
                    <textarea type="text" name="exp" placeholder="experience"onChange={e=>onTextFieldChange(e)} value={jobs.exp} />
                    
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="location" className='labelclass'> Job Location</label>
                    <textarea type="text" name="location" placeholder="Job Location"onChange={e=>onTextFieldChange(e)} value={jobs.location} />
                    
                  </div>
                </div> */}
                 <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobaddress" className='labelclass'> job address</label>
                    <textarea type="text" name="jobaddress" placeholder="jobaddress"onChange={e=>onTextFieldChange(e)} value={jobs.jobaddress} />
                    
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                       
                                        <label for="addskill" class="labelclasssss"> Location</label>
                                        <select onChange={e=>onTextFieldChange(e)} value={jobs.location}class="form-select ffdfd" data-trigger name="location"  aria-label="Default select example">
                                        {/* value={addJob.location}  */}
                                            {showJobs.map((curElm)=>{
                                                return(
                                                    <option  name='location'>{curElm.location}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                    <label for="addskill" class="labelclasssss"> Job Type</label>
                                        <select class="form-select ffdff "data-trigger
                                        onChange={e=>onTextFieldChange(e)} value={jobs.c_type} name="c_type"  aria-label="Default select example"
                                        >
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
                {/* <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                  <label htmlFor="jobtime" className='labelclass'>Job Time</label>
                    <textarea type="text" name="jobtime" placeholder="Job Time"onChange={e=>onTextFieldChange(e)} value={jobs.jobtime} />
                    
                  </div>
                </div> */}
                <div class="col-lg-3 col-md-6">
                                    <div class="filler-job-form">
                                       
                                        <label for="addskill" class="labelclasssss"> Job Time</label>
                                        <select onChange={e=>onTextFieldChange(e)} value={jobs.jobtime} class="form-select hfjk" data-trigger name="jobtime"  aria-label="Default select example">
                                        {/* value={addJob.location}  */}
                                            <option value="jobtime">Freelance</option>
                                            <option value="jobtime">FullTime</option>
                                            <option value="jobtime">Internship</option>
                                            <option value="jobtime">PartTime</option>
                                        </select>
                                    </div>
                                </div>
               
                {/* <div className="col-lg-6 col-md-6">
                  <div className="single-input">
                    {jobs.approve === 'approve'?
                    <button type="button" className="btn btn-danger btn-icon rounded-circle" onClick={()=>rejectEmp()} style={{marginLeft:'20px'}}>Reject</button>
                    :
                  <button type="button" className="btn btn-success btn-icon rounded-circle" onClick={()=>acceptEmp()} >Approve</button>
                    }
                  </div>
                </div> */}
                <div className="single-input">
                    <button onClick={(e)=>onFormSubmit(e)} className="cr-btn" type="submit">
                      <span>Submit</span>
                      <b></b>
                    </button>

                     
                    <button className="cr-btn ffsw" type="button">
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

export default EditJob