import React from "react";
// import { Navigate } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import SignInAs from "../Modals/SignInAs";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return (
      <>
        {/* <Navigate to="/" /> */}
        <LandingPage />
        <SignInAs />
      </>
    );
  }
  return children;
};

export default ProtectedRoute;
