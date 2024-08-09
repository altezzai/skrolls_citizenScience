import React from "react";
import "./NavPanel.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import skrolls_logo from "../../assets/skrolls.png";
import NavPanelItem from "./NavPanelItem";

// Icons
import home_icon from "../../assets/home.svg";
import messages_icon from "../../assets/messages.svg";
import notification_icon from "../../assets/notification.svg";
import groups_icon from "../../assets/groups.svg";
import communities_icon from "../../assets/community.svg";
import settings_icon from "../../assets/settings.svg";
import profile_icon from "../../assets/profile.png";
import IconBadge from "../IconBadge/IconBadge";

export const NavPanel = () => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");

  return (
    <div className="asideNav">
      <Link
        to="/"
        className={`${
          inMessagePage ? "msg-icon flex py-1 -mt-10 rounded-lg" : "hidden"
        }`}
      >
        <img src={skrolls_logo} alt="icon" />
      </Link>

      <div className="navPanel">
        <NavPanelItem link="/" isSelected={location.pathname === "/"}>
          <IconBadge>
            <img src={home_icon} alt="home" />
          </IconBadge>
          Home
        </NavPanelItem>

        <NavPanelItem
          link="/messages"
          isSelected={location.pathname === "/messages"}
        >
          <IconBadge>
            <img src={messages_icon} alt="messages" className="px-[1px]"/>
          </IconBadge>
          Messages
        </NavPanelItem>

        <NavPanelItem
          link="/groups"
          isSelected={location.pathname === "/groups"}
        >
          <IconBadge>
            <img src={groups_icon} alt="groups" />
          </IconBadge>
          Groups
        </NavPanelItem>

        <NavPanelItem
          link="/communities"
          isSelected={location.pathname === "/communities"}
        >
          <IconBadge>
            <img src={communities_icon} alt="communities" />
          </IconBadge>
          Communities
        </NavPanelItem>

        <NavPanelItem
          link="/notifications"
          isSelected={location.pathname === "/notifications"}
        >
          <IconBadge>
            <img src={notification_icon} alt="notifications" />
          </IconBadge>
          Notifications
        </NavPanelItem>
      </div>

      <div className="navPanel">
        <NavPanelItem
          link="/profile"
          isSelected={location.pathname === "/profile"}
        >
          <IconBadge>
            <img
              src={profile_icon}
              alt="profile"
              className="rounded-full w-[22px] h-[22px]"
            />
          </IconBadge>
          Profile
        </NavPanelItem>

        <NavPanelItem
          link="/settings"
          isSelected={location.pathname === "/settings"}
        >
          <IconBadge>
            <img src={settings_icon} alt="settings" />
          </IconBadge>
          Settings
        </NavPanelItem>
      </div>
    </div>
  );
};
