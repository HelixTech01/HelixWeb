import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const JLogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // const navigate = useNavigate()
  const ChangesData = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    try {
      const JLogin = async () => {
        const data = await axios.post(
          `https://helix12.herokuapp.com/helix/login/ljobseeker`,
          login
        );
        console.log(data);
        if (data.data === true) {
          // alert('login successful')
          swal("login successful", "", "success");
          // window.location.reload();
          Cookies.set("jemail", login.email, { expires: 1 });
          navigate("/helix/");
          setLogin({ email: "", password: "" });
        } else {
          // alert(data.data)
          swal(data.data, "", "error");
        }
      };
      JLogin();
    } catch (error) {
      swal(error, "", "error");
    }
  };

  return (
    <form action="" onSubmit={submitForm}>
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
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={login.email}
                  name="email"
                  onChange={(e) => ChangesData(e)}
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
                  placeholder="Enter your password"
                  name="password"
                  value={login.password}
                  onChange={(e) => ChangesData(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Sign in
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
  );
};

export default JLogin;
