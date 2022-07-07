// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Clients from "./components/LandingPage/Clients";
import Hero from "./components/LandingPage/Hero";
import HeroFooter from "./components/LandingPage/HeroFooter";
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
    </div>
  );
}

export default App;
