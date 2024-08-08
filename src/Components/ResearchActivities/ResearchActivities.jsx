import React, { useState } from "react";
import "./ResearchActivities.css";
import docimage from "../../assets/profile.png";
import PostButton from "../PostButton/PostButton";
import download from "../../assets/download.svg";
import verified from "../../assets/verified.svg";
import { Contributors } from "../Contributors/Contributors";

import profile from "../../assets/profile.png";
import { PhotowithName } from "../PhotowithName/PhotowithName";

const ResearchActivities = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const handleActnameClick = () => {
    setDetailsVisible(!detailsVisible);
  };
  const ContributorsList = [
    "Anurag T K",
    "Ishaque",
    "Aswin K",
    "Farhathulla",
    "Rafsal",
    "Akshay Bose",
  ];
  return (
    <div className="activitybox" onClick={handleActnameClick}>
      <div className="activitypart">
        <a className="actname" href="#">
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
        {/* <Contributors /> */}
        {!detailsVisible && <Contributors />}
        {!detailsVisible && (
          <div className="source">
            <img src={verified} />
            <span>Source:</span>
            <span>Crossref</span>
          </div>
        )}

        {detailsVisible && (
          <div className="expansion">
            <div className="contribtitle">
              <span>Contributors</span>
            </div>
            <div className="contrib">
              <PhotowithName profile={profile} name={ContributorsList[0]} />

              <PhotowithName profile={profile} name={ContributorsList[1]} />

              <PhotowithName profile={profile} name={ContributorsList[2]} />

              <PhotowithName profile={profile} name={ContributorsList[3]} />
            </div>
          </div>
        )}
      </div>
      <div className="docpart">
        <img src={docimage} className="docimg" />
        <PostButton
          image={download}
          text={"Download"}
          radius={"6px"}
          height={"25px"}
          iconHeight="15px"
          flag={true}
          textsize="11px"
        />
      </div>
      {detailsVisible && (
        <div className="tabdetails">
          <table className="tableview">
            <tbody>
              <tr>
                <td className="labelname">DOI :</td>
                <td className="infodata">10.2478/hppj-2022-0001</td>
              </tr>
              <tr>
                <td className="labelname">URL :</td>
                <td>
                  <a href="" className="urllink">
                    https://doi.org/10.2478/hppj-2022-0001
                  </a>
                </td>
              </tr>
              <tr>
                <td className="labelname">Added :</td>
                <td className="infodata">2022-11-18</td>
              </tr>
              <tr>
                <td className="labelname">Last modified :</td>
                <td className="infodata">2022-11-18</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {detailsVisible && (
        <div className="source">
          <img src={verified} />
          <span>Source:</span>
          <span>Crossref</span>
        </div>
      )}
    </div>
  );
};

export default ResearchActivities;
