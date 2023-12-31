import React from "react";
import "./JobElement.scss";

const JobElement = (props) => {
  const { id, title, batch, ctc, logo, link } = props;

  console.log({ logo });
  return (
    <>
      <div className="job-element" key={id}>
        <div className="job-element-left">
          <h3>{id}.</h3>
        </div>
        <div className="job-element-details">
          <div className="about-role">
            <h4>
              Title: <span>{title}</span>
            </h4>
            <h4>
              Batch: <span>{batch}</span>
            </h4>
            <h4>
              CTC: <span>{ctc}</span>
            </h4>
          </div>
          <div className="company-logo">
            <img src={logo} alt="logo"></img>
          </div>
        </div>
        <div className="job-element-right">
          <a href={link} target="_blank" rel="noreferrer">
            Apply
          </a>
        </div>
      </div>
    </>
  );
};

export default JobElement;
