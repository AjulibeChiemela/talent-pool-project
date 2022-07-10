import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/SharedLayouts/Navbar";
import Footer from "./components/SharedLayouts/Footer";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
