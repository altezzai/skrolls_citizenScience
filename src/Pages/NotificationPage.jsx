import React from "react";
import { Notification } from "../Components/Notification/Notification";
import postpic from "../../src/assets/post-img.png";
import profilePic from "../../src/assets/profile.png";
import settings from "../../src/assets/settings-gray.svg";
import "./CSS/NotificationPage.css";
import { OnlineLogo } from "../Components/OnlineLogo/OnlineLogo";
import { ResearchActivities } from "../Components/ResearchActivities/ResearchActivities";

const NotificationPage = () => {
  return (
    <div className="notifpage">
      <div className="titlenotif">
        <span>Notifications</span>
        <OnlineLogo icon={settings} size="25px" />
      </div>

      <div className="dateorder">
        <span className="day">Today</span>
        <div className="notifbox">
          <Notification
            profilePic={profilePic}
            username={"Rafsal N"}
            text={"Liked your latest post"}
            time={"23 min"}
            postpic={postpic}
          />
        </div>
      </div>
      <div className="dateorder">
        <span className="day">Yesterday</span>
        <div className="notifbox">
          <Notification
            profilePic={profilePic}
            username={"Rafsal N"}
            text={"Liked your latest post"}
            time={"23 min"}
          />
          <Notification
            profilePic={profilePic}
            username={"Rafsal N"}
            text={"Liked your latest post"}
            time={"23 min"}
            postpic={postpic}
          />
        </div>
      </div>
      <div className="dateorder">
        <span className="day">26/07/2024</span>
        <div className="notifbox">
          <Notification
            profilePic={profilePic}
            username={"Rafsal N"}
            text={"Liked your latest post"}
            time={"23 min"}
            postpic={postpic}
          />
          <Notification
            profilePic={profilePic}
            username={"Rafsal N"}
            text={"Liked your latest post"}
            time={"23 min"}
            postpic={postpic}
          />
          <Notification
            profilePic={profilePic}
            username={"Rafsal N"}
            text={"Liked your latest post"}
            time={"23 min"}
            postpic={postpic}
          />
        </div>
      </div>
    </div>
  );
};
export default NotificationPage;
