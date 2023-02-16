import React from "react";
import { Link } from "react-router-dom";

// import logo from "../images/logo1.png";

const Navbar = (props) => {
  console.log("show", props.show);
  return (
    <div>

      <nav>
        <Link to="main" className="logo" duration={1000}>

          <h3>Fit YourSelf</h3>
        </Link>

        <ul>
          <li>
            <Link to="/" className="active " duration={1000}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/AddActivity">Add-Activity</Link>
          </li>
          <li>
            <Link to="/ShowActivity">Show-Activity</Link>
          </li>


        </ul>
        <></>

      </nav>

    </div>
  );
};

export default Navbar;
