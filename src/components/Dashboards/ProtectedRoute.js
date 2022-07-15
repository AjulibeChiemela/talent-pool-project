import React from "react";
import { Navigate } from "react-router-dom";
// import LandingPage from "../LandingPage/LandingPage";
// import SignInAs from "../Modals/SignInAs";

const ProtectedRoute = ({ children, user, displayNavFoot }) => {
  displayNavFoot(false);
  if (!user) {
    return (
      <>
        <Navigate to="/" />
        {/* <LandingPage />
        <SignInAs /> */}
      </>
    );
  }
  return children;
};

export default ProtectedRoute;
