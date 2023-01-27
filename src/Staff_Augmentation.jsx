import React, { useEffect } from "react";
import Breadcrumb from "./component/breadcrumb/Breadcrumb";
import Header from "./component/header/Header";
import Footer from "./Footer";
import Nav from "./Nav";
import './component/scss/staff_Augmentation.scss'
import SectionBgImage from "./component/sectionBgImage/SectionBgImage";

const Staff_Augmentation = () => {

   useEffect(() => {
    // console.log("is_ useEffect");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      {/* <Nav></Nav> */}
      <Header />

      <Breadcrumb title="Services" />

      {/* <h2 className='jjfr'>Staff Augmentation</h2> */}
      {/* <section id="about-area" class="about-area section-padding-lg bg-grey">
    <div class="container">
        <div class="row align-items-center">
         <h2 className='jjfr'>Staff Augmentation</h2>
            <div class="col-xl-12 col-lg-12 order-2 order-lg-1">
                <div class="about-content1">
                    <h2>Build Out the IT Team You Need No Matter the Size </h2>
                    <p class="text-justify">There are times when running an IT team is a numbers game. Sometimes, you need to beef up your current IT staff to tackle a temporary project. Other times, you have to cut back due to money-saving efforts or shifting focus. Regardless of the reason, businesses regularly need to increase the size of their staff without much notice. That's where Helix Tech's staff augmentation services can help!</p>
                    <p class="text-justify">We've helped countless businesses, from SMBs to Fortune 500 companies, achieve their goals by acquiring the right IT talent. We have access to a large pool of qualified professionals so you can always get the perfect number of people you need. Our 24/7 recruiting model is always up and running because your business doesn't sleep.</p>
                    <p class="text-justify">Over time, we've developed strong focus teams with expertise in the following hiring areas:</p>
                    <div class="mission-area-content">
                       <ul class="cr-liststyle-1">
                          <li>Accounting & Finance</li>
                          <li>Human Resources</li>
                          <li>Call Center</li>
                          <li>Mortgage</li>
                          <li>Digital & Creative</li>
                          <li>Sales & Marketing</li>
                          <li>Engineering</li>
                          <li>Technology</li>
                          <li>Healthcare</li>
                          <li>Project Management</li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

      {/* software development */}
      {/* <section id="about-area" class="about-area section-padding-lg bg-grey">
    <div class="container">
        <div class="row align-items-center">
        <h2 className='jjfr'>Software Development</h2>
            <div class="col-xl-12 col-lg-12 order-2 order-lg-1">
                <div class="about-content1">
                    <h2>Personalize Your Services and Stay Ahead of the Competition</h2>
                    <p class="text-justify">Software and web development are integral to running a successful company in the 21st century. Unfortunately, many businesses are lacking the necessary skills and professionals to pull off these essential development solutions. At Helix Tech, our team specializes in providing software and web development services to provide companies with the world-class designs, flexible development, and personalized solutions they need to remain competitive. Whether you need an internal-facing or customer-oriented application, we've got you covered! Our highly experienced and skilled team of web and software developers will meet with you to determine exactly what you need to ensure our services are targeted, personalized, and effective. Here are some of the primary highlights of our software and web development services:</p>
                    <div class="mission-area-content">
                       <ul class="cr-liststyle-1">
                          <li>Reduced Turnaround Time</li>
                          <li>Flexible and Scalable Deployment</li>
                          <li>Excellent Quality of Services</li>
                          <li>Efficient and Highly skilled Developers</li>
                          <li>Real-Time Communication</li>
                          <li>User-friendly Design</li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

      <section id="about-area" class="about-area section-padding-lg bg-grey  pb-50">
        <div className="servicessa pt-40">
          <div className="container  ">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="serc pa wow fadeInRight" data-tilt="">
                  <p>Staff Augmentation</p>
                  <h2>Build Out the IT Team You Need No Matter the Size</h2>
                </div>
                <div class="mission-area-content">
                  <ul class="cr-liststyle-1">
                    <li>Accounting & Finance</li>
                    <li>Healthcare</li>
                    <li>Call Center</li>
                    <li>Mortgage</li>
                    <li>Digital & Creative</li>
                    <li>Sales & Marketing</li>
                    <li>Engineering</li>
                    <li>Technology</li>
                    {/* <li>Healthcare</li> */}
                    {/* <li>Project Management</li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <img
                  src={`${process.env.PUBLIC_URL}/staff-hero@2x.webp`}
                  className="max-width staffe pa wow fadeInRight"
                  data-tilt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="servi pb-30">
        <div className="container">
          <div className="maaed pa wow fadeInRight" data-tilt="">
            <p>
              There are times when running an IT team is a numbers game.
              Sometimes, you need to beef up your current IT staff to tackle a
              temporary project. Other times, you have to cut back due to
              money-saving efforts or shifting focus. Regardless of the reason,
              businesses regularly need to increase the size of their staff
              without much notice. That's where Helix Tech's staff augmentation
              services can help!<br></br>
              We've helped countless businesses, from SMBs to Fortune 500
              companies, achieve their goals by acquiring the right IT talent.
              We have access to a large pool of qualified professionals so you
              can always get the perfect number of people you need. Our 24/7
              recruiting model is always up and running because your business
              doesn't sleep.<br></br>
              Over time, we've developed strong focus teams with expertise in
              the following hiring areas:
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className="ssse pb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <img
                  src={`${process.env.PUBLIC_URL}/s1.svg`}
                  alt=""
                  srcset=""
                  className="ssse pa wow fadeInRight mt-0"
                  data-tilt=" "
                />
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="aa pa wow fadeInRight mt-40" data-tilt="">
                  <p>Software Development</p>
                  <h2>
                    Personalize Your Services and Stay Ahead of the Competition
                  </h2>
                </div>
                <div
                  class="mission-area-content pa wow fadeInRight"
                  data-tilt=""
                >
                  <ul class="cr-liststyle-1">
                    <li>Reduced Turnaround Time</li>
                    <li>Flexible and Scalable Deployment</li>
                    <li>Excellent Quality of Services</li>
                    <li>Efficient and Highly skilled Developers</li>
                    <li>Real-Time Communication</li>
                    <li>User-friendly Design</li>
                    <li>Engineering</li>
                    {/* <li>Technology</li> 
                           <li>Healthcare</li> 
                           <li>Project Management</li> */}
                  </ul>
                </div>
              </div>
              <div className="pa wow fadeInRight" data-tilt="">
                <p>
                  Software and web development are integral to running a
                  successful company in the 21st century. Unfortunately, many
                  businesses are lacking the necessary skills and professionals
                  to pull off these essential development solutions. At Helix
                  Tech, our team specializes in providing software and web
                  development services to provide companies with the world-class
                  designs, flexible development, and personalized solutions they
                  need to remain competitive. Whether you need an
                  internal-facing or customer-oriented application, we've got
                  you covered! Our highly experienced and skilled team of web
                  and software developers will meet with you to determine
                  exactly what you need to ensure our services are targeted,
                  personalized, and effective. Here are some of the primary
                  highlights of our software and web development services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="kk pt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="mpni wow fadeInLeft" data-tilt="">
                <p className="mt-0">IT Staffing</p>
                <h2>Harness Top-Notch IT Talent</h2>
              </div>
              <div className="fdw wow fadeInLeft" data-tilt="">
                <p>
                  When it comes to tech staffing, nobody does it better than
                  Helix Tech-IT Solutions. We are a dedicated team of workforce
                  specialists that connect highly skilled & thoroughly vetted IT
                  professionals to the top companies of US. Our sharp-eyed
                  recruiters easily identify the skill-gaps of organizations and
                  help them find their best-fit. We also assist tech aspirants
                  in building a solid IT career that aligns well with their
                  professional goals and passion.
                </p>
                <p>
                  Helix Tech-IT Solutions is your one-stop staff provider, we
                  conduct psychometric and personality testing of candidates to
                  evaluate them in different aspects such as knowledge,
                  expertise, behaviour, experience and others. As we follow an
                  analytical method of recruitment, it enables us to filter
                  thousands of candidates and narrow your search to a selective
                  few that matches best with your work culture.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={`${process.env.PUBLIC_URL}/s4.svg`}
                className="max-width wow fadeInLeft"
                data-tilt=""
              />
            </div>
          </div>
        </div>
      </div>

<SectionBgImage>
      <div className="asse11 pt-50 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={`${process.env.PUBLIC_URL}/s5.svg`}
                className="mmeq wow fadeInDown "
                data-tilt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="mga">
                <p className="mt-0">IT Training & Development</p>
                <h2>Courses We Offer:</h2>
              </div>
              <div class="mission-area-content">
                <ul class="cr-liststyle-1">
                  <li>Application Development</li>
                  <li>Python Developer Training</li>
                  <li>Java Programming Training</li>
                  <li>Java/J2EE</li>
                  <li>Data Science</li>
                  <li>Business/Data Analyst</li>
                  <li>.NET Developer Training</li>
                  {/* <li>Technology</li> */}
                  {/* <li>Healthcare</li> */}
                  {/* <li>Project Management</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="dgfawtf">
            <p>
              The world of technology is evolving at a staggering pace. To keep
              up, individuals and organizations must collectively and radically
              align their mindsets for the future – and not just retrofit for
              the present. Helix Tech-IT Solution provides future-proof digital
              learning solutions for companies and individuals. With a
              revolutionary learning platform and specialized certifications, we
              are focused not just on changing, but also on rewiring your
              digital DNA. We specialize in Java, FullStack, .Net, BA/DA/QA. Our
              course content is dynamic as per the current market requirements.
              We also provide assistance on Java and AWS certification. Hands on
              training, live projects make you face real time scenarios and
              problems so can contribute from day one from the client’s side. We
              have professional full-time trainers from the industry to guide
              you on your journey with us. The consultants are prepared with
              mock sessions, client interview preparation and personality
              development sessions to help you succeed the opportunities that
              come their way.
            </p>
          </div>
        </div>
      </div>
      </SectionBgImage>
      <div className="sstg pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="MNNNMNM wow fadeInDown " data-tilt="">
                <h2 className="mt-0">Professional Resume & Cover Letter Writing</h2>
                <p>
                  A resume is your first impression while initiating a job
                  search. A resume represents your profile; hence proper time
                  has to be invested in resume preparation as it lets the
                  employer know about your profile details, educational
                  background, skills, experience, etc.
                </p>
                <p>
                  We have an expert professional resume writers team that helps
                  you with an ideal resume under which they highlight your
                  educational background and the core skills which you possess
                  and will make it keywords optimize which is currently
                  acceptable in the US market. A professional resume is prepared
                  under one page which covers a specific keyword-optimized
                  format.
                </p>
                <p>
                  We will be in constant touch with you during the resume
                  preparation process as to get a better idea about your
                  acquaintance with the technologies and skills that you are
                  comfortable with. A thorough analysis of your profile will be
                  undertaken.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="ncv wow fadeInRight " data-tilt="">
                <img
                  src={`${process.env.PUBLIC_URL}/q2.svg`}
                  className="mace wow fadeInRight "
                  data-tilt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fhgdsr pb-30">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-12 wow fadeInRight "
              data-tilt=""
            >
              <img
                src={`${process.env.PUBLIC_URL}/q4.svg`}
                className="msfq wow fadeInRight"
                data-tilt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="mdew wow fadeInRight " data-tilt="">
                <h2>A service for lifetime</h2>
                <p>
                  <strong>
                    Our Team Moves Faster, Keeping you Current on What's Hot
                  </strong>
                </p>
                <p>
                  The contract between us and our consultants is not just to the
                  time they are placed into a project, but for a lifetime. We
                  provide On Job Tech-Support. Our objective is to assist you in
                  making a career in Tech Industry so that after you are done
                  with us you don’t have to struggle to find a job for the next
                  3-4 years.<br></br>
                  <br></br>
                  We help you technically Up-skill. To maintain your Immigration
                  status you need to ensure you are continuously employed in
                  your field of study so tech companies may file your extensions
                  & H1B. You need to be technically competent & differentiated
                  from others so that even if you lose 1 job there are multiple
                  companies willing to hire you because of you superior
                  technical skills <br></br>
                  <br></br>
                  Even though USC & GC’s don’t have to worry about maintaining
                  their status, still if they want to get a good job & high pay
                  rate in the Tech Industry, they need to upgrade their skills.
                  We do that in a more concrete way with a long term approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ssdv pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="nacr wow fadeInRight " data-tilt="">
                <p>Alumni</p>
                <h2>Core Consultant benefits:</h2>
              </div>
              <p className="msdwq">
                <strong>(A) Benefits</strong>
              </p>
              <div className="mobe">
                <li>FAST GREEN CARD – PERM PROCESSING</li>
                <li>
                  <strong> INTERVIEW COUNSELLING </strong> We will appoint a
                  tech expert to guide you through the process of interviews
                  coming your way. Mock interviews and training materials will
                  be provided to prepare you for all the possible questions to
                  be asked.
                </li>
                <li>
                  <strong> COMPETITIVE SALARY </strong> It is our moral duty to
                  ensure that you earn what you deserve. We will keep in mind
                  your salary expectations and find the suitable options as per
                  your preferences. An effort to always find an opportunity with
                  better pay will be made.
                </li>
                <li>
                  <strong> IMMEDIATE H1B TRANSFER </strong> We understand how
                  difficult and stressful it gets for you out there in the
                  market. We will do our best to get your H1B transferred as
                  soon as possible.
                </li>
                <li>REFERRAL PROGRAM</li>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-12 wow fadeInRight "
              data-tilt=""
            >
              <img
                src={`${process.env.PUBLIC_URL}/q3.svg`}
                alt=""
                className="max-width wow fadeInRight "
                data-tilt=""
              />
            </div>
          </div>
          <div className="referal">
            <li>
              Every month, we introduce new referral schemes for people who have
              already joined our company and also for those who wish to.
              <strong>
                {" "}
                As soon as you register with us, you will receive emails and
                newsletters regarding our current schemes in the organization{" "}
              </strong>
            </li>
            <li>
              <strong> 100% JOB PLACEMENT</strong> We guarantee to place you in
              a project within 30-40 days, if you cooperate with us and are
              available for the interviews and training sessions.
            </li>
            <li>
              <strong> ONE ON ONE MENTORING </strong> A personal trainer will be
              assisting you with each and every step such as understanding your
              resume, how to answer during interviews, if there is a need to
              furnish any of your skills etc.
            </li>
            <li>
              <strong> PROFILE MAKEOVER </strong> Our marketing team will be
              working thoroughly on your profile including your resume, social
              media presence on the job boards, creating you website, etc.
            </li>
          </div>
          <p className="msdwqe">
            <strong>(B) Careers</strong>
          </p>
          <div className="smwqr">
            <li>Join our family, where opportunities are infinite.</li>
            <li>
              We are constantly hiring talented heads who are seeking Growth in
              their Career.
            </li>
            <li>
              Mentioned below are few of the positions which we have available
              right now:
            </li>
          </div>
          <div className="mobs">
            <p className="msdwqe">
              <strong>(C) Referral Program</strong>
            </p>
            <li className="qwertyuiop">
              Every month, we introduce new referral schemes for people who have
              already joined our company and also for those who wish to.
            </li>
            <li className="qwertyuiop">
              <strong>
                {" "}
                As soon as you register with us, you will receive emails and
                newsletters regarding our current schemes in the organization{" "}
              </strong>
            </li>
          </div>
        </div>
      </div> */}

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
    </>
  );
};

export default Staff_Augmentation;
