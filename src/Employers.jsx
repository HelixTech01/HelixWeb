import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Nav1 from "./Nav1";
import SignUp from "./employers/SignUp";
import Login from "./employers/Login";
import Header from "./component/header/Header";
import Breadcrumb from "./component/breadcrumb/Breadcrumb";
import "./component/scss/employers.scss";

const Employers = () => {
  var settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

   useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      {/* <Nav1></Nav1> */}
      <Header />

      <Breadcrumb title="Employers" />

      <div className="midenp pt-60 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="mion">
                <h2 className="mt-0">
                  Realistic &<br></br>
                  Common sense<br></br>
                  Solutions to HR Problems
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="misdfe mt-0">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <img src={`${process.env.PUBLIC_URL}/icon-54.png`} alt="" />
                    <h3>
                      Understand Your <br></br> Needs{" "}
                    </h3>
                    <p>
                      Understand your needs or get us to help you sort perfect
                      candidate.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <img src={`${process.env.PUBLIC_URL}/icon-55.png`} alt="" />
                    <h3>Find the Perfect Candidate</h3>
                    <p>
                      For right talent as per your needs, please post or send us
                      your requirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="moti pb-60 mb-0">
        <div className="container">
          <Slider {...settings}>
            <div>
              <div class="single-item">
                <div class="inner-box">
                  <figure class="image-box">
                    <img
                      width="470"
                      height="300"
                      src="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg"
                      class="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image"
                      alt=""
                      loading="lazy"
                      srcset="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg 470w, https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2-300x191.jpg 300w"
                      sizes="(max-width: 470px) 100vw, 470px"
                    />
                  </figure>
                  <div class="lower-content">
                    <h3>Full-Service Recruiting & Solutions.</h3>
                  </div>
                  <div class="side-content">
                    <div class="content-box">
                      <span>01.</span>
                      <figure class="icon-box">
                        <img
                          src="https://helixtechinc.com/wp-content/uploads/2020/09/icon-57.png"
                          alt="Awesome Image"
                        />
                      </figure>
                    </div>
                    <div class="overlay-box">
                      <span>01.</span>
                      <a href="#">
                        <i class="flaticon-right-arrow-angle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item">
                <div class="inner-box">
                  <figure class="image-box">
                    <img
                      width="470"
                      height="300"
                      src="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg"
                      class="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image"
                      alt=""
                      loading="lazy"
                      srcset="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg 470w, https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2-300x191.jpg 300w"
                      sizes="(max-width: 470px) 100vw, 470px"
                    />
                  </figure>
                  <div class="lower-content">
                    <h3>Payrolling & Training Solutions</h3>
                  </div>
                  <div class="side-content">
                    <div class="content-box">
                      <span>02.</span>
                      <figure class="icon-box">
                        <img
                          src="https://helixtechinc.com/wp-content/uploads/2020/09/icon-57.png"
                          alt="Awesome Image"
                        />
                      </figure>
                    </div>
                    <div class="overlay-box">
                      <span>02.</span>
                      <a href="#">
                        <i class="flaticon-right-arrow-angle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item">
                <div class="inner-box">
                  <figure class="image-box">
                    <img
                      width="470"
                      height="300"
                      src="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg"
                      class="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image"
                      alt=""
                      loading="lazy"
                      srcset="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg 470w, https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2-300x191.jpg 300w"
                      sizes="(max-width: 470px) 100vw, 470px"
                    />
                  </figure>
                  <div class="lower-content">
                    <h3>Direct Hire Solutions</h3>
                  </div>
                  <div class="side-content">
                    <div class="content-box">
                      <span>03.</span>
                      <figure class="icon-box">
                        <img
                          src="https://helixtechinc.com/wp-content/uploads/2020/09/icon-57.png"
                          alt="Awesome Image"
                        />
                      </figure>
                    </div>
                    <div class="overlay-box">
                      <span>03.</span>
                      <a href="#">
                        <i class="flaticon-right-arrow-angle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item">
                <div class="inner-box">
                  <figure class="image-box">
                    <img
                      width="470"
                      height="300"
                      src="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg"
                      class="attachment-eazyrecruitz_470x300 size-eazyrecruitz_470x300 wp-post-image"
                      alt=""
                      loading="lazy"
                      srcset="https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2.jpg 470w, https://helixtechinc.com/wp-content/uploads/2020/09/solutions-2-300x191.jpg 300w"
                      sizes="(max-width: 470px) 100vw, 470px"
                    />
                  </figure>
                  <div class="lower-content">
                    <h3>
                      Customized Staffing Solutions and Relationship Building
                    </h3>
                  </div>
                  <div class="side-content">
                    <div class="content-box">
                      <span>04.</span>
                      <figure class="icon-box">
                        <img
                          src="https://helixtechinc.com/wp-content/uploads/2020/09/icon-57.png"
                          alt="Awesome Image"
                        />
                      </figure>
                    </div>
                    <div class="overlay-box">
                      <span>04.</span>
                      <a href="#">
                        <i class="flaticon-right-arrow-angle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* <section class="pricing-area section-padding-lg bg-white">
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
              
            </div>
            <div className="FOIE">
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
              
              </div>
            </form>
            </div>
          </div>
        </div>
        <div class="col-lg-12 company-form mt-5">
          <div class="pg-contact-form mr-0 mr-lg-3">
            <div class="small-title">
              
            </div>
           
          </div>
        </div>

       
        
    </div>
  </div>
</section> */}
      <Login />

      {/* <div className="main11">
  <h2>Testimonials</h2>
        <div className="container">
        <Slider {...settings}>
          <div>


          <div class="testimonial text-center">
                                        <div class="testimonial-thumb">
                                            <img src="images/testimonial/small-thumb/thumb-1.png" alt="testimonial author"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <p>There are many variations of passages Lorem Ipsum, but the majority variations
                                                of passages of Lorem Ipsum, but the majority</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <h6>William Chester</h6>
                                            <p>Apple.Inc</p>
                                        </div>
                                    </div>

          </div>
          <div>
           
          <div class="testimonial text-center">
                                        <div class="testimonial-thumb">
                                            <img src="images/testimonial/small-thumb/thumb-1.png" alt="testimonial author"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <p>There are many variations of passages Lorem Ipsum, but the majority variations
                                                of passages of Lorem Ipsum, but the majority</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <h6>William Chester</h6>
                                            <p>Apple.Inc</p>
                                        </div>
                                    </div>



          </div>
          <div>
            
          <div class="testimonial text-center">
                                        <div class="testimonial-thumb">
                                            <img src="images/testimonial/small-thumb/thumb-1.png" alt="testimonial author"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <p>There are many variations of passages Lorem Ipsum, but the majority variations
                                                of passages of Lorem Ipsum, but the majority</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <h6>William Chester</h6>
                                            <p>Apple.Inc</p>
                                        </div>
                                    </div>





          </div>
          <div>
            
          <div class="testimonial text-center">
                                        <div class="testimonial-thumb">
                                            <img src="images/testimonial/small-thumb/thumb-1.png" alt="testimonial author"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <p>There are many variations of passages Lorem Ipsum, but the majority variations
                                                of passages of Lorem Ipsum, but the majority</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <h6>William Chester</h6>
                                            <p>Apple.Inc</p>
                                        </div>
                                    </div>




          </div>
          <div>
            

          <div class="testimonial text-center">
                                        <div class="testimonial-thumb">
                                            <img src="images/testimonial/small-thumb/thumb-1.png" alt="testimonial author"/>
                                        </div>
                                        <div class="testimonial-content">
                                            <p>There are many variations of passages Lorem Ipsum, but the majority variations
                                                of passages of Lorem Ipsum, but the majority</p>
                                        </div>
                                        <div class="testimonial-author">
                                            <h6>William Chester</h6>
                                            <p>Apple.Inc</p>
                                        </div>
                                    </div>





          </div>
          <div>
            







          </div>
          <div>
          </div>
          <div>
          </div>
        </Slider>
        </div>
        </div> */}
      <Footer />

      <SignUp />
    </>
  );
};

export default Employers;
