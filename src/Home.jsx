import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import swal from "sweetalert";
import "./component/scss/home.scss";
import Footer from "./Footer";
import JRegister from "./jobseeker/JRegister";
import LoginModal from "./component/loginModal/LoginModal";
import Slider from "react-slick";
import MainSlider from "./component/mainSlider/MainSlider";
import { logo } from "./component/images";
import Testimonial from "./component/testimonial/Testimonial";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [empLogin, setEmpLogin] = useState({
    email: "",
    password: "",
  });
  const signOut = () => {
    Cookies.remove("jemail");
    navigate("/helix/Job_seekers");
    swal("logout successfully", "", "success");
    // window.location.reload();
  };
  const changesData = (e) => {
    setEmpLogin({
      ...empLogin,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (Cookies.get("email")) {
      navigate("/helix/dashboardemp");
    }
  });
  const SubmitForm = (e) => {
    e.preventDefault();
    try {
      const loginEmp = async () => {
        const data = await axios.post(
          `${process.env.REACT_APP_ROOT_URL}/helix/login/checklogin`,
          empLogin
        );
        // const data = await axios.post(
        //   `https://helix12.herokuapp.com/helix/login/checklogin`,
        //   empLogin
        // );
        console.log(data.data);
        if (data.data === "employer") {
          // alert('login successful')
          swal("login successful!", "", "success");
          Cookies.set("email", empLogin.email, { expires: 1 });
          navigate("/helix/dashboardemp");
          setEmpLogin({ email: "", password: "" });
          // window.location.reload()
        } else if (data.data === false) {
          // alert('')
          swal("email is not registerd", "", "error");
        } else if (data.data === "jobseeker") {
          swal("login successful!", "", "success");
          Cookies.set("jemail", empLogin.email, { expires: 1 });
          navigate("/helix/Job_seekers");
          setEmpLogin({ email: "", password: "" });
        } else if (data.data === "admin") {
          Cookies.set("admin", empLogin.email, { expires: 1 });
          navigate("/helix/Admin_Home");
        } else {
          // alert(data.data)
          swal(data.data, "", "error");
        }
      };
      loginEmp();
    } catch (error) {
      // console.log(error)
      swal(error, "", "error");
    }
  };

   useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  console.log("pathname_", pathname);
  return (
    <>
      <div className="wrapper sidemenu-wrapper" id="wrapper">
        <div className="hdhdh">
          <aside className="header header-sidemenu sticky-header d-none d-lg-block">
            <div className="header-sidemenu-inner">
              <div className="header-sidemenu-inner-inside">
                <div className="logo">
                  <Link to="/helix/">
                    <img
                      // src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                      src={logo}
                      alt="logo secondary dark"
                    />
                  </Link>
                </div>
                <nav className="menu">
                  <ul>
                    <li
                      className={
                        (pathname == "/helix/") | (pathname == "/") &&
                        "activeLink"
                      }
                    >
                      <Link to="/helix/">Home</Link>
                    </li>
                    <li>
                      <Link to="/helix/About_us">About Us</Link>
                    </li>

                    <li>
                      <Link to="/helix/Employers">Employers</Link>
                    </li>
                    <li>
                      <Link to="/helix/IT_Training">Consultant</Link>
                    </li>

                    {/* {!Cookies.get("jemail") ? (
                      <li>
                        <Link to="/helix/Employers">Employers</Link>
                      </li>
                    ) : (
                      ""
                    )} */}
                    {/* <li className="cr-dropdown">
                       <a href="#">Employers</a>
                       <ul>
                          <li>
                             <a href="javascript:;">Overview</a>
                          </li>
                          <li>
                             <Link to="/Place_Job_Order">Place Job Order</Link>
                          </li>
                          <li>
                             <Link to="/Testi">Testimonials</Link>
                          </li>
                       </ul>
                    </li> */}
                    {/* <li className="cr-dropdown">
                       <a href="javascript:;">Employers</a>
                       <ul>
                          <li>
                             <a href="javascript:;">Overview</a>
                          </li>
                          <li>
                             <Link to="Place_Job_Order">Place Job Order</Link>
                          </li>
                          <li>
                             <Link to="Testi">Testimonials</Link>
                          </li>
                       </ul>
                    </li> */}
                    <li>
                      <Link to="/helix/Job_seekers">Job seekers</Link>
                    </li>
                    <li>
                      <Link to="/helix/Staff_Augmentation">Services</Link>
                    </li>
                    {/* <li className="cr-dropdown">
                                <a href="javascript:;">services</a>
                                <ul>
                                    <li className="cr-sub-dropdown">
                                        <Link to="/Staff_Augmentation">Employers</Link>
                                        <ul>
                                            <li>
                                                <Link to="Staff_Augmentation">Staff Augmentation</Link>
                                            </li>
                                            <li>
                                                <Link to="Software_Development">Software Development</Link>
                                            </li>
                                            <li>
                                                <Link to="IT_Staffing">IT Staffing</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="cr-sub-dropdown">
                                        <Link to="/IT_Training">Consultant</Link>
                                        <ul>
                                            <li>
                                                <Link to="IT_Training">IT Training & Development</Link>
                                            </li>
                                            <li>
                                                <Link to="Professional">Professional Resume & Cover Letter Writing</Link>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Benefits for Jobseekers</a>
                                            </li>
                                            <li>
                                                <Link to ="A_service">A service for lifetime</Link>
                                            </li>
                                            <li>
                                                <Link to="Alumn">Alumni</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    </ul>
                                </li> */}
                    <li>
                      <Link to="/helix/Fa">Faq</Link>
                    </li>
                    <li>
                      <Link to="/helix/CONTACT_US">Contact Us</Link>
                    </li>
                    {Cookies.get("email") ||
                    Cookies.get("jemail") ||
                    Cookies.get("admin") ? (
                      <a
                        data-bs-toggle="modal"
                        onClick={() => signOut()}
                        className="cr-btn cr-btn-round"
                      >
                        Logout
                      </a>
                    ) : (
                      <a
                        href="#login"
                        data-bs-toggle="modal"
                        className="cr-btn cr-btn-round"
                      >
                        <span>Log In</span>
                      </a>
                    )}
                  </ul>
                </nav>
                {/* {!Cookies.get('jemail') && !Cookies.get('email')?
            <a href="#login"  data-bs-toggle="modal" className="cr-btn cr-btn-round">
                <span>Sign in</span>
            </a>
            :
            <a href="#login" onClick={()=>loginOut()} data-bs-toggle="modal" className="cr-btn cr-btn-round">
                <span>Sign out</span>
            </a>
            } */}
                {/* <div className="address">
                <span>
                    <a href="tel:+1 (424) 334-1444">+1 (424) 334-1444</a>
                </span>
                <span>
                    <a href="mailto://hr@helixtechinc.com">hr@helixtechinc.com</a>
                </span>
            </div> */}
                <div className="social-icons">
                  <ul>
                    <li className="facebook">
                      <a href="#">{/* <i className="bi bi-facebook"></i> */}</a>
                    </li>
                    <li className="twitter">
                      <a href="#">{/* <i className="bi bi-youtube"></i> */}</a>
                    </li>
                    <li className="twitter">
                      <a href="#/">
                        {/* <i className="bi bi-twitter-bird"></i> */}
                      </a>
                    </li>
                    <li className="google-plus">
                      <a href="#">{/* <i className="bi bi-google"></i> */}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* mobile Header */}
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
                  <li
                    className={
                      pathname == "/helix/" ? "nav-item activeLink" : "nav-item"
                    }
                  >
                    <Link className="nav-link" aria-current="page" to="/helix/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/helix/About_us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/helix/Employers">
                      Employers
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/helix/IT_Training">
                      Consultant
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/helix/Job_seekers">
                      Job seekers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/helix/Staff_Augmentation">
                      Services
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Servivce
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to="/Staff_Augmentation">Employers</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li> <Link to="/IT_Training">Consultant</Link></li>
          </ul>
        </li> */}
                  <li>{/* <Link to="/Employerss">Employers</Link> */}</li>
                  <li>
                    <Link className="nav-link" to="/helix/Fa">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/helix/CONTACT_US">
                      Contact Us
                    </Link>
                  </li>
                  {Cookies.get("email") ||
                  Cookies.get("jemail") ||
                  Cookies.get("admin") ? (
                    <a
                      data-bs-toggle="modal"
                      onClick={() => signOut()}
                      className="cr-btn cr-btn-round"
                    >
                      Logout
                    </a>
                  ) : (
                    <a
                      href="#login"
                      data-bs-toggle="modal"
                      className="cr-btn cr-btn-round"
                    >
                      <span>Log In</span>
                    </a>
                  )}
                  {/* <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
                </ul>
                {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
              </div>
            </div>
          </nav>
        </div>

        <div className="sidemenu-wrapper-body">
          <header className="header header-style-1 bg-white fixed-header d-block d-lg-none">
            <div className="container d-none d-lg-block">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-inner">
                    <div className="logo">
                      <a href="/">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                          alt="logo secondary dark"
                        />
                      </a>
                    </div>
                    <nav className="menu">
                      <ul>
                        <li>
                          <a href="">Home</a>
                        </li>
                        <li>
                          <a href="/about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="/">Employer</a>
                        </li>
                        <li>
                          <a href="/">Job seekers</a>
                        </li>
                        <li className="cr-dropdown">
                          <a href="javascript:;">services</a>
                          <ul>
                            <li className="cr-sub-dropdown">
                              <a href="about-us.html">Employers</a>
                              <ul>
                                <li>
                                  <a href="Staff-Augmentation.html">
                                    Staff Augmentation
                                  </a>
                                </li>
                                <li>
                                  <a href="Software-Development.html">
                                    Software Development
                                  </a>
                                </li>
                                <li>
                                  <a href="It-Staffing.html">IT Staffing</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown">
                              <a href="services.html">Consultant</a>
                              <ul>
                                <li>
                                  <a href="IT-Training -Development.html">
                                    IT Training & Development
                                  </a>
                                </li>
                                <li>
                                  <a href="Professional-Resume.html">
                                    Professional Resume & Cover Letter Writing
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    Benefits for Jobseekers
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    A service for lifetime
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:;">Alumni</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                    <a
                      href="#login"
                      data-bs-toggle="modal"
                      className="cr-btn cr-btn-round"
                    >
                      <span>Log In</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mobile-menu-wrapper">
            <div className="container d-block d-lg-none">
                <div className="mobile-menu clearfix">
                    <a className="mobile-logo" href="index.html">
                        <img src="images/logo/logo.png" alt="mobile logo"/>
                    </a>
                </div>

            </div>
        </div> */}
          </header>

          <MainSlider />
          {/* banner-area */}
          {/* <div className="banner-area">
            <div
              className="single-banner bg-image-9 fullscreen bg-parallax"
              data-black-overlay="5"
              data-velocity=".2"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="single-banner-content">
                      <h1 style={{ color: "#fff" }}>
                        <Typewriter
                          words={[
                            "Your One-Stop-Shop for Rewarding Jobs & Capable Talent",
                            "Get the talent you need to succeed",
                            "Find a rewarding job in IT",
                          ]}
                          loop={5}
                          cursor
                          cursorStyle="|"
                          // cursorStyle='_'
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          // onLoopDone={handleDone}
                          // onType={handleType}
                        />
                      </h1>

                      <p id="jj">
                        We bring together skilled IT professionals in North
                        America and businesses seeking tech-savvy experts. At
                        Helix Tech, we understand how difficult it is on both
                        sides of the coin: finding a job as an IT pro and
                        finding talent as a company. We’re here to bridge that
                        gap to help individuals and companies reach their goals
                      </p>
                      <Link
                        to="/helix/About_us"
                        className="cr-btn cr-btn-lg cr-btn-round"
                      >
                        <span id="KONW">Know More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <main className="page-content">
            <section
              id="feature-area"
              className="feature-area section-padding-lg bg-grey pt-sm-0 pb-sm-0"
            >
              <div className="container pb-40">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                    <div className="section-title text-center mt-0 pt-30">
                      <h2>What We Offer</h2>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center services-grid">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                    <div className="service text-center mt-0">
                      <div className="service-icon">
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-1.png`}
                            alt="feature icon"
                          />
                        </span>
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-1.png`}
                            alt="feature icon"
                          />
                        </span>
                      </div>
                      <div className="service-content">
                        <h4>Staff Augmentation</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                    <div className="service text-center mt-0">
                      <div className="service-icon">
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-2.png`}
                            alt="feature icon"
                          />
                        </span>
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-2.png`}
                            alt="feature icon"
                          />
                        </span>
                      </div>
                      <div className="service-content">
                        <h4>Software & Web Development</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                    <div className="service text-center mt-0">
                      <div className="service-icon">
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`}
                            alt="feature icon"
                          />
                        </span>
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`}
                            alt="feature icon"
                          />
                        </span>
                      </div>
                      <div className="service-content">
                        <h4>IT Training</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 wow zoomIn">
                    <div className="service text-center mt-0">
                      <div className="service-icon">
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`}
                            alt="feature icon"
                          />
                        </span>
                        <span>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icons/feature-icon-3.png`}
                            alt="feature icon"
                          />
                        </span>
                      </div>
                      <div className="service-content">
                        <h4>Immigration Assistance</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="employerDescription services-area section-padding-lg bg-white ">
              <div className="container pb-30">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                    <div className="section-title text-center">
                      <h2>Employer Description</h2>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12">
                    <div className="about-content mr-sm-0">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            {" "}
                            For Employers
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            For Employees
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="row">
                            <div className="col-lg-5 employee-img">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/employer.png`}
                              />
                            </div>
                            <div className="col-lg-7 col-12">
                              <div className="section-title text-center mt-5 pl-0">
                                <h6>Find the Employees</h6>
                                <h2>
                                  Find your ideal candidate on Helix Tech IT
                                  Solutions
                                </h2>
                                <p className="text-justify">
                                  Helix Tech-IT Solutions is your one-stop staff
                                  provider, we conduct psychometric and
                                  personality testing of candidates to evaluate
                                  them in different aspects such as knowledge,
                                  expertise, behaviour, experience and others.
                                  As we follow an analytical method of
                                  recruitment, it enables us to filter thousands
                                  of candidates and narrow your search to a
                                  selective few that matches best with your work
                                  culture.
                                </p>

                                <Link
                                  to="/helix/IT_Training"
                                  className="cr-btn"
                                >
                                  <span>YOUR REQUIRED TALENT</span>
                                  <b className="top: 167.406px; left: 172.5px;"></b>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="row">
                            <div className="col-lg-7 col-12">
                              <div className="section-title text-center mt-5">
                                <h6>Find Your Right Place</h6>
                                <h2>
                                  Explore your career path with Helix Tech IT
                                  Solutions
                                </h2>
                                <p className="text-justify">
                                  Our Team strives to find the perfect path for
                                  you to start your career with by reaching out
                                  to the best employers and getting you the best
                                  deal.
                                </p>
                                <Link
                                  to="/helix/Job_seekers"
                                  className="cr-btn"
                                >
                                  <span>FIND YOUR REQUIRED JOB</span>
                                  <b className="top: 167.406px; left: 172.5px;"></b>
                                </Link>
                              </div>
                            </div>
                            <div className="col-lg-5 col-12 employee-img">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/employee.png`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section id="about-area" className="about-area section-padding-lg bg-grey">
            <div className="container">
                <div className="row">
                   <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                      <div className="section-title text-center">
                         <h2>About Us</h2>
                      </div>
                   </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12 order-2 order-xl-1">
                        <div className="about-content">
                            <h2>Reliable & Cost Efficiant Recruitment Agency</h2>
                            <p>Helix Tech-IT Solutions is one of the leading Software Development/Staff Augmentation/IT Staffing services providers in the US. We bring together the clients and the suitable candidates, building a community in the IT industry.</p>
                            <a href="about-us.html" className="cr-btn cr-btn-round cr-btn-lg">
                                <span>Know More</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 order-1 order-xl-2">
                        <div className="video-box ml-0 ml-xl-5" data-tilt>
                            <div className="video-box-thumb">
                                <img src="images/about-2.jpg" alt="video-thumb"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

            {/* <section className="job-seekar-description bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                        <div className="section-title text-center">
                            <h2>Job Seeker</h2> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="video-box ml-0 ml-xl-5" data-tilt>
                            <div className="video-box-thumb">
                                <img className="job-seekar-img" src="images/job-seekar.jpg" alt="video-thumb"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h2>Let Us Look For You</h2>
                            <p>We’ve been building quality client relationships locally and across the border so that we can place our candidates with employers. We partner with 100’s of companies in the USA. We have a proven track record of successfully recruiting for many reputed US firms. With our extensive recruitment expertise, proven delivery track record, and having core IT professionals in our recruitment team, our corporate clients know that we understand their business and the type of candidate they need much better than our competitors do.</p>
                            <a href="job-seeker.html" className="cr-btn cr-btn-round cr-btn-lg"> <span>Know More</span> <b className="top: 21.3524px; left: 167px;"></b></a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

            <section className="our_process pt-70 pb-50">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-8 col-sm-9 m-auto">
                    <div className="section-title with-sep title-style-center_text">
                      <div className="title-header">
                        <h2 className="title">How It Works</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="featured-icon-box icon-align-top-content text-center style4">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <img
                            className="process_img"
                            src={`${process.env.PUBLIC_URL}/images/21.png`}
                          />
                          <i className="flaticon-lab-2"></i>
                          <span className="fea-number">01</span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <h6 className="our_process_h5">
                            Let us know what
                            <br /> you need
                          </h6>
                        </div>
                      </div>
                      <div className="arrow">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/arrow-1.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="featured-icon-box icon-align-top-content text-center style4">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <img
                            className="process_img"
                            src={`${process.env.PUBLIC_URL}/images/22.png`}
                          />
                          <i className="flaticon-healthcare-and-medical-1"></i>
                          <span className="fea-number">02</span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <h6 className="our_process_h5">
                            We search for <br /> the best choices.
                          </h6>
                        </div>
                      </div>
                      <div className="arrow flip-arrow">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/arrow-2.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="featured-icon-box icon-align-top-content text-center style4">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <img
                            className="process_img"
                            src={`${process.env.PUBLIC_URL}/images/33.png`}
                          />
                          <i className="flaticon-laboratory-3"></i>
                          <span className="fea-number">03</span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <h6 className="our_process_h5">
                            We schedule interviews.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="moniys mt-0 mb-0">
              <section className="testimonial pt-60 pb-40">
                <div className="container">
                  <div className="row">
                    {/* Images */}
                    <div className="col-lg-6 col-sm-12 col-xs-12 d-none d-lg-block">
                      <ol className="carousel-indicators tabs">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className="active"
                        >
                          <figure>
                            <img
                              src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
                              className="img-fluid"
                              alt=""
                            />
                          </figure>
                        </li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        >
                          <figure>
                            <img
                              src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
                              className="img-fluid"
                              alt=""
                            />
                          </figure>
                        </li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                        >
                          <figure>
                            <img
                              src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
                              className="img-fluid"
                              alt=""
                            />
                          </figure>
                        </li>
                      </ol>
                    </div>
                    {/* Slider  */}
                    <div className="col-lg-6 col-sm-12 col-xs-12 d-none11 d-lg-block11 slider">

                      <Testimonial />
                      {/* <div className="pl-40 pr-30 pl-sm-20 pr-sm-20 pl-xs-0 pr-xs-0">
                        <h3>WHAT OUR CLIENTS SAY</h3>
                        <h1>TESTIMONIALS</h1>

                        <Slider {...settings}>
                          <div className="quote-wrapper ">
                            <p>
                              Working with Helix Tech was a refreshing
                              experience. Before, my company struggled to find
                              an IT professional that matched our needs. After
                              describing the role we needed, Helix’s team was
                              able to provide us with a perfect-fit candidate
                              who has since become one of our most valuable
                              assets. I highly recommend Helix Tech no matter
                              the size or age of your business. It’s that
                              valuable!
                            </p>
                            <h3 className="testiName">Kristin Hans</h3>
                          </div>
                          <div className="quote-wrapper ">
                            <p>
                              Working with Helix Tech was a refreshing
                              experience. Before, my company struggled to find
                              an IT professional that matched our needs. After
                              describing the role we needed, Helix’s team was
                              able to provide us with a perfect-fit candidate
                              who has since become one of our most valuable
                              assets. I highly recommend Helix Tech no matter
                              the size or age of your business. It’s that
                              valuable!
                            </p>
                            <h3 className="testiName">Kristin Hans</h3>
                          </div>
                          <div className="quote-wrapper ">
                            <p>
                              Working with Helix Tech was a refreshing
                              experience. Before, my company struggled to find
                              an IT professional that matched our needs. After
                              describing the role we needed, Helix’s team was
                              able to provide us with a perfect-fit candidate
                              who has since become one of our most valuable
                              assets. I highly recommend Helix Tech no matter
                              the size or age of your business. It’s that
                              valuable!
                            </p>
                            <h3 className="testiName">Kristin Hans</h3>
                          </div>
                        </Slider>
                      </div> */}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <LoginModal />

            {/* <form action="" onSubmit={SubmitForm}>
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
                        <h5
                          className="modal-title"
                          id="staticBackdropLabel"
                        ></h5>
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
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={empLogin.email}
                          id="email"
                          name="email"
                          onChange={(e) => changesData(e)}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={empLogin.password}
                          onChange={(e) => changesData(e)}
                          placeholder="Enter password"
                        />
                      </div>
                     
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-3"
                      >
                        Sign In
                      </button>
                      Need an account
                      <a
                        href="#loginnn"
                        data-bs-toggle="modal"
                        className="cr-btn-sm"
                      >
                        <span> Sign Up</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form> */}

            <section className="callto-action-area bg-theme">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-1 col-12 offset-0">
                    <div className="callto-action">
                      <div className="callto-action-inner">
                        <h2>To start your project with us</h2>
                        <Link
                          to="/helix/CONTACT_US"
                          className="cr-btn cr-btn-white"
                        >
                          <span>Contact Us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
          <JRegister />
          {/* <footer id="footer" className="footer-area">
            <div className="footer-top-area bg-dark-light section-padding-sm">
              <div className="container">
                <div className="footer-widgets widgets">
                  <div className="row">
                    <div className="col-xl-5 col-md-6 col-12">
                      <div className="single-widget footer-widget-about">
                        <a href="/">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                            alt="footer logo"
                          />
                        </a>
                        <p className="fo">
                          Helix Tech-IT Solutions is one of the leading Software
                          Development/Staff Augmentation/IT Staffing services
                          providers in the US. We bring together the clients and
                          the suitable candidates, building a community in the
                          IT industry.
                        </p>
                      </div>

                      <div className="single-widget widget-newsletter">
                        <form action="#" method="post" className="newsletter-widget-form">
                                    <input type="email" placeholder="Your Email"/>
                                    <button type="submit" className="cr-btn cr-btn-sm">
                                        <span>Subscribe</span>
                                    </button>
                                </form>
                      </div>
                    </div>

                    <div className="col-xl-3 col-md-6 col-12">
                      <div className="single-widget widget-quick-links">
                        <h5 className="footer-widget-title">QUICK LINK</h5>
                        <ul>
                          <li>
                            <Link to="/helix/">Home</Link>
                          </li>
                          <li>
                            <Link to="/helix/About_us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/helix/Employers">Employer</Link>
                          </li>
                          <li>
                            <Link to="/helix/Job_seekers">Job seekers</Link>
                          </li>
                          <li>
                            <Link to="/helix/fa">Faq</Link>
                          </li>
                          <li>
                            <Link to="/helix/CONTACT_US">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12">
                      <div className="single-widget widget-quick-contact">
                        <h5 className="footer-widget-title">Quick Contact</h5>
                        <ul>
                          <li>
                            <span>Phone</span>
                            <p>
                              <a href="tel:+1 (424) 334-1444">
                                +1 (424) 334-1444
                              </a>
                            </p>
                            <p></p>
                          </li>
                          <li>
                            <span>Email</span>
                            <p>
                              <a href="#">hr@helixtechinc.com</a>
                            </p>
                            <p></p>
                          </li>
                          <li>
                            <span>Address</span>
                            <p>
                              <strong>USA Office :</strong> 16192 Coastal Hwy,
                              Lewes, DE-19958, USA
                            </p>
                            <p>
                              <strong>Canada Office :</strong> Unit #913, 2
                              Glamorgan Avenue, Scarborough, Ontario, Canada
                              M1P2M8
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
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
                  <label for="nameControlInput" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="nameControlInput"
                    placeholder="Email Address"
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
      </div>
    </>
  );
};

export default Home;
