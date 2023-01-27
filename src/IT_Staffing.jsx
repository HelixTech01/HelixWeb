import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const IT_Staffing = () => {
  return (
    <>
    <Nav/>
    <div class="breadcrumb-area" data-black-overlay="7">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="cr-breadcrumb text-center">
                            <h1>IT Staffing</h1>
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
                                <h2>Harness Top-Notch IT Talent</h2>
                                <p class="text-justify">When it comes to tech staffing, nobody does it better than Helix Tech-IT Solutions. We are a dedicated team of workforce specialists that connect highly skilled & thoroughly vetted IT professionals to the top companies of US. Our sharp-eyed recruiters easily identify the skill-gaps of organizations and help them find their best-fit. We also assist tech aspirants in building a solid IT career that aligns well with their professional goals and passion.</p>
                                <p class="text-justify">Helix Tech-IT Solutions is your one-stop staff provider, we conduct psychometric and personality testing of candidates to evaluate them in different aspects such as knowledge, expertise, behaviour, experience and others. As we follow an analytical method of recruitment, it enables us to filter thousands of candidates and narrow your search to a selective few that matches best with your work culture.</p>
                                <p class="text-justify">Our agenda is to strengthen your existing team with competent developers, engineers, and programmers. Operating in the bay area gives us a wonderful advantage to do local market search and find a huge pool of IT talent with minimal or no culture gap. Our seasoned hiring agents take time to understand your staffing needs and deploy advanced source tools for swift delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer> </Footer>
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

export default IT_Staffing