import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import Dashboard from "./components/Dashboards/Employers/Dashboard";
import { AboutUs } from "./components/pages/AboutUs";
import Terms from "./components/pages/Terms";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// import { useEffect, useState } from "react";
import ProtectedRoute from "./components/Dashboards/ProtectedRoute";
import Toptalent from "./components/pages/toptalent";

function App() {
  const [info, setInfo] = useState(null);
  const [showNavFoot, setShowNavFoot] = useState(true);

  return (
    <div className="App">
      {/* show when user is not signed in */}
      {showNavFoot && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/top_talent" element={<Toptalent />} />

        {/* SignIn Routes */}
        <Route
          path="Graduate_SignIn"
          element={<GradSignIn onSignIn={setInfo} />}
        />
        <Route path="Em_SignIn" element={<EmSignIn onSignIn={setInfo} />} />
        <Route
          path="Admin_SignIn"
          element={<AdminSignIn onSignIn={setInfo} />}
        />
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
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={info}>
              <Dashboard user={info} displayNavFoot={setShowNavFoot} />
            </ProtectedRoute>
          }
        ></Route>

        {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Routes>
      {showNavFoot && <Footer />}
    </div>
  );
}

export default App;
