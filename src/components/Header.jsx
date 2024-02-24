import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="nav-links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="mega-menu">
          <a href="/" id="dp-1">
            Store
          </a>
          <div className="mega-menu-content">
            <ul>
              <li>
                <a href="/">MacBook</a>
              </li>
              <li>
                <a href="/">iMac</a>
              </li>
              <li>
                <a href="/">Mac Pro</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mega-menu">
          <a href="/">Mac</a>
          <div className="mega-menu-content">
            <ul>
              <li>
                <a href="/">MacBook Air</a>
              </li>
              <li>
                <a href="/">MacBook Pro</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/">iPad</a>
        </li>
        <li>
          <a href="/">iPhone</a>
        </li>
        <li>
          <a href="/">Watch</a>
        </li>
        <li>
          <a href="/">Vision</a>
        </li>
        <li>
          <a href="/">AirPods</a>
        </li>
        <li>
          <a href="/">TV & Home</a>
        </li>
        <li>
          <a href="/">Entertainment</a>
        </li>
        <li>
          <a href="/">Accessories</a>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <i className="fa-solid fa-magnifying-glass" />
        </li>
        <li>
          <i className="fa-solid fa-bag-shopping" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
