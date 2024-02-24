import React from "react";
import img_apple_vision from "../assets/images/promo_logo_apple_vision_pro.png"
import img_apple_watch from "../assets/images/promo_logo_apple_watch_series_8.png"
import img_apple_m2_chip from "../assets/images/promo_m2_chip.png"
import logo_large from "../assets/images/logo__dcojfwkzna2q_large.png"

function BannersContainer() {
  return (
    <div className="banners-container">
      <div className="banner-box box1">
        <div className="banner-box-content1">
          <h1 className="banner-box-title">MacBook Air 15"</h1>
          <p className="banner-content-p">Impressively big. Impressively thin.</p>
          <a href="/" className="banner-content-a">
            Learn more<i className="fa-solid fa-greater-than"></i>
          </a>
          <a href="/" className="banner-content-a">
            Buy<i className="fa-solid fa-greater-than"></i>
          </a>
        </div>
      </div>

      <div className="banner-box box2">
        <div className="banner-box-content2">
          <img src={img_apple_vision} alt="" />
          <p className="banner-content-p">
            Welcome to the area of spatial computing.
          </p>
          <p id="box-p">Available early nezt year in the U.S.</p>
          <a href="/" className="banner-content-a">
            Learn more<i className="fa-solid fa-greater-than"></i>
          </a>
        </div>
      </div>

      <div className="banner-box box3">
        <div className="banner-box-content1">
          <img
            src={img_apple_watch}
            alt=""
          />
          <p className="banner-content-p" style={{color: "white"}}>
            A healty lead ahead.
          </p>
          <a href="/" className="banner-content-a">
            Learn more<i className="fa-solid fa-greater-than"></i>
          </a>
          <a href="/" className="banner-content-a">
            Buy<i className="fa-solid fa-greater-than"></i>
          </a>
        </div>
      </div>

      <div className="banner-box box4">
        <div className="banner-box-content1">
          <h1 className="banner-box-title">
            Save on Mac or iPad <br />
            for college.
          </h1>
          <p className="banner-content-p">
            Plus get a gift card upto &/36;150<sup>2</sup>
          </p>
          <a href="/" className="banner-content-a">
            Shop now<i className="fa-solid fa-greater-than"></i>
          </a>
        </div>
      </div>

      <div className="banner-box box5">
        <div className="banner-box-content1">
          <h1 style={{color: "white", fontSize: "40px"}}>iPad Pro</h1>
          <p className="banner-content-p" style={{color: "white"}}>
            Supercherged by <img src={img_apple_m2_chip} alt=""/>
          </p>
          <a href="/" className="banner-content-a">
            Learn more<i className="fa-solid fa-greater-than"></i>
          </a>
          <a href="/" className="banner-content-a">
            Buy<i className="fa-solid fa-greater-than"></i>
          </a>
        </div>
      </div>

      <div className="banner-box box6">
        <div className="banner-box-content1">
          <img src={logo_large} alt="" />
          <p className="banner-content-p">Upgrade and save. it's that easy</p>
          <a href="/" className="banner-content-a">
            See what your device is worth
            <i className="fa-solid fa-greater-than"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BannersContainer;
