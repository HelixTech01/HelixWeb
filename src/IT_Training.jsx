import React, { useEffect } from "react";
import Header from "./component/header/Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Breadcrumb from "./component/breadcrumb/Breadcrumb";

const IT_Training = () => {
  useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      {/* <Nav></Nav> */}
      <Header />

      <Breadcrumb title="Consultant" />

      <section
        id="about-area"
        class="about-area section-padding-lg bg-grey pt-50 pb-0"
      >
        <div class="container">
          <div class="row align-items-center">
            {/* <h2 className='jjfr'>IT Training</h2> */}
            <div class="col-xl-12 col-lg-12 order-2 order-lg-1">
              <div class="about-content1 mt-0">
                <p class="text-justify">
                  The world of technology is evolving at a staggering pace. To
                  keep up, individuals and organizations must collectively and
                  radically align their mindsets for the future – and not just
                  retrofit for the present. Helix Tech-IT Solution provides
                  future-proof digital learning solutions for companies and
                  individuals. With a revolutionary learning platform and
                  specialized certifications, we are focused not just on
                  changing, but also on rewiring your digital DNA. We specialize
                  in Java, FullStack, .Net, BA/DA/QA. Our course content is
                  dynamic as per the current market requirements. We also
                  provide assistance on Java and AWS certification. Hands on
                  training, live projects make you face real time scenarios and
                  problems so can contribute from day one from the client’s
                  side. We have professional full-time trainers from the
                  industry to guide you on your journey with us. The consultants
                  are prepared with mock sessions, client interview preparation
                  and personality development sessions to help you succeed the
                  opportunities that come their way.
                </p>
                <div class="mission-area-content">
                  <h2 className="mt-30">Courses We Offer:</h2>
                  <ul class="cr-liststyle-1">
                    <li>Application Development</li>
                    <li>Python Developer Training</li>
                    <li>Java Programming Training</li>
                    <li>Java/J2EE</li>
                    <li>Data Science</li>
                    <li>Business/Data Analyst</li>
                    <li>.NET Developer Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-area"
        class="about-area section-padding-lg bg-grey pt-20 pb-10"
      >
        <div class="container">
          <div class="row align-items-center">
            {/* <h2 className='jjfr'>Professional Resume & Cover Letter Writing</h2> */}
            <div class="col-xl-12 col-lg-12 order-2 order-lg-1">
              <div class="about-content1 mt-0">
                <p class="text-justify">
                  A resume is your first impression while initiating a job
                  search. A resume represents your profile; hence proper time
                  has to be invested in resume preparation as it lets the
                  employer know about your profile details, educational
                  background, skills, experience, etc.
                </p>
                <p class="text-justify">
                  We have an expert professional resume writers team that helps
                  you with an ideal resume under which they highlight your
                  educational background and the core skills which you possess
                  and will make it keywords optimize which is currently
                  acceptable in the US market. A professional resume is prepared
                  under one page which covers a specific keyword-optimized
                  format.
                </p>
                <p class="text-justify">
                  We will be in constant touch with you during the resume
                  preparation process as to get a better idea about your
                  acquaintance with the technologies and skills that you are
                  comfortable with. A thorough analysis of your profile will be
                  undertaken.
                </p>
                <p class="text-justify">
                  We ensure you more opportunities as per your job preferences
                  of salary, location, etc.
                </p>
              </div>
            </div>
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
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Apply For This Job
                  </h5>
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
                  Send Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pg-service-area section-padding-lg bg-white pt-20 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <h2 className='jjfrGH'>A service for lifetime</h2> */}
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

      <div class="pg-service-area section-padding-lg bg-white pt-10 pb-40">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* <h2 className='jjfrfgdrhgcs'>Alumni</h2> */}
              <h2 class="pg-service-title mb-30">Core Consultant benefits:</h2>
            </div>
            <div class="col-lg-12">
              <div class="pg-service-details">
                <div class="small-title">
                  <h4>(A) Benefits</h4>
                </div>
                <ul class="text-justify">
                  <li>
                    {" "}
                    <strong>FAST GREEN CARD</strong> – PERM PROCESSING
                  </li>
                  <li>
                    <strong>INTERVIEW COUNSELLING</strong>
                    We will appoint a tech expert to guide you through the
                    process of interviews coming your way. Mock interviews and
                    training materials will be provided to prepare you for all
                    the possible questions to be asked.
                  </li>
                  <li>
                    <strong>COMPETITIVE SALARY</strong>
                    It is our moral duty to ensure that you earn what you
                    deserve. We will keep in mind your salary expectations and
                    find the suitable options as per your preferences. An effort
                    to always find an opportunity with better pay will be made.
                  </li>
                  <li>
                    <strong>IMMEDIATE H1B TRANSFER</strong>
                    We understand how difficult and stressful it gets for you
                    out there in the market. We will do our best to get your H1B
                    transferred as soon as possible.
                  </li>

                  <li>
                    <strong>100% JOB PLACEMENT</strong>
                    We guarantee to place you in a project within 30-40 days, if
                    you cooperate with us and are available for the interviews
                    and training sessions.
                  </li>
                  <li>
                    <strong>ONE ON ONE MENTORING</strong>A personal trainer will
                    be assisting you with each and every step such as
                    understanding your resume, how to answer during interviews,
                    if there is a need to furnish any of your skills etc.
                  </li>
                  <li>
                    <strong>
                    PROFILE MAKEOVER
                    </strong>
                    Our marketing team will be working thoroughly on your
                    profile including your resume, social media presence on the
                    job boards, creating you website, etc.
                  </li>
                </ul>
                <div class="small-title">
                  <h4>(B) Careers</h4>
                </div>
                <ul class="text-justify">
                  <li>Join our family, where opportunities are infinite.</li>
                  <li>
                    We are constantly hiring talented heads who are seeking
                    Growth in their Career.
                  </li>
                  <li>
                    Mentioned below are few of the positions which we have
                    available right now:
                  </li>
                </ul>
                <div class="small-title">
                  <h4>(C) Referral Program</h4>
                </div>
                <ul class="text-justify">
                  <li>
                    Every month, we introduce new referral schemes for people
                    who have already joined our company and also for those who
                    wish to.
                  </li>
                  <li>
                    {/* <strong> */}
                    As soon as you register with us, you will receive emails and
                    newsletters regarding our current schemes in the
                    organization.
                    {/* </strong> */}
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

export default IT_Training;
