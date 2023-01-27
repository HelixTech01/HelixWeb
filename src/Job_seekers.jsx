import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import JLogin from "./jobseeker/JLogin";
// import Nav from './Nav'
import JobApply from "./jobseeker/JobApply";
import JRegister from "./jobseeker/JRegister";
import Cookies from "js-cookie";
import swal from "sweetalert";
import Breadcrumb from "./component/breadcrumb/Breadcrumb";
// import axios from 'axios'
// import ApplyJobs from './jobseeker/Applyjobs'
// import { useNavigate } from 'react-router-dom'
import "./component/scss/job_seekers.scss";
import Header from "./component/header/Header";

const Job_seekers = () => {
  // console.log(props)
  const navigate = useNavigate();
  const signOut = () => {
    Cookies.remove("jemail");
    navigate("/helix");
    swal("logout successfully", "", "success");
    // window.location.reload();
  };

   useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <div className="wrapper " id="wrapper">
        <Header />


        {/* <header className="header header-style-1 theme-color transparent-header megamenu-container sticky-header">
          <div className="container d-none d-lg-block">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-inner">
                  <div className="logo">
                    <a href="/helix">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        alt="logo secondary dark"
                      />
                    </a>
                  </div>
                  <nav className="menu">
                    <ul>
                      <li>
                        <Link to="/helix/">Home</Link>
                      </li>
                      <li>
                        <Link to="/helix/About_us">About Us</Link>
                      </li>
                      {!Cookies.get("jemail") ? (
                        <li>
                          <Link to="/helix/Employers">Employers</Link>
                        </li>
                      ) : (
                        ""
                      )}

                      <li>
                        <Link to="/helix/Job_seekers">Job seekers</Link>
                      </li>
                      <li>
                        <Link to="/helix/Staff_Augmentation">services</Link>
                      </li>

                      <li>
                        <Link to="/helix/Fa">Faq</Link>
                      </li>
                      <li>
                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                      </li>
                    </ul>
                  </nav>
                  {!Cookies.get("jemail") ? (
                    <>
                      <a
                        href="#login"
                        data-bs-toggle="modal"
                        className="cr-btn cr-btn-sm"
                      >
                        <span>Sign in</span>
                      </a>
                    </>
                  ) : (
                    <button
                      onClick={() => signOut()}
                      data-bs-toggle="modal"
                      className="cr-btn cr-btn-sm"
                    >
                      <span>Sign out</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header> */}

        {/* <div className="hsshshsh mobileHeader">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
              <Link className="navbar-brand" to="/helix/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                  alt=""
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item nav-link" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item nav-link" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item nav-link" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex searchInput">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div> */}

        <Breadcrumb title="Job Seekers" />
      </div>

      <main className="page-content jobSeekers">
        <section className=" section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="me-lg-5">
                  <JobApply />

                  {/* <div className="job-box card mt-4">
                            <div className="bookmark-label text-center">
                                <a href="javascript:void(0)" className="align-middle text-white"><i className="mdi mdi-star"></i></a>
                            </div>
                    </div> */}

                  {/* <div className="row">
                        <div className="col-lg-12 mt-4 pt-2">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination job-pagination mb-0 justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="javascript:void(0)" tabindex="-1">
                                            <i className="mdi mdi-chevron-double-left fs-15"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0)">
                                            <i className="mdi mdi-chevron-double-right fs-15"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div> */}
                </div>
              </div>

              <div className="col-lg-3">
                <div className="side-bar mt-5 mt-lg-0">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item mt-4">
                      <h2 className="accordion-header" id="experienceOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#experience"
                          aria-expanded="true"
                          aria-controls="experience"
                        >
                          Work experience
                        </button>
                      </h2>
                      <div
                        id="experience"
                        className="accordion-collapse collapse show"
                        aria-labelledby="experienceOne"
                      >
                        <div className="accordion-body">
                          <div className="side-title">
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                                checked
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexCheckChecked1"
                              >
                                No experience
                              </label>
                            </div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                                checked
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexCheckChecked2"
                              >
                                0-3 years
                              </label>
                            </div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                                checked
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexCheckChecked3"
                              >
                                3-6 years
                              </label>
                            </div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                                checked
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexCheckChecked4"
                              >
                                More than 6 years
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item mt-3">
                      <h2 className="accordion-header" id="jobType">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#jobtype"
                          aria-expanded="false"
                          aria-controls="jobtype"
                        >
                          Type of employment
                        </button>
                      </h2>
                      <div
                        id="jobtype"
                        className="accordion-collapse collapse show"
                        aria-labelledby="jobType"
                      >
                        <div className="accordion-body">
                          <div className="side-title">
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                                checked
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexRadioDefault6"
                              >
                                Freelance
                              </label>
                            </div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexRadioDefault2"
                              >
                                Full Time
                              </label>
                            </div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexRadioDefault3"
                              >
                                Internship
                              </label>
                            </div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                              />
                              <label
                                className="form-check-label ms-2 text-muted"
                                for="flexRadioDefault4"
                              >
                                Part Time
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {/* {!Cookies.get('jemail')?alert('jk'):<JLogin/>} */}
        <JLogin />

        <JRegister />
      </main>
    </>
  );
};

export default Job_seekers;
