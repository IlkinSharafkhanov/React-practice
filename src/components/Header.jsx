import React from "react";
import "../style/components/header.scss";
import logo from "../images/Icon_logo_coin.svg";
// rooting
import { Link } from "react-router-dom";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
//context

const element = <FontAwesomeIcon icon={faCartShopping} />

const Header = () => {
  const items = useSelector((store) => store.cardData.card)
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="navigation">
        <li>
          <Link to = "/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to = "/table">Table</Link>
        </li>
          <li>
          <Link to = "/count">Counter</Link>
          </li>
          <li>
          <Link to = "/products">Products</Link>
          </li>
          <li>
          <Link to = "/cart">{element} <span>{items.length}</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
