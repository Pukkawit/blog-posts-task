import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <div id="nav">
      <div className="nav-content">
        <div className="logo">
          <img src="../src/assets/blog_logo.png" alt="" width={"100%"} />
          <span>Pukkawit's Blog</span>
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Porfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
