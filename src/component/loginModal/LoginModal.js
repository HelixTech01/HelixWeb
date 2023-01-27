import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Cookies from "js-cookie";
import axios from "axios";
import JRegister from "../../jobseeker/JRegister";
import './loginModal.scss';

const LoginModal = () => {
  const navigate = useNavigate();
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


  console.log("empLogin", empLogin && empLogin.email.length);

  const disabledValidation =
    empLogin.email &&
    empLogin.email.length > 8 &&
    empLogin.password.length > 4 
      ? false
      : true;


  return (
    <>
      <form action="" onSubmit={SubmitForm}>
        <div
          className="loginModal modal fade"
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
                {/* <button type='submit'>
            <a href="#login"  data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                       <span>Log In</span>
                    </a>
                    </button> */}
                {/* do not change this  */}
                <button disabled={disabledValidation} type="submit" className="btn btn-primary w-100 mb-3">
                  Sign In
                </button>
                Need an account
                <a href="#loginnn" data-bs-toggle="modal" className="cr-btn-sm">
                  <span> Sign Up</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
      <JRegister />
    </>
  );
};

export default LoginModal;
