import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./News.scss";
import Footer from "../components/Footer";

import axios from "axios";

const url = "";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setNews(response.data.articles);
    });
  }, []);

  return (
    <>
      <div className="NewsPage">
        <Header />
        <div className="mid-div">
          <div className="news-container">
            <h1>News</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default News;
