// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/SharedLayouts/Navbar";
import Footer from "./components/SharedLayouts/Footer";
import AdminSignUp from "./components/Forms/Admin/AdminSignUp";
// import EmSignUp from "./components/Forms/Employers/EmSignUp";
// import EmSignIn from "./components/Forms/Employers/EmSignIn";
// import AdminSignIn from "./components/Forms/Admin/AdminSignIn";
// import GradSignIn from "./components/Forms/Graduates/GradSignIn";
// import GradSignUp from "./components/Forms/Graduates/GradSignUp";
// import SignUpSuccess from "./components/Modals/SignUpSuccess";
// import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AdminSignUp />
      {/* <AdminSignIn /> */}
      {/* <EmSignIn /> */}
      {/* <EmSignUp /> */}
      {/* <GradSignIn /> */}
      {/* <GradSignUp />
      <SignUpSuccess /> */}
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
