import React from "react";
import Navbar from "./Navbar";
const DashBoard = () => {
  return (
    <div>
      <div id="DB">
        <Navbar />
        <div className="name">
          {/* <h2>
            The body achieves what <span>the mind believes</span>
          </h2> */}
          <div className="header-btns">
            {/* <a href="#" className="cv-btn">
            Hire Me!
          </a> */}
            <a href="#" className="cv-btn1">
              ADD-ACTIVITY
            </a>
          </div>
        </div>
        <p className="details">
          Hey lets fit your self and stay healty and smart.A sound body has a
          sound mind
        </p>
        {/* <div className="header-btns">
          <a href="#" className="cv-btn">
            Hire Me!
          </a>
          <a href="#" className="cv-btn1">
            SignIn
          </a>
        </div>
      </div>
      <div className="arrow"></div> */}
      </div>
    </div>
  );
};

export default DashBoard;
