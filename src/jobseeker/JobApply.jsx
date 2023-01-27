import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import swal from "sweetalert";
// import ApplyJobs from './Applyjobs';

const JobApply = () => {
  const [Jobs, setJobs] = useState([]);
  // const navigate = useNavigate()
  useEffect(() => {
    const getJobs = async () => {
        // "https://helix12.herokuapp.com/helix/job/show/approve"

      const JobsShow = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/helix/job/show/approve`
      );
      setJobs(JobsShow.data);
      // console.log(JobsShow.data)
      // console.log(Jobs)
    };
    getJobs();
  }, []);
  const [showJobs, setShowJobs] = useState([]);
  useEffect(() => {
    // `https://helix12.herokuapp.com/helix/admin/show/location`
    const getJobs = async () => {
      const showLocation = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/helix/admin/show/location`
      );
      setShowJobs(showLocation.data);
    };
    getJobs();
  }, []);

  const [companyType, setCompanyType] = useState([]);

  useEffect(() => {
    // `https://helix12.herokuapp.com/helix/admin/companytype/show`
    const comType = async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/helix/admin/companytype/show`
      );
      // console.log(comType)
      setCompanyType(data.data);
    };
    comType();
  }, []);
  const clickOne = () => {
    // swal("login first");
    swal("Sign In first", "You have must Login!", "error");
  };

  const [jobData, setJobData] = useState({
    jobtitle: "",
    location: "",
    c_type: "",
  });

  // get input search
  const onTextFieldChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(jobData);
  const searchData = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.patch(
        `${process.env.REACT_APP_ROOT_URL}/helix/job/filter/jobs`,
        jobData
      );
      // console.log(data)
      setJobs(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="job-list-header">
        <form>
          <div class="row g-2">
            <div class="col-lg-3 col-md-6">
              <div class="filler-job-form">
                <i class="uil uil-briefcase-alt"></i>
                <input
                  type="search"
                  class="form-control filter-job-input-box"
                  id="exampleFormControlInput1"
                  placeholder="Job, company... "
                  name="jobtitle"
                  onChange={(e) => onTextFieldChange(e)}
                  value={jobData.jobtitle}
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="filler-job-form">
                <i class="uil uil-location-point"></i>
                <select
                  class="form-select"
                  data-trigger
                  name="location"
                  onChange={(e) => onTextFieldChange(e)}
                  value={jobData.location}
                  id="choices-single-location"
                  aria-label="Default select example"
                >
                  <option value="">Select Location</option>
                  {showJobs.map((curElm) => {
                    return <option name="location">{curElm.location}</option>;
                  })}
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="filler-job-form">
                <i class="uil uil-clipboard-notes"></i>
                <select
                  class="form-select "
                  data-trigger
                  name="c_type"
                  onChange={(e) => onTextFieldChange(e)}
                  value={jobData.c_type}
                  id="choices-single-categories"
                  aria-label="Default select example"
                >
                  <option value="">Select Company Type</option>
                  {companyType.map((curElm) => {
                    return <option name="c_type">{curElm.c_type}</option>;
                  })}
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <button
                onClick={(e) => searchData(e)}
                class="btn btn-primary  w-100 fil"
              >
                <i class="uil uil-filter"></i> Filter
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {Jobs.map((curElm) => {
          const {
            _id,
            companyname,
            location,
            date,
            jobtime,
            exp,
            jobtitle,
            jobaddress,
          } = curElm;

          // let date = curElm.data
          // date = date.slice(8,15)
          // console.log(date)
          // let filterData = jobData.filter(function (el)
          // {
          //     return console.log(filterData)
          // })
          return (
            <>
              <div className="job-box card mt-5">
                <div className="bookmark-label text-center">
                  <a
                    href="javascript:void(0)"
                    className="align-middle text-white"
                  >
                    <i className="mdi mdi-star"></i>
                  </a>
                </div>

                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <div className="text-center mb-4 mb-lg-0">
                        <a href="company-details.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/featured-job/img-01.png`}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="mb-2 mb-md-0">
                        <h5 className="fs-18 mb-0">
                          <a href="job-details.html" className="text-dark"></a>
                          {jobtitle}
                        </h5>
                        <p className="text-muted fs-14 mb-0">{companyname}</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="d-flex mb-2">
                        <div className="flex-shrink-0">
                          <i className="mdi mdi-map-marker text-primary me-1"></i>
                        </div>
                        <p className="text-muted">
                          {jobaddress}
                          <br />
                          {location}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="d-flex mb-0">
                        <div className="flex-shrink-0">
                          <i className="uil uil-clock-three text-primary me-1"></i>
                        </div>
                        <p className="text-muted mb-0">{date}</p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div>
                        <span className="badge bg-soft-success fs-13 mt-1">
                          {jobtime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-light">
                  <div className="row justify-content-between">
                    <div className="col-md-4">
                      <div>
                        {exp === "0" ? (
                          <p className="text-muted mb-0">
                            <span className="text-dark">Experience </span>not
                            required
                          </p>
                        ) : (
                          <p className="text-muted mb-0">
                            <span className="text-dark">Experience </span>
                            {exp} years
                          </p>
                        )}
                      </div>
                    </div>

                    {Cookies.get("jemail") ? (
                      <Link
                        to={`/helix/applyjob/${curElm._id}`}
                        className="appw"
                      >
                        Apply Now
                      </Link>
                    ) : (
                      <div className="col-lg-2 col-md-3">
                        <div className="text-start text-md-end">
                          <button
                            type="submit"
                            onClick={() => clickOne()}
                            class="btn btn-primary w-100"
                            className="appw"
                          >
                            apply
                          </button>
                          <i className="mdi mdi-chevron-double-right"></i>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default JobApply;
