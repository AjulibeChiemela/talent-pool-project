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

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SignUpSuccess /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
