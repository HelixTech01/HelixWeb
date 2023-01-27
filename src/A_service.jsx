import React from "react";
import Header from "./component/header/Header";
import Footer from "./Footer";
import Nav from "./Nav";

const A_service = () => {
  return (
    <>
      {/* <Nav></Nav> */}
      <Header />
      <div className="breadcrumb-area" data-black-overlay="7">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="cr-breadcrumb text-center">
                <h1>A service for lifetime</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-service-area section-padding-lg bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pg-service-details">
                <div className="small-title">
                  <h4>
                    Our Team Moves Faster, Keeping you Current on What's Hot
                  </h4>
                </div>
                <ul className="text-justify">
                  <li>
                    The contract between us and our consultants is not just to
                    the time they are placed into a project, but for a lifetime.
                    We provide On Job Tech-Support. Our objective is to assist
                    you in making a career in Tech Industry so that after you
                    are done with us you don’t have to struggle to find a job
                    for the next 3-4 years.
                  </li>
                  <li>
                    We help you technically Up-skill. To maintain your
                    Immigration status you need to ensure you are continuously
                    employed in your field of study so tech companies may file
                    your extensions & H1B. You need to be technically competent
                    & differentiated from others so that even if you lose 1 job
                    there are multiple companies willing to hire you because of
                    you superior technical skills.
                  </li>
                  <li>
                    Even though USC & GC s don t have to worry about maintaining
                    their status, still if they want to get a good job & high
                    pay rate in the Tech Industry, they need to upgrade their
                    skills. We do that in a more concrete way with a long term
                    approach.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
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
    </>
  );
};

export default A_service;
