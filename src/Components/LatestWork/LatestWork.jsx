import React from "react";
import "./LatestWork.css";
import Theme_pattern from "../../assets/theme_pattern.svg";
import Work_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const LatestWork = () => {
  return (
    <div id="work" className="latestwork">
      <div className="latestwork-title">
        <h1>My Latest Work</h1>
        <img src={Theme_pattern} alt="" />
      </div>
      <div className="work-container">
        {Work_data.map((work, i) => {
          return (
            <div key={i} className="work-format">
              <div className="work-img">
                <img src={work.w_img} alt="" />
                <h3>{work.w_no}</h3>
                <h2>{work.w_name}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default LatestWork;
