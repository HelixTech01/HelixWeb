import React from 'react'
import Header from './component/header/Header'
import Footer from './Footer'
import Nav from './Nav'

const Professional = () => {
  return (
   <>
   {/* <Nav></Nav> */}
   <Header />
   <div class="breadcrumb-area" data-black-overlay="7">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="cr-breadcrumb text-center">
                            <h1>Professional Resume & Cover Letter Writing</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="about-area" class="about-area section-padding-lg bg-grey">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 order-2 order-lg-1">
                <div class="about-content1">
                    <p class="text-justify">A resume is your first impression while initiating a job search. A resume represents your profile; hence proper time has to be invested in resume preparation as it lets the employer know about your profile details, educational background, skills, experience, etc.</p>
                    <p class="text-justify">We have an expert professional resume writers team that helps you with an ideal resume under which they highlight your educational background and the core skills which you possess and will make it keywords optimize which is currently acceptable in the US market. A professional resume is prepared under one page which covers a specific keyword-optimized format.</p>
                    <p class="text-justify">We will be in constant touch with you during the resume preparation process as to get a better idea about your acquaintance with the technologies and skills that you are comfortable with. A thorough analysis of your profile will be undertaken.</p>
                    <p class="text-justify">We ensure you more opportunities as per your job preferences of salary, location, etc.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade" id="login" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
         <div className="modal-body p-5">
            <div className="text-center mb-4">
               <h5 className="modal-title" id="staticBackdropLabel">Apply For This Job</h5>
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
            <button type="submit" className="btn btn-primary w-100">Send Application</button>
         </div>
      </div>
   </div>
</div>

</section>
<Footer/>
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
            <button type="submit" className="btn btn-primary w-100">Login</button>
         </div>
      </div>
   </div>
</div>

   </>
  )
}

export default Professional