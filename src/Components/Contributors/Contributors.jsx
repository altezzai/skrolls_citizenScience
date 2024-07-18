import React from "react";
import "./Contributors.css";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import profile from "../../assets/profile.png";
import { Photogroup } from "../Photogroup/Photogroup";

export const Contributors = () => {
  const ContributorsList = [
    "Anurag T K",
    "Ishaque",
    "Aswin K",
    "Farhathulla",
    "Rafsal",
    "Akshay Bose",
  ];

  const displayContributors = () => {
    switch (ContributorsList.length) {
      case 1:
        return (
          <div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[0]}</a>
          </div>
        );
      case 2:
        return (
          <>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[0]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[1]}</a>
          </>
        );
      case 3:
        return (
          <>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[0]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[1]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[2]}</a>
          </>
        );
      case 4:
        return (
          <>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[0]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[1]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[2]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[3]}</a>
          </>
        );
      case 5:
        return (
          <>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[0]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[1]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[2]}</a>
            <div className="smalldot"></div>
            <Photogroup image1={profile} image2={profile} flag={false} />
            <span className="uname">
              + {ContributorsList.length - 3} Others
            </span>
          </>
        );

      default:
        return (
          <>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[0]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[1]}</a>
            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <a className="uname">{ContributorsList[2]}</a>
            <div className="smalldot"></div>
            <Photogroup image1={profile} image2={profile} image3={profile} />
            <span className="uname">
              + {ContributorsList.length - 3} Others
            </span>
          </>
        );
    }
  };

  return <div className="contributor">{displayContributors()}</div>;
};
