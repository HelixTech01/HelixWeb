import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
const Nav = () => {
  return (
    <>
 <div class="wrapper" id="wrapper">

<header class="header header-style-1 theme-color transparent-header megamenu-container sticky-header">

<div className="container d-none d-lg-block">
        <div className="row">
            <div className="col-lg-12">
                <div className="header-inner">
                    <div className="logo">
                        <a href="/helix">
                            <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="logo secondary dark"/>
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

                    {!Cookies.get('jemail')?
                    <li>
                        <Link to="/helix/Employers">Employers</Link>
                    </li>:''    
                }
                    
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
                                                <Link to="/Staff_Augmentation">Staff Augmentation</Link>
                                            </li>
                                            <li>
                                                <Link to="/Software_Development">Software Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/IT_Staffing">IT Staffing</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="cr-sub-dropdown">
                                    <Link to="/IT_Training">Consultant</Link>
                                        <ul>
                                            <li>
                                                   <Link to="/IT_Training">IT Training & Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/Professional">Professional Resume  Cover Letter Writing</Link>
                                            </li>
                                            <li>
                                                <a to="javascript:;">Benefits for Jobseekers</a>
                                            </li>
                                            <li>
                                                <Link to="/A_service">A service for lifetime</Link>
                                            </li>
                                            <li>
                                            <Link to="/Alumn">Alumni</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    </ul>
                                </li> */}
                    <li>
                        <Link to="/helix/Fa">Faq</Link>
                    </li>
                    <li>
                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                    </li>
                </ul>
                    </nav>
                    {/* <a href="#login" data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                        <span>Sign In</span>
                    </a> */}
                    {/* <a href="#loginnn" data-bs-toggle="modal" className="cr-btn cr-btn-sm">
                        <span>Sign up</span>
                    </a> */}
                </div>
            </div>
        </div>
    </div>


{/* <div class="mobile-menu-wrapper">
 <div class="container d-block d-lg-none">
     <div class="mobile-menu clearfix">
         <a class="mobile-logo" href="index.html">
             <img src="images/logo/logo.png" alt="mobile logo"/>
         </a>
         <a href="contact-us.html" class="cr-btn cr-btn-sm">
<span>Get A Quote</span>
</a>
     </div>
 </div>
</div> */}


</header>


<div className='hsshshsh'>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/helix/"><img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/helix/">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/helix/About_us">About Us</Link>
        </li>

        <li>
                        <Link to="/helix/Employers">Employers</Link>
                    </li>
                
                    
                    <li>
                        <Link to="/helix/Job_seekers">Job seekers</Link>
                    </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Servivce
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to="/Staff_Augmentation">Employers</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li> <Link to="/IT_Training">Consultant</Link></li>
          </ul>
        </li> */}
        <li>
                        <Link to="/helix/Employers">Employers</Link>
                    </li>
                    <li>
                        <Link to="/helix/Fa">Faq</Link>
                    </li>
                    <li>
                        <Link to="/helix/CONTACT_US">CONTACT US</Link>
                    </li>
                    
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</div>
</div>

    
    </>
  )
}

export default Nav