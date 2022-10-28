import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="leftSide">
        <Link to="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
      <div className="middle">
        <Link to="/"> DANO SHOP </Link>
      </div>
      <div className="rightSide">
        <Link to="/myPage">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
