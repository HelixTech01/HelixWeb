import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Nav1 from './Nav1'
const Place_Job_Order = () => {
  return (
   <>
<Nav1></Nav1>
<div class="breadcrumb-area" data-black-overlay="7">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="cr-breadcrumb text-center">
                            <h1>Place Job Order</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main class="page-content">

<section class="pricing-area section-padding-lg bg-white">
  <div class="container">
    <div class="row">
      <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
        <div class="section-title text-center">
          <h2>Tell Us About Your Hiring Needs</h2>
          <p>We’re committed to fulfilling your unique hiring needs. Fll out the form below & we’ll be in touch shortly</p>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-lg-12 company-form mt-5">
          <div class="pg-contact-form mr-0 mr-lg-3">
            <div class="small-title">
              {/* <h2>Company Details</h2> */}
            </div>
            <form id="contact-form" action="" method="post">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Company Name"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Job title"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Email"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Number of Opening"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Add Skill"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Salary Details"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Experience"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Location"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Job Timing"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Job Address"/>
                  </div>
                </div>
                <div class="col-lg-12 col-md-6">
                  <div class="single-input">
                    <textarea  name="phone" placeholder="Job Description"/>
                  </div>
                </div>
                <div class="single-input">
                    <button class="cr-btn" type="submit">
                      <span>Post Your Order</span>
                      <b></b>
                    </button>
                  </div>
                {/* <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Number of Opening"/>
                  </div>
                </div> */}
                {/* <div class="col-lg-12">
                  <div class="single-input">
                    <textarea name="message" cols="10" rows="2" placeholder="Address"></textarea>
                  </div>
                </div> */}
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-12 company-form mt-5">
          <div class="pg-contact-form mr-0 mr-lg-3">
            <div class="small-title">
              {/* <h2>Contact Person</h2> */}
            </div>
            {/* <form id="contact-form" action="" method="post">
              <div class="row no-gutters">
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="First Name"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Last Name"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="email" name="email" placeholder="E-mail"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="phone" placeholder="Phone"/>
                  </div>
                </div>
                
                <div class="col-lg-12">
                  <div class="single-input">
                    <textarea name="message" cols="10" rows="2" placeholder="Address"></textarea>
                  </div>
                </div>
              </div>
            </form> */}
          </div>
        </div>

        {/* <div class="col-lg-12 company-form mt-5">
          <div class="pg-contact-form mr-0 mr-lg-3">
            <div class="small-title">
             
            </div>
            <form id="contact-form" action="" method="post">
              <div class="row no-gutters">
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Specialization"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Position hirng for"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Job Location"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Preferred Pronoun"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Pay Rate Range"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="single-input">
                    <input type="text" name="name" placeholder="Number of Openings"/>
                  </div>
                </div>
                
                <div class="col-lg-12">
                  <div class="single-input">
                    <textarea name="message" cols="10" rows="2" placeholder="Job Description"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="single-input">
                    <button class="cr-btn" type="submit">
                      <span>Post Your Order</span>
                      <b></b>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div> */}
        
    </div>
  </div>
</section>
<div className="modal fade" id="login" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
         <div className="modal-body p-5">
            <div className="text-center mb-4">
               <h5 className="modal-title" id="staticBackdropLabel"></h5>
            </div>
            <div className="position-absolute end-0 top-0 p-3">
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* <div className="mb-3">
               <label for="nameControlInput" className="form-label">Mobile Number</label>
               <input type="tel" className="form-control" id="nameControlInput" placeholder="Enter your Mobile Number"/>
            </div> */}
            <div className="mb-3">
               <label for="emailControlInput2" className="form-label">Email Address</label>
               <input type="email" className="form-control" id="emailControlInput2" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Password</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Enter your email"/>
            </div>
            {/* <button type="submit" className="btn btn-primary w-100">Login</button> */}
            <a href="#login" data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                        <span>Log In</span>
                    </a>
            
         </div>
      </div>
   </div>
</div>

</main>
<Footer/>
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
               <label for="emailControlInput2" className="form-label">Company Name</label>
               <input type="email" className="form-control" id="emailControlInput2" placeholder="Company Name"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Company Logo</label>
               <input type="file" className="form-control" id="emailControlInput3" placeholder="Company Logo"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Company Address</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Company Address"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Contact Person</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Contact Person"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Contact Number</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Contact Number"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Email</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Company Description</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Company Description"/>
            </div>
            <div className="mb-3">
               <label for="emailControlInput3" className="form-label">Password</label>
               <input type="password" className="form-control" id="emailControlInput3" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign up</button>

         </div>
      </div>
   </div>
</div>

   </>
  )
}

export default Place_Job_Order