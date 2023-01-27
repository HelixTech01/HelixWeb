import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About_us from "./About_us";
import Footer from "./Footer";
import Place_Job_Order from "./Place_Job_Order";
import Nav from "./Nav";
import Testi from "./Testi";
import Job_seekers from "./Job_seekers";
import Staff_Augmentation from "./Staff_Augmentation";
import Software_Development from "./Software_Development";
import IT_Staffing from "./IT_Staffing";
import IT_Training from "./IT_Training";
import A_service from "./A_service";
import Professional from "./Professional";
import CONTACT_US from "./CONTACT_US";
// import Alumn from './Alumn';
import Fa from "./Fa";
import Registion from "./Registion";
import Nav1 from "./Nav1";
import Admin from "./Admin";
import Admin_Home from "./Admin_Home";
import Employers from "./Employers";
import UpdateEmp from "./admin/UpdateEmp";
import UpdateJobSeeker from "./admin/UpdateJobSeeker";
import Status from "./admin/Status";
import Jobs from "./admin/Jobs";
import DashBoard from "./employers/DashBoard";
import Protected from "./employers/Protected";
import EditJob from "./employers/EditJob";
import Profile from "./employers/Profile";
import PostJob from "./employers/PostJob";
import Protecte from "./admin/Protecte";
import ProtectedJob from "./jobseeker/ProtectedJob";
// import JobApply from './jobseeker/JobApply'
import ProtectedAdmin from "./admin/ProtectedAdmin";
import AddLocation from "./admin/AddLocation";
import ApplyJobs from "./jobseeker/Applyjobs";
import ShowJobApplys from "./admin/ShowJobApplys";
import UpdateJobAppliers from "./admin/UpdateJobAppliers";
import Faq from "./admin/Faq";
import ContactForm from "./admin/ContactForm";
import AllLogin from "./AllLogin";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/helix/" element={<Home />}></Route>
        <Route path="/helix/About_us" element={<About_us />}></Route>
        <Route path="/helix/Footer" element={<Footer />}></Route>
        <Route
          path="/helix/Place_Job_Order"
          element={<Place_Job_Order />}
        ></Route>
        <Route path="/helix/Nav" element={<Nav />}></Route>
        <Route path="/helix/Testi" element={<Testi />}></Route>
        <Route path="/helix/Job_seekers" element={<Job_seekers />}></Route>
        <Route
          path="/helix/Staff_Augmentation"
          element={<Staff_Augmentation />}
        ></Route>
        <Route
          path="/helix/Software_Development"
          element={<Software_Development />}
        ></Route>
        <Route path="/helix/IT_Staffing" element={<IT_Staffing />}></Route>
        <Route path="/helix/IT_Training" element={<IT_Training />}></Route>
        <Route path="/helix/A_service" element={<A_service />}></Route>
        {/* <Route path='/Alumn' element={<Alumn/>}></Route> */}
        <Route path="/helix/Professional" element={<Professional />}></Route>
        <Route path="/helix/CONTACT_US" element={<CONTACT_US />}></Route>
        <Route path="/helix/Fa" element={<Fa />}></Route>
        <Route path="/helix/Registion" element={<Registion />}></Route>
        <Route path="/helix/Nav1" element={<Nav1 />}></Route>
        <Route path="/helix/Employers" element={<Employers />}></Route>

        {/* <Route path='/Admin' element={<Admin/>}></Route>
    <Route path='/Admin_Home' element={<Admin_Home/>}></Route>
  <Route path='/Employers' element={<Employers/>}></Route> */}

        {/* admin */}
        <Route
          path="/helix/Admin"
          element={<Protecte Component={Admin} />}
        ></Route>
        <Route
          path="/helix/Admin_Home"
          element={<Protecte Component={Admin_Home} />}
        ></Route>
        <Route
          path="/helix/UpdateEmp/:_id"
          element={<ProtectedAdmin Component={UpdateEmp} />}
        ></Route>
        <Route
          path="/helix/updateJob/:_id"
          element={<ProtectedAdmin Component={UpdateJobSeeker} />}
        ></Route>
        <Route
          path="/helix/status"
          element={<ProtectedAdmin Component={Status} />}
        ></Route>
        <Route
          path="/helix/jobs"
          element={<ProtectedAdmin Component={Jobs} />}
        ></Route>
        <Route
          path="/helix/locationadd"
          element={<ProtectedAdmin Component={AddLocation} />}
        ></Route>
        <Route
          path="/helix/showapplyer"
          element={<ProtectedAdmin Component={ShowJobApplys} />}
        ></Route>
        <Route
          path="/helix/editappliers/:_id"
          element={<ProtectedAdmin Component={UpdateJobAppliers} />}
        ></Route>
        <Route
          path="/helix/faq"
          element={<ProtectedAdmin Component={Faq} />}
        ></Route>
        <Route
          path="/helix/contactform"
          element={<ProtectedAdmin Component={ContactForm} />}
        ></Route>

        {/* employers */}
        <Route
          path="/helix/dashboardemp"
          element={<Protected Component={DashBoard} />}
        />
        <Route
          path="/helix/jobedit/:_id"
          element={<Protected Component={EditJob} />}
        />
        <Route
          path="/helix/profile/:email"
          element={<Protected Component={Profile} />}
        />
        <Route
          path="/helix/postjob"
          element={<Protected Component={PostJob} />}
        />

        <Route
          path="/helix/applyjob/:_id"
          element={<ProtectedJob Component={ApplyJobs} />}
        ></Route>

        {/* jobSeeker */}
        {/* <Route path='/jobapply' element={<ProtectedJob Component={JobApply}/>}/> */}
        <Route path="/helix/alllogin" element={<AllLogin />}></Route>
      </Routes>

      {/* <Home></Home> */}
    </>
  );
}

export default App;
