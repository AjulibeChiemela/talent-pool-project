// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Clients from "./components/LandingPage/Clients";
import Hero from "./components/LandingPage/Hero";
import HeroFooter from "./components/LandingPage/HeroFooter";
import Hire from "./components/LandingPage/Hire";
import Talents from "./components/LandingPage/Talents";
import Navbar from "./components/SharedLayouts/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route></Route>
      </Routes> */}
      <Navbar />
      <Hero />
      <HeroFooter />
      <Clients />
      <Talents />
      <Hire />
    </div>
  );
}

export default App;
