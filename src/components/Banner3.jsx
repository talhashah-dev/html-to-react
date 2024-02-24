import React from "react";
import logo_swiped from "../assets/images/logo_swiped_hero.png"

function Banner3() {
  return (
    <div className="banner3">
      <div className="banner3-content">
        <p className="banner-content-p">Apple at work presents</p>
        <img src={logo_swiped} alt="" />
        <p className="banner-content-p">
          Best-in-className security for worst-case scenarios
        </p>
        <a href="/" className="banner3-content-a">
          Learn more<i className="fa-solid fa-greater-than"></i>
        </a>
        <a href="/" className="banner3-content-a">
          Watch the film
          <i className="fa-solid fa-circle-play" style={{fontSize: "20px"}}></i>
        </a>
      </div>
    </div>
  );
}

export default Banner3;
