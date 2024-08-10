import React from "react";
import "./NavPanel.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "../../utils/utils";

import NavPanelItem from "./NavPanelItem";

import skrolls_logo from "../../assets/skrolls.png";
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
    <div
      className={cn(
        "h-full flex flex-col items-center justify-between py-14 ml-12 transition-margin",
        { "pt-[136px] ml-3": inMessagePage }
      )}
    >
      <Link
        to="/"
        className={cn("bg-bg-secondary flex py-1 top-3 rounded-lg absolute", {
          hidden: !inMessagePage,
        })}
      >
        <img src={skrolls_logo} alt="icon" />
      </Link>

      <div className="bg-bg-secondary rounded-2xl">
        <NavPanelItem
          className="rounded-t-2xl"
          link="/"
          isSelected={location.pathname === "/"}
        >
          <IconBadge>
            <img src={home_icon} alt="home" />
          </IconBadge>
          {!inMessagePage && <span>Home</span>}
        </NavPanelItem>

        <NavPanelItem
          className=""
          link="/messages"
          isSelected={location.pathname === "/messages"}
        >
          <IconBadge>
            <img src={messages_icon} alt="messages" className="px-[1px]" />
          </IconBadge>
          {!inMessagePage && <span>Messages</span>}
        </NavPanelItem>

        <NavPanelItem
          className=""
          link="/groups"
          isSelected={location.pathname === "/groups"}
        >
          <IconBadge>
            <img src={groups_icon} alt="groups" />
          </IconBadge>
          {!inMessagePage && <span>Groups</span>}
        </NavPanelItem>

        <NavPanelItem
          className=""
          link="/communities"
          isSelected={location.pathname === "/communities"}
        >
          <IconBadge>
            <img src={communities_icon} alt="communities" />
          </IconBadge>
          {!inMessagePage && <span>Communities</span>}
        </NavPanelItem>

        <NavPanelItem
          className="rounded-b-2xl"
          link="/notifications"
          isSelected={location.pathname === "/notifications"}
        >
          <IconBadge className="">
            <img src={notification_icon} alt="notifications" />
          </IconBadge>
          {!inMessagePage && <span>Notification</span>}
        </NavPanelItem>
      </div>

      <div className="bg-bg-secondary rounded-2xl">
        <NavPanelItem
          className="rounded-t-2xl"
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
          {!inMessagePage && <span>Profile</span>}
        </NavPanelItem>

        <NavPanelItem
          className="rounded-b-2xl"
          link="/settings"
          isSelected={location.pathname === "/settings"}
        >
          <IconBadge>
            <img src={settings_icon} alt="settings" />
          </IconBadge>
          {!inMessagePage && <span>Settings</span>}
        </NavPanelItem>
      </div>
    </div>
  );
};
