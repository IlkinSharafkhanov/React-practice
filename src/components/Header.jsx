import React from "react";
import "../style/components/header.scss";
import logo from "../images/Icon_logo_coin.svg";
// rooting
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="navigation">
        <li>
          <Link to = "/">Home</Link>
        </li>
          <li>
          <Link to = "/count">Counter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
