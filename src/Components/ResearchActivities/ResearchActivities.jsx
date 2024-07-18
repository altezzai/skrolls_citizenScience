import React from "react";
import "./ResearchActivities.css";
import docimage from "../../assets/profile.png";
import PostButton from "../PostButton/PostButton";
import download from "../../assets/download.svg";
import verified from "../../assets/verified.svg";
import { Contributors } from "../Contributors/Contributors";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import profile from "../../assets/profile.png";

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
        <div className="expansion">
          <div className="contribtitle">
            <span>Contributors</span>
          </div>
          <div className="contrib">
            <div className="imagename">
              <ProfilePhoto img={profile} size={"24px"} />
              <a className="pname">A. Majeed</a>
            </div>
            <div className="imagename">
              <ProfilePhoto img={profile} size={"24px"} />
              <a className="pname">A. Majeed</a>
            </div>
            <div className="imagename">
              <ProfilePhoto img={profile} size={"24px"} />
              <a className="pname">A. Majeed</a>
            </div>
            <div className="imagename">
              <ProfilePhoto img={profile} size={"24px"} />
              <a className="pname">A. Majeed</a>
            </div>
          </div>
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
      <div className="source">
        <img src={verified} />
        <span>Source:</span>
        <span>Crossref</span>
      </div>
    </div>
  );
};
