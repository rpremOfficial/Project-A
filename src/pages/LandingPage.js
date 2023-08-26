import React from "react";
import Header from "../components/Header";
import "./LandingPage.scss";
import Footer from "../components/Footer";
import JobElement from "../components/JobElement";
import data from "../data.json";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <Header />
        <div className="mid-div">
          <div className="jobs-container">
            {data.map((job) => {
              return (
                <JobElement
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  batch={job.batch}
                  ctc={job.ctc}
                  link={job.link}
                />
              );
            })}
          </div>

          <div className="paging-container">
            <div className="paging-left">
              <button className="btn-paging">Prev</button>
            </div>
            <div className="paging-center">
              <h4>
                1 <span> / 20</span>
              </h4>
            </div>
            <div className="paging-right">
              <button className="btn-paging">Next</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
