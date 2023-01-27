import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Cookies from "js-cookie";
import axios from "axios";
import swal from "sweetalert";
import "./component/scss/contact.scss";
import Breadcrumb from "./component/breadcrumb/Breadcrumb";
import LoginModal from "./component/loginModal/LoginModal";
import Header from "./component/header/Header";
import canadaIcon from './assets/img/canada.png'
import usaIcon from './assets/img/usa.png'
import ukIcon from './assets/img/uk.png'
const CONTACT_US = () => {
  const [formSend, setFormSend] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const ContactForm = async (e) => {
    e.preventDefault(e);
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_ROOT_URL}/helix/contactform/form`,
        formSend
      );
      // const data = await axios.post(
      //   "https://helix12.herokuapp.com/helix/contactform/form",
      //   formSend
      // );
      // console.log(data.data)
      swal(
        "Message sent successfully",
        "We will contact you shortly",
        "success"
      );
      setFormSend({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      swal(error, "", "error");
    }
  };

  const onSubmitForm = (e) => {
    setFormSend({
      ...formSend,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

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
                    <a href="index.html">
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
                        <Link to="/helix/Staff_Augmentation">Services</Link>
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
                    <span>sign in</span>
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

        <Breadcrumb title="Contact Us" />

        <div className="contactPage pg-contact-us-area section-padding-lg bg-white pb-30 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="pg-contact-form mr-0 mr-lg-3">
                  <div className="small-title">
                    <h2>Contact Form</h2>
                  </div>
                  <form id="contact-form" onSubmit={(e) => ContactForm(e)}>
                    <div className="row no-gutters">
                      <div className="col-lg-6 col-md-6">
                        <div className="single-input">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formSend.name}
                            required
                            onChange={(e) => onSubmitForm(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single-input">
                          <input
                            type="email"
                            placeholder="E-mail"
                            value={formSend.email}
                            name="email"
                            required
                            onChange={(e) => onSubmitForm(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single-input">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                            value={formSend.phone}
                            onChange={(e) => onSubmitForm(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single-input">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            value={formSend.subject}
                            onChange={(e) => onSubmitForm(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input">
                          <textarea
                            name="message"
                            cols="10"
                            rows="4"
                            placeholder="Message"
                            required
                            value={formSend.message}
                            onChange={(e) => onSubmitForm(e)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input">
                          {/* <Link href="Home11"> */}
                          <button className="cr-btn" type="submit">
                            <span>Send Now</span>
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pg-contact-details">
                  <div className="small-title">
                    <h2 className="mt-30">Quick contact</h2>
                  </div>
                  <ul>
                    <li className="single-quick-contact">
                      <h5>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        Phone Number
                      </h5>
                      <p className="contactNumber">
                        {/* <a href="#">+88012659845</a>
                        <a href="#">+88012659864</a> */}

                        <a href="#"><img className="icon" src={usaIcon} />+1(424) 334-1444</a>
                        <a href="#"><img className="icon" src={canadaIcon} />+1 88888 22658 (Toll Free)</a>
                        <a href="#"><img className="icon" src={ukIcon} />+44 204-579-9169</a>
                      </p>
                    </li>
                    <li className="single-quick-contact">
                      <h5>
                        <i class="fa fa-envelope" aria-hidden="true"></i>E-Mail
                        Address
                      </h5>
                      <p>
                        <a href="mailto:hr@helixtechinc.com">
                          hr@helixtechinc.com
                        </a>
                      </p>
                    </li>
                    <li className="single-quick-contact">
                      <h5>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>USA
                        Address
                      </h5>
                      <p>16192 Coastal Hwy, Lewes, DE-19958</p>
                    </li>
                    <li className="single-quick-contact">
                      <h5>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Canada Address
                      </h5>
                      <p>2 Glamorgan Avenue Toronto, Ontario Canada M1P 2M8</p>
                    </li>
                    <li className="single-quick-contact">
                      <h5>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>UK
                        Address
                      </h5>
                      <p>
                        Oaktree House 408 Oakwood Lane Leeds, England LS8 3LG{" "}
                      </p>
                    </li>
                    <li className="single-quick-contact">
                      <h5>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>India
                        Address
                      </h5>
                      <p>
                        A-2301/2305, Privilon, Behind Iskcon Temple, Iskcon
                        Cross Road, Ahmedabad-380054, Gujarat
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="row section-padding-top-xs">
            <div className="col-lg-6 offset-lg-3">
                <div className="small-title text-center">
                    <h2>Contact Maps</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority Lorem Ipsum
                        available.
                    </p>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="contact-map">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
          </div>
        </div>
        <Footer />
        <LoginModal />
      </div>
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

export default CONTACT_US;
