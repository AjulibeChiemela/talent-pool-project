import React from "react";
// import SearchElipse from '../Components/Images/Ellipse51.png'
// import SearchLeg from '../Components/Images/Line110.png'
// import Obinna from '../Components/Images/obinna.png'
// import Tega from '../Components/Images/tega.png'
// import Julia from '../Components/Images/julia.png'
// import Bello from '../Components/Images/bello.png'
// import Tom from '../Components/Images/tom.png'
// import Nelson from '../Components/Images/nelson.png'
import "./Directory.scss";

function Directory() {
  return (
    <main>
      <div className="directory-body">
        <div className="headbanner"></div>
        <img src="images/Ellipse51.png" className="searchelipse" alt="" />
        <img src="images/Line110.png" className="searchleg" alt="" />
        <p className="directory">Directory</p>
        <p className="find-grad">
          Find graduates with various skills and tracks.{" "}
        </p>
        {/* the man section */}
        <div className="main-section">
          {/* the side section */}
          <aside className="side-check">
            <p id="filter">FILTERS</p>
            <div className="line"></div>
            <p className="skill">Skills</p>
            <div className="line2"></div>
            <form className="skill-check">
              <label for="skill1">
                {" "}
                <input type="checkbox" id="skill" name="skill1" value="UI" /> UI
              </label>
              <label for="skill1">
                <input type="checkbox" id="skill" name="skill2" value="UX" /> UX
              </label>
              <label for="skill1">
                <input type="checkbox" id="skill" name="skill3" value="Figma" />{" "}
                Figma
              </label>
              <label for="skill1">
                <input
                  type="checkbox"
                  id="skill"
                  name="skill4"
                  value="Sketch"
                />{" "}
                Sketch
              </label>
              <label for="skill1">
                {" "}
                <input
                  type="checkbox"
                  id="skill"
                  name="skill5"
                  value="Javascript"
                />{" "}
                Javascript
              </label>
              <label for="skill1">
                {" "}
                <input
                  type="checkbox"
                  id="skill"
                  name="skill6"
                  value="Mobile"
                />{" "}
                Mobile
              </label>
              <label for="skill1">
                {" "}
                <input type="checkbox" id="skill" name="skill7" value="Front" />
                FrontEnd
              </label>
              <label for="skill1">
                {" "}
                <input
                  type="checkbox"
                  id="skill"
                  name="skill8"
                  value="Back"
                />{" "}
                BackEnd
              </label>
              <br />
              <label id="experience">
                Years of Experience
                <select id="year">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </label>

              <div className="line3"></div>

              <label id="age">
                Age
                <select id="select-age">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <div className="line4"></div>
              <label id="location">
                Location
                <select id="region">
                  <option value="region">Region</option>
                </select>
              </label>
              <div className="line5"></div>
              <select id="available">
                <option value="availability">Availability</option>
              </select>
            </form>
          </aside>
          <aside className="scroll-notice">
            <p>
              SCROLL THROUGH OUR LIST OF QUALIFIED GRADUATES <br /> OR <br />
              SORT WITH THE FILTER{" "}
            </p>
          </aside>

          {/* main section code */}
          <section>
            <input type="search" id="search" />
            <div className="category">
              <ul>
                <li id="all">All</li>
                <li>Design</li>
                <li>Mobile</li>
                <li>FrontEnd</li>
              </ul>
              {/* <div id="all-line"></div> */}
              <label id="interns">
                750 Interns
                {/* <dv id="line"></dv> */}
                <select id="relevance">
                  <option value="Relevance">Relevance</option>
                </select>
              </label>
            </div>
          </section>

          <div className="All">
            <section id="profile">
              <div className="front">
                <img src="images/obinna.png" alt="" />
                <div className="front-text">
                  <p id="nneji">Obinna Nneji</p>
                  <p>Frontend Developer</p>
                </div>
                <div id="profile-skill">
                  <p id="view">View Profile</p>
                  <div id="skills">
                    <ul>
                      <li>Javascript</li>
                      {/* <div id="line01"></div> */}
                      <li>Figma</li>
                      {/* <div id="line02"></div> */}
                      <li>Sketch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="profile02">
              <div className="designer">
                <img src="images/tega.png" alt="" />
                <div className="designer-text">
                  <p id="tega">Jaden Tega</p>
                  <p>Designer</p>
                </div>
                <div id="profile-skill02">
                  <p id="view02">View Profile</p>
                  <div id="skills02">
                    <ul>
                      <li>UI</li>
                      {/* <div id="line0"></div> */}
                      <li>UX</li>
                      {/* <div id="line01"></div> */}
                      <li>Figma</li>
                      {/* <div id="line02"></div> */}
                      <li>Sketch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="profile03">
              <div className="back">
                <img src="images/julia.png" alt="" />
                <div className="back-text">
                  <p id="julia">Julia Orji</p>
                  <p>BackEnd Developer</p>
                </div>
                <div id="profile-skill03">
                  <p id="view03">View Profile</p>
                  <div id="skills03">
                    <ul>
                      <li>Javascript</li>
                      {/* <div id="line01"></div> */}
                      <li>Figma</li>
                      {/* <div id="line02"></div> */}
                      <li>Sketch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="profile04">
              <div className="back02">
                <img src="images/bello.png" alt="" />
                <div className="back02-text">
                  <p id="bello">Martha Bello</p>
                  <p>BackEnd Developer</p>
                </div>
                <div id="profile-skill04">
                  <p id="view04">View Profile</p>
                  <div id="skills04">
                    <ul>
                      <li>Javascript</li>
                      {/* <div id="line01"></div> */}
                      <li>Figma</li>
                      {/* <div id="line02"></div> */}
                      <li>Sketch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="profile05">
              <div className="mobile">
                <img src="images/tom.png" alt="" />
                <div className="mobile-text">
                  <p id="tom">Tom Ade</p>
                  <p>Mobile</p>
                </div>
                <div id="profile-skill05">
                  <p id="view05">View Profile</p>
                  <div id="skills05">
                    <ul>
                      <li>Javascript</li>
                      {/* <div id="line02"></div> */}
                      <li>Sketch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="profile06">
              <div className="designer02">
                <img src="images/nelson.png" alt="" />
                <div className="designer02-text">
                  <p id="nelson">Nelson King</p>
                  <p>Designer</p>
                </div>
                <div id="profile-skill06">
                  <p id="view06">View Profile</p>
                  <div id="skills06">
                    <ul>
                      <li>Javascript</li>
                      {/* <div id="line01"></div> */}
                      <li>Figma</li>
                      {/* <div id="line02"></div> */}
                      <li>Sketch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Directory;
