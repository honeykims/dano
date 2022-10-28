import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Menubar() {
  return (
    <div className="home">
      <span>
        <Link to="/"> 홈 </Link>
      </span>
      <span>
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faHeart} />
          인기상품{" "}
        </Link>
      </span>
      <span>
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faClock} />
          위클리특가{" "}
        </Link>
      </span>
      <span>
        <Link to="/"> 신상품 </Link>
      </span>
      <span>
        <Link to="/"> 다노메이드 </Link>
      </span>
      <span>
        <Link to="/"> 식단 </Link>
      </span>
      <span>
        <Link to="/"> 베이커리 </Link>
      </span>
      <span>
        <Link to="/"> 분식/간식 </Link>
      </span>
      <span>
        <Link to="/"> 비건 </Link>
      </span>
      <span>
        <Link to="/"> 운동 </Link>
      </span>
      <span>
        <Link to="/"> 새벽배송 </Link>
      </span>
      <span>
        <Link to="/"> 스토리 </Link>
      </span>
    </div>
  );
}

export default Menubar;
