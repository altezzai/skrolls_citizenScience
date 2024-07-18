import React from "react";
import "./Contributors.css";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import profile from "../../assets/profile.png";
import { Photogroup } from "../Photogroup/Photogroup";
import { PhotowithName } from "../PhotowithName/PhotowithName";

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
            <PhotowithName profile={profile} name={ContributorsList[0]} />
          </div>
        );
      case 2:
        return (
          <>
            <PhotowithName profile={profile} name={ContributorsList[0]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[1]} />
          </>
        );
      case 3:
        return (
          <>
            <PhotowithName profile={profile} name={ContributorsList[0]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[1]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[2]} />
          </>
        );
      case 4:
        return (
          <>
            <PhotowithName profile={profile} name={ContributorsList[0]} />

            <div className="smalldot"></div>
            <ProfilePhoto img={profile} size={"24px"} />
            <PhotowithName profile={profile} name={ContributorsList[1]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[2]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[3]} />
          </>
        );
      case 5:
        return (
          <>
            <PhotowithName profile={profile} name={ContributorsList[0]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[1]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[2]} />

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
            <PhotowithName profile={profile} name={ContributorsList[0]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[1]} />

            <div className="smalldot"></div>
            <PhotowithName profile={profile} name={ContributorsList[2]} />

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
