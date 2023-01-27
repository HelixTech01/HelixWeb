import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Software_Development = () => {
  return (
   <>
   <Nav>
   </Nav>
   <div class="breadcrumb-area" data-black-overlay="7">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="cr-breadcrumb text-center">
                            <h1>Software Development</h1>
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
                    <h2>Personalize Your Services and Stay Ahead of the Competition</h2>
                    <p class="text-justify">Software and web development are integral to running a successful company in the 21st century. Unfortunately, many businesses are lacking the necessary skills and professionals to pull off these essential development solutions. At Helix Tech, our team specializes in providing software and web development services to provide companies with the world-class designs, flexible development, and personalized solutions they need to remain competitive. Whether you need an internal-facing or customer-oriented application, we've got you covered! Our highly experienced and skilled team of web and software developers will meet with you to determine exactly what you need to ensure our services are targeted, personalized, and effective. Here are some of the primary highlights of our software and web development services:</p>
                    <div class="mission-area-content">
                       <ul class="cr-liststyle-1">
                          <li>Reduced Turnaround Time</li>
                          <li>Flexible and Scalable Deployment</li>
                          <li>Excellent Quality of Services</li>
                          <li>Efficient and Highly skilled Developers</li>
                          <li>Real-Time Communication</li>
                          <li>User-friendly Design</li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
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

export default Software_Development