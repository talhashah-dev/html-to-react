import React from "react";
import messi_video from "../assets/videos/messi.mp4";
import hero_logo from "../assets/images/hero_logo_apple_tv_season_pass__igiz49b7ebee_large.png";
import hero_logo_messi from "../assets/images/hero_logo_messi__cuf92y4thwya_large.png";

function MessiBanner() {
  return (
    <div className="messi-banner">
      <video className="background-video" autoPlay loop muted>
        <source src={messi_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="messi-banner-content">
        <img src={hero_logo} alt="" />
        <img src={hero_logo_messi} alt="" />
        <a href="/" className="banner-content-a">
          Watch tonight Apple TV at 8 p.m. ET
          <i className="fa-solid fa-greater-than"></i>
        </a>
      </div>
    </div>
  );
}

export default MessiBanner;
