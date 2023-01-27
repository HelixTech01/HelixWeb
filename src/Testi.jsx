import React from "react";
import Nav from "./Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "./Footer";
import Nav1 from "./Nav1";
const Testi = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  return (
    <>
      <Nav1 />
      <div class="breadcrumb-area" data-black-overlay="7">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div class="cr-breadcrumb text-center">
                <h1>Testimonials</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main11">
        <div className="container">
          <Slider {...settings}>
            <div>
              <div class="testimonial text-center">
                <div class="testimonial-thumb">
                  <img
                    src={`images/testimonial/small-thumb/thumb-1.png`}
                    alt="testimonial author"
                  />
                </div>
                <div class="testimonial-content">
                  <p>
                    There are many variations of passages Lorem Ipsum, but the
                    majority variations of passages of Lorem Ipsum, but the
                    majority
                  </p>
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
                  <img
                    src={`${process.env.PUBLIC_URL}/images/testimonial/small-thumb/thumb-1.png`}
                    alt="testimonial author"
                  />
                </div>
                <div class="testimonial-content">
                  <p>
                    There are many variations of passages Lorem Ipsum, but the
                    majority variations of passages of Lorem Ipsum, but the
                    majority
                  </p>
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
                  <img
                    src={`${process.env.PUBLIC_URL}/images/testimonial/small-thumb/thumb-1.png`}
                    alt="testimonial author"
                  />
                </div>
                <div class="testimonial-content">
                  <p>
                    There are many variations of passages Lorem Ipsum, but the
                    majority variations of passages of Lorem Ipsum, but the
                    majority
                  </p>
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
                  <img
                    src={`${process.env.PUBLIC_URL}/images/testimonial/small-thumb/thumb-1.png`}
                    alt="testimonial author"
                  />
                </div>
                <div class="testimonial-content">
                  <p>
                    There are many variations of passages Lorem Ipsum, but the
                    majority variations of passages of Lorem Ipsum, but the
                    majority
                  </p>
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
                  <img
                    src={`${process.env.PUBLIC_URL}/images/testimonial/small-thumb/thumb-1.png`}
                    alt="testimonial author"
                  />
                </div>
                <div class="testimonial-content">
                  <p>
                    There are many variations of passages Lorem Ipsum, but the
                    majority variations of passages of Lorem Ipsum, but the
                    majority
                  </p>
                </div>
                <div class="testimonial-author">
                  <h6>William Chester</h6>
                  <p>Apple.Inc</p>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </Slider>
        </div>
      </div>
      <div
        className="modal fade"
        id="login"
        tabindex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel"></h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/* <div className="mb-3">
               <label for="nameControlInput" className="form-label">Mobile Number</label>
               <input type="tel" className="form-control" id="nameControlInput" placeholder="Enter your Mobile Number"/>
            </div> */}
              <div className="mb-3">
                <label for="emailControlInput2" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailControlInput2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <div
        className="modal fade"
        id="loginn"
        tabindex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel"></h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="mb-3">
                <label for="emailControlInput2" className="form-label">
                  Company Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailControlInput2"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Company Logo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Company Logo"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Company Address
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Company Address"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Contact Person
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Contact Person"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Contact Number
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Contact Number"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Email
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Company Description
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Company Description"
                />
              </div>
              <div className="mb-3">
                <label for="emailControlInput3" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="emailControlInput3"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testi;
