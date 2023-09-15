import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  function NewsPage() {
    navigate("/news");
  }

  function Home() {
    navigate("/");
  }

  function AboutUS() {
    navigate("/about");
  }

  function VisitGithub() {
    window.open("https://github.com/rpremOfficial/Project-A", "_blank");
  }

  return (
    <>
      <div className="header">
        <div className="logo-div">
          <h1>Preplacement</h1>
        </div>
        <div className="button-div">
          <button className="btn-primary">Join now</button>
        </div>
      </div>
      <div className="nav">
        <ul className="ul-left">
          <li onClick={Home}>Jobs</li>
          <li onClick={NewsPage}>Blog/Articles</li>
          <li>Discussion</li>
          <li>Resources</li>
          <li>Resume</li>
        </ul>

        <ul className="ul-right">
          <li onClick={AboutUS}>About Us</li>
          <li>FAQ</li>
          <li onClick={VisitGithub}>GitHub</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
