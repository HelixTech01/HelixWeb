import React,{useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const ApplyJobs = () => {
    const navigate = useNavigate()
    const {_id} = useParams()
    console.log(_id)
    const clickOne = ()=>{
        // alert('login first')
        swal("login first",'', "error");
       }
    
       const [jobApplyData, setJobApplyData] = useState({
        "name":"",
        "email":"",
        "message":"",
       })
       const [upload,setUpload] = useState('')
    //    let formData = new FormData()
       const onFileChange = (e)=>{
           console.log(e.target.files[0])
            setUpload(e.target.files[0])
       }
        const onFormSubmit = async (e)=>{
            e.preventDefault()
            try {
                const formData = new FormData()
                formData.append('name',jobApplyData.name)
                formData.append('email',jobApplyData.email)
                formData.append('message',jobApplyData.message)
                formData.append('resume',upload)
                formData.append('_id',_id)
                const data =await axios.post('https://helix12.herokuapp.com/helix/job/applyjob',formData)
            // console.log(data)
            // alert(data.data)
            swal(data.data,'', "success");
            navigate('/helix/Job_seekers',{ replace: true })
            } catch (error) {
                // alert(error)
                swal(error,'', "error");
            }
    
        }
        const onTextFieldChange = (e)=>{
            setJobApplyData({
                // add value dynamically
                ...jobApplyData,[e.target.name]:e.target.value
            })
        }
  return (
    <>
    {/* <div class="modal fade" id="applyNow" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true"> */}
    <div className="mogde">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 col-12">
<img src={`.${process.env.PUBLIC_URL}/gra.svg`} className='mk' alt='nothing'/>
            </div>
            <div className="col-lg-6 col-12">
               <div className="masre">
                <h2>Apply now for job</h2>
                <div class="position-absolute end-0 top-0 p-3">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>navigate('/helix/Job_seekers',{ replace: true })} ></button>
                </div>
                <label htmlFor="name" className='moya'>Name</label>
                <input type="Name" className='h' value={jobApplyData.name} onChange={e=>onTextFieldChange(e)} name='name' required id='name' />
                <label htmlFor="email" className='moya'>Enter your email</label>
                <input type="email" name='email' className='h' value={jobApplyData.email} onChange={e=>onTextFieldChange(e)} required id='name' />
                <label htmlFor="message" className='moya'>Enter your message</label>
                <input type="text" className='h' name='message' value={jobApplyData.message} onChange={e=>onTextFieldChange(e)} required id='name' />
                <label htmlFor="file" className='moya'>Resume Upload</label>
                <input type="file" name='file' className='h' onChange={onFileChange}required id='name' />
                {Cookies.get('jemail')?
                <button className='gg' style={{marginTop:'10px'}} onClick={(e)=>onFormSubmit(e)}>Submit</button> :
                <button className='gg' style={{marginTop:'10px'}} onClick={()=>clickOne()}>Submit</button>
            }
               </div>
            </div>
        </div>
    </div>
    </div>
{/* </div> */}
</>
  )
}

export default ApplyJobs