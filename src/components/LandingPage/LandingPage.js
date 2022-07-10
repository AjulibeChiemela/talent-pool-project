import React from "react";
import Blog from "./Blog";
import Clients from "./Clients";
import Hero from "./Hero";
import HeroFooter from "./HeroFooter";
import Hire from "./Hire";
import Join from "./Join";
import Reasons from "./Reasons";
import Talents from "./Talents";
import Build from "./Build";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <HeroFooter />
      <Clients />
      <Talents />
      <Hire />
      <Reasons />
      <Build />
      <Join />
      <Blog />
    </>
  );
};

export default LandingPage;
