import React from "react";
import { Link } from "react-router-dom";
import { logo } from "./component/images";
import "./component/scss/footer.scss";

import canadaIcon from "./assets/img/canada.png";
import usaIcon from "./assets/img/usa.png";
import ukIcon from "./assets/img/uk.png";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-area">
        <div className="footer-top-area bg-dark-light section-padding-sm pt-50 pb-50">
          <div className="container">
            <div className="footer-widgets widgets">
              <div className="row">
                <div className="col-xl-4 col-md-12 col-12">
                  <div className="single-widget footer-widget-about">
                    <Link className="footer logo" to="/">
                      <img
                        // src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        src={logo}
                        alt="footer logo"
                      />
                    </Link>
                    <p>
                      Helix Tech-IT Solutions is one of the leading Software
                      Development/Staff Augmentation/IT Staffing services
                      providers in the US. We bring together the clients and the
                      suitable candidates, building a community in the IT
                      industry.
                    </p>
                  </div>

                  <div className="single-widget widget-newsletter">
                    {/* <form action="#" method="post" className="newsletter-widget-form">
                            <input type="email" placeholder="Your Email"/>
                            <button type="submit" className="cr-btn cr-btn-sm">
                                <span>Subscribe</span>
                            </button>
                        </form> */}
                  </div>
                </div>

                <div className="col-xl-2 col-md-6 col-12">
                  <div className="single-widget widget-quick-links">
                    <h5 className="footer-widget-title">QUICK LINK</h5>
                    <ul>
                      <li>
                        <Link to={"/helix/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/helix/About_us"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/helix/Employers"}>Employer</Link>
                      </li>
                      <li>
                        <Link to={"/helix/IT_Training"}>Consultant</Link>
                      </li>
                      <li>
                        <Link to={"/helix/Job_seekers"}>Job seekers</Link>
                      </li>
                      <li>
                        <Link to={"/helix/fa"}>Faq</Link>
                      </li>
                      <li>
                        <Link to={"/helix/CONTACT_US"}>Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 col-12">
                  <div className="single-widget widget-quick-contact">
                    <h5 className="footer-widget-title">Quick Contact</h5>
                    <div className="QuickContactFlex">
                      <ul>
                        <li className="contactNumber">
                          <span>Phone</span>
                          <p>
                            <a href="tel:+14243341444">
                              {/* <i class="fa fa-phone" aria-hidden="true"></i> */}
                              <img className="icon" src={usaIcon} />
                              +1 (424) 334-1444
                            </a>
                          </p>
                          <p>
                            <a href="tel:8888822658">
                              {/* <i class="fa fa-phone" aria-hidden="true"></i> */}
                              <img className="icon" src={canadaIcon} />
                              +1 88888 22658 (Toll Free)
                            </a>
                          </p>
                          <p>
                            <a href="tel:+442045799169">
                              {/* <i class="fa fa-phone" aria-hidden="true"></i> */}
                              <img className="icon" src={ukIcon} />
                              +44 204-579-9169
                            </a>
                          </p>
                        </li>
                        <li>
                          <span>Email</span>
                          <p>
                            <Link to="mailto:hr@helixtechinc.com">
                              <i class="fa fa-envelope" aria-hidden="true"></i>
                              hr@helixtechinc.com
                            </Link>
                          </p>
                          <p></p>
                        </li>
                      </ul>
                      <ul>
                        <li className="fAddress">
                          <span>Address</span>
                          <p>
                            <strong>
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                              USA Office :
                            </strong>{" "}
                            16192 Coastal Hwy, Lewes, DE-19958, USA
                          </p>
                          <p>
                            <strong>
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                              Canada Office :{" "}
                            </strong>{" "}
                            2 Glamorgan Avenue, Scarborough, Ontario, Canada
                            M1P2M8
                          </p>
                          <p>
                            <strong>
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                              UK Office :{" "}
                            </strong>{" "}
                            Oaktree House 408 Oakwood Lane Leeds, England LS8
                            3LG
                          </p>
                          <p>
                            <strong>
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                              India Office :{" "}
                            </strong>{" "}
                            A-2301/2305, Privilon, Behind Iskcon Temple, Iskcon
                            Cross Road, Ahmedabad-380054, Gujarat
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
