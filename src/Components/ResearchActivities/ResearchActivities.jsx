import React from "react";
import "./ResearchActivities.css";
import docimage from "../../assets/profile.png";
import PostButton from "../PostButton/PostButton";
import download from "../../assets/download.svg";

export const ResearchActivities = () => {
  return (
    <div className="activitybox">
      <div className="activitypart">
        <span className="actname">
          Late blight of potato: From the great Irish potato famine to the
          genomic era - An overview
        </span>
      </div>
      <div className="docpart">
        <img src={docimage} className="docimg" />
        <PostButton
          image={download}
          text={"Download"}
          radius={"6px"}
          height={"25px"}
          flag={true}
        />
      </div>
    </div>
  );
};
