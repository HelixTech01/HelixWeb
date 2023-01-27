import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Cookies from "js-cookie";
import axios from "axios";
import Breadcrumb from "./component/breadcrumb/Breadcrumb";
import "./component/scss/faq.scss";
import LoginModal from "./component/loginModal/LoginModal";
import Header from "./component/header/Header";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Fa = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const showFaq = async () => {
      // const data = await axios.get(
      //   `https://helix12.herokuapp.com/helix/admin/show/faq`
      // );
      const data = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/helix/Faq/show/faq`
      );
      setFaq(data.data);
    };
    showFaq();
  }, [faq]);

   useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  console.log("faq__", faq);
  return (
    <>
      <div className="wrapper" id="wrapper">
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
                        <Link to="/helix/CONTACT_US">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <a
                    href="#login"
                    data-bs-toggle="modal"
                    className="cr-btn cr-btn-sm"
                  >
                    <span>Sign in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="hsshshsh mobileHeader">
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/helix/About_us">
                      About Us
                    </Link>
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
                      Servivce
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        {" "}
                        <Link
                          className="nav-link "
                          to="/helix/Staff_Augmentation"
                        >
                          Employers
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        {" "}
                        <Link className="nav-link " to="/helix/IT_Training">
                          Consultant
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="nav-link " to="/helix/Employers">
                      Employers
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link " to="/helix/Fa">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link " to="/helix/CONTACT_US">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div> */}

        <Breadcrumb title="FAQ" />

        <main className="page-content pt-40 pb-40">
          <div className="faaa">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <img
                    src={`${process.env.PUBLIC_URL}/faq-1.png`}
                    className="faqqq"
                  />
                </div>

                <div className="col-lg-6 col-sm-6 col-12 " id="hsd">
                  <Accordion className="Accordion">
                    {faq && faq.length ? (
                      faq.map((curElm) => {
                        console.log("curElm_id", curElm._id);
                        return (
                          <>
                            <AccordionItem
                              className="AccordionItem"
                              key={curElm._id}
                            >
                              <AccordionItemHeading>
                                <AccordionItemButton>
                                  {curElm.question}
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                {curElm.answer}
                              </AccordionItemPanel>
                            </AccordionItem>

                            {/* <div className="accordion" id={curElm._id}>
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                // id="flush-heading"
                                id={curElm._id}
                              >
                                <button
                                  className="accordion-button collapsed jj"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${curElm._id}`}
                                  // data-bs-target="#flush-collapseOne"
                                  aria-expanded="false"
                                  // aria-controls="flush-collapseOne"
                                  aria-controls={curElm._id}
                                >
                                  {curElm.question}
                                </button>
                              </h2>
                              <div
                                // id="flush-collapseOne"
                                id={curElm._id}
                                className="accordion-collapse collapse"
                                // aria-labelledby="flush-heading"
                                // data-bs-parent="#accordionExample"
                                aria-labelledby={curElm._id}
                                data-bs-parent={`#${curElm._id}`}
                              >
                                <div className="accordion-body">
                                  <p>{curElm.answer}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                          </>
                        );
                      })
                    ) : (
                      <div className="text-center">
                        <h5>No Data Found</h5>
                      </div>
                    )}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <LoginModal />

      {/* <div
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
              <div className="mb-3">
               <label for="nameControlInput" className="form-label">Mobile Number</label>
               <input type="tel" className="form-control" id="nameControlInput" placeholder="Enter your Mobile Number"/>
            </div>
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
      </div> */}
    </>
  );
};

export default Fa;
