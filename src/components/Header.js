import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-div">
          <h1>Project - A</h1>
        </div>
        <div className="button-div">
          <button className="btn-primary">Join now</button>
        </div>
      </div>
      <div className="nav">
        <ul className="ul-left">
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
        </ul>

        <ul className="ul-right">
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
