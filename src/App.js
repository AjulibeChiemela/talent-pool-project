import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/SharedLayouts/Navbar";
import Footer from "./components/SharedLayouts/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import GradSignUp from "./components/Forms/Graduates/GradSignUp";
import EmSignUp from "./components/Forms/Employers/EmSignUp";
import AdminSignUp from "./components/Forms/Admin/AdminSignUp";
import EmSignIn from "./components/Forms/Employers/EmSignIn";
import AdminSignIn from "./components/Forms/Admin/AdminSignIn";
import GradSignIn from "./components/Forms/Graduates/GradSignIn";
// import SignUpSuccess from "./components/Modals/SignUpSuccess";
import Dashboard from "./components/Dashboards/Employers/Dashboard";
import { AboutUs } from "./components/pages/AboutUs";

function App() {
  return (
    <div className="App">
      {/* show when user is not signed in */}
      <Navbar />
      {/* <SignUpSuccess /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />

        {/* SignIn Routes */}
        <Route path="Graduate_SignIn" element={<GradSignIn />} />
        <Route path="Em_SignIn" element={<EmSignIn />} />
        <Route path="Admin_SignIn" element={<AdminSignIn />} />

        {/* SignUp Routes */}
        <Route path="Graduate_SignUp" element={<GradSignUp />} />
        {/* for second navlink */}
        <Route path="nothing1" element={<GradSignUp />} />
        <Route path="Em_SignUp" element={<EmSignUp />} />
        {/* for second navlink */}
        <Route path="nothing2" element={<EmSignUp />} />
        <Route path="Admin_SignUp" element={<AdminSignUp />} />

        {/* show when user is signed in */}
        {/* will create protected route for dashboard */}
        <Route path="dashboard_em" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
