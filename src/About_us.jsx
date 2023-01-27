import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { a } from 'react-router-dom'
import Footer from "./Footer";
import Cookies from "js-cookie";
import Header from "./component/header/Header";
import Breadcrumb from "./component/breadcrumb/Breadcrumb";
import './component/scss/about.scss';
import SectionBgImage from "./component/sectionBgImage/SectionBgImage";



const About_us = () => {
   useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <div className="aboutPage wrapper" id="wrapper">
        {/* Desktop Header */}
        <Header />

        <Breadcrumb title="About Us" />

        <main className="page-content">
          <SectionBgImage>
          <section
            id="about-area11"
            className="about-area section-padding-lg bg-grey pt-50 pb-30"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div
                    className="about-image text-center wow fadeInRight"
                    data-tilt=""
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/about-2.jpg`}
                      alt="about thumb"
                      className="contact_dus_img"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="about-content mt-0">
                    <p className="about-usse">ABOUT US</p>
                    <h2>Company History</h2>
                    <p className="text-justify">
                      Helix Tech-IT Solutions was founded to bridge the gap
                      between IT candidates and the companies that need them.
                    </p>
                    <p className="text-justify">
                      Quality IT professionals are great at their profession,
                      but that doesn’t mean they’re great at finding work. Many
                      top universities produce reliable professionals, but don’t
                      equip them with the skills to find a position that
                      maximizes their talent. That’s where Helix Tech-IT
                      Solutions comes in.
                    </p>
                    <p className="text-justify">
                      We help to not only find the very best in IT talent but
                      also match them with companies they can grow and evolve
                      with. We're building a leading IT community by combining
                      job-seeking, qualified candidates and organizations in
                      need of their services. Our expertise expands across North
                      America to include the United States and Canada. No matter
                      where you're located, our highly experienced and talented
                      team is here to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </SectionBgImage>
          
          <section className="services-area section-padding-lg bg-white pb-40 ">
            <div className="container pt-40">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-6 order-2 order-lg-1">
                  <div className="about-content mt-0">
                    <h2>Company Mission and Goal</h2>
                    <p className="text-justify">
                      At Helix Tech, we understand just how difficult it is for
                      both individuals and organizations in the field of IT. Our
                      team has experienced the struggle of finding a relevant,
                      rewarding, and challenging position as an IT professional,
                      and we've seen how difficult it is for businesses of any
                      size to find the right talent. That's why we've made it
                      our mission to provide world-className IT staffing
                      solutions for individuals and professionals. We want to
                      help qualified experts find a fulfilling job at a
                      fantastic company, and we want to help great organizations
                      find the talent they need to reach their IT goals. We're
                      committed to living up to that goal every single day.
                    </p>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
                  <div
                    className="about-image text-center wow fadeInRight"
                    data-tilt=""
                  >
                    <img
                      className="goals-img mt-40"
                      src={`${process.env.PUBLIC_URL}/1.jpg`}
                      alt="about thumb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

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
      </div>
    </>
  );
};

export default About_us;
