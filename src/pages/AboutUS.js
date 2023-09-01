import React, { useEffect } from "react";
import Header from "../components/Header";
import "./AboutUS.scss";
import Footer from "../components/Footer";

const AboutUS = () => {
  useEffect(() => {
    document.title = "About | Project - A";
  }, []);

  return (
    <>
      <div className="AboutUS">
        <Header />
        <div className="mid-div">
          <div className="about-container">
            <div className="image-div">
              <img
                src="https://wallpapercave.com/wp/wp2722874.jpg"
                alt="Cover banner"
              ></img>
            </div>
            <div className="content-div">
              <h1>Headline</h1>
              <p>This is a paragraph</p>
            </div>
            <div className="button-div">
              <button>Button</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUS;
