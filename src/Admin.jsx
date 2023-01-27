import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import swal from 'sweetalert';
// import { error } from "jquery";

async function loginUser(credentials) {
	return fetch('https://helix12.herokuapp.com/helix/admin/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})
	  .then(data => data.json())
   }
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email,password)
	
 
  
 const navigate = useNavigate()
  const SubmitForm = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    })
    if(true === response){
      Cookies.set('admin',email,{expires:1})
    navigate("/helix/Admin_Home")
	}else{
		// alert('')
    swal("wrong login details",'','error');
	}
  };
  return (
    <>
      <div className="mamae">
        <div className="containerrr">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={SubmitForm}>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    required
                  />
                </div>
                {/* <Link to="/Admin_Home"> */}
                <button type="submit"  className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                {/* </Link>			 */}
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
