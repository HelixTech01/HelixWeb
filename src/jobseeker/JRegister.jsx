import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useEffect } from "react";
import "./JRegister.scss";

const JRegister = () => {
  console.log("process.env.HOST_URL", process.env.REACT_APP_ROOT_URL);
  const [register, setRegister] = useState({
    " j_name": "",
    j_number: "",
    j_email: "",
    j_address: "",
    j_password: "",
    j_repassword: "",
  });
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_ROOT_URL}/helix/register/jobseeker`,
        register
      );
      console.log(data);
     

      var validEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      // alert(data.data)
      if (register.j_number.length == 10) {
        if (register.j_email.match(validEmail)) {
          // swal("Valid email address!", "", "success");

          if (data.data == "email is already register") {
            swal(data.data, "", "error");
          } else if (data.data == "password is not match") {
            swal(data.data, "", "error");
          } else {
            swal(data.data, "", "success");

            setRegister({
              j_name: "",
              j_number: "",
              j_email: "",
              j_address: "",
              j_password: "",
              j_repassword: "",
            });
          }
        } else {
          swal("Invalid email address!", "Enter valid email address", "error");
        }
      } else {
        swal("Invalid Number!", "Enter 10 digit number", "error");
      }

    } catch (error) {
      // alert(error.response.data)
      swal(error.response.data, "", "error");
      console.log("registration ", error);
    }
  };
  const onTextFieldChange = (e) => {
    setRegister({
      // add value dynamically
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  // console.log("register", register && register.j_number.length);

  const disabledValidation =
    register.j_name &&
    register.j_name.length > 2 &&
    register.j_number.length > 5 &&
    register.j_email.length > 3 &&
    register.j_address.length > 3 &&
    register.j_password.length > 4 &&
    register.j_repassword.length > 4
      ? // &&
        // register.j_password === register.j_repassword
        false
      : true;

  return (
    <div
      className="JRegister modal fade"
      id="loginnn"
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
              <label for="j_name" className="form-label">
                Name*
              </label>
              <input
                type="name"
                name="j_name"
                className="form-control"
                id="j_name"
                placeholder="Name"
                value={register.j_name}
                onChange={(e) => onTextFieldChange(e)}
              />
            </div>
            <div className="mb-3">
              <label for="j_number" className="form-label">
                Number*
              </label>
              <input
                type="number"
                name="j_number"
                className="form-control"
                id="j_number"
                value={register.j_number}
                onChange={(e) => onTextFieldChange(e)}
                placeholder="Enter your Number"
              />
            </div>
            <div className="mb-3">
              <label for="j_email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                name="j_email"
                className="form-control"
                id="j_email"
                value={register.j_email}
                onChange={(e) => onTextFieldChange(e)}
                placeholder="Enter your Email"
              />
            </div>
            <div className="mb-3">
              <label for="j_address" className="form-label">
                Address*
              </label>
              <input
                type="j_address"
                name="j_address"
                className="form-control"
                value={register.j_address}
                onChange={(e) => onTextFieldChange(e)}
                id="Address"
                placeholder="Enter your Address"
              />
            </div>
            <div className="mb-3">
              <label for="j_password" className="form-label">
                Password*
              </label>
              <input
                type="password"
                className="form-control"
                id="j_password"
                name="j_password"
                value={register.j_password}
                onChange={(e) => onTextFieldChange(e)}
                placeholder="Enter your Password"
              />
            </div>
            <div className="mb-3">
              <label for="j_repassword" className="form-label">
                ReEnter password*
              </label>
              <input
                type="password"
                className="form-control"
                id="j_repassword"
                value={register.j_repassword}
                onChange={(e) => onTextFieldChange(e)}
                name="j_repassword"
                placeholder="Enter your Password"
              />
            </div>
            <button
              type="submit"
              onClick={(e) => onFormSubmit(e)}
              className="btn btn-primary w-100"
              disabled={disabledValidation}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JRegister;
