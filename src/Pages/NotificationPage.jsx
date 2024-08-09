import React from "react";
import { Notification } from "../Components/Notification/Notification";
import postpic from "../assets/post-img.png";
import profilePic from "../assets/profile.png";
import "./CSS/NotificationPage.css";

import IconBadge from "../Components/IconBadge/IconBadge";
import settings_icon from "../assets/settings-gray.svg";

const NotificationPage = () => {
  return (
    <div className="notifpage">
      <div className="titlenotif">
        <span>Notifications</span>
        <IconBadge>
          <img src={settings_icon} alt="settings" className="w-7 h-7 cursor-pointer p-1 hover:bg-secondary"/>
        </IconBadge>
      </div>

      <div className="dateorder bg-pri ">
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
