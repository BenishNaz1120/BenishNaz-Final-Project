import React from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {

  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h2>
          The body achieves what <span>the mind believes</span>
        </h2>
        <p className="details">
          Hey lets fit your self and stay healty and smart.A sound body has a
          sound mind
        </p>
        <div className="header-btns">
          {/* <a href="#" className="cv-btn">
            Hire Me!
          </a> */}
          {/* <Link to="/signin" className="cv-btn1">
            SignIn
          </Link> */}
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
};

export default Header;
