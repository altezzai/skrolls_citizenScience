import React from "react";
import "./ResearchActivities.css";
import docimage from "../../assets/profile.png";
import PostButton from "../PostButton/PostButton";
import download from "../../assets/download.svg";
import verified from "../../assets/verified.svg";
import { Contributors } from "../Contributors/Contributors";

export const ResearchActivities = () => {
  return (
    <div className="activitybox">
      <div className="activitypart">
        <a className="actname">
          Late blight of potato: From the great Irish potato famine to the
          genomic era - An overview
        </a>
        <div className="about">
          <a href="#" className="classif">
            Hellenic Plant Protection Journal
          </a>
          <a href="#" className="article">
            Journal article
          </a>
          <span>01 Jan 2022</span>
        </div>
        <Contributors />
        <div className="source">
          <img src={verified} />
          <span>Source:</span>
          <span>Crossref</span>
        </div>
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
