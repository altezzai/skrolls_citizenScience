import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavPanel.css";
import { OnlineLogo } from "../OnlineLogo/OnlineLogo";
import home from "../../assets/home.svg";
import messages from "../../assets/messages.svg";
import notification from "../../assets/notification.svg";
import groups from "../../assets/groups.svg";
import community from "../../assets/community.svg";
import settings from "../../assets/settings.svg";
import profile from "../../assets/profile.png";
import skrolls from "../../assets/skrolls.png";

const navItems = [
  { path: "/", label: "Home", icon: home },
  { path: "/messages", label: "Messages", icon: messages },
  { path: "/groups", label: "Groups", icon: groups },
  { path: "/communities", label: "Communities", icon: community },
  { path: "/notifications", label: "Notifications", icon: notification },
  { path: "/profile", label: "Profile", icon: profile, isProfile: true },
  { path: "/settings", label: "Settings", icon: settings },
];

export const NavPanel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");

  useEffect(() => {
    const index = navItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(index !== -1 ? index : 0);
  }, [location.pathname]);

  const navClasses = useMemo(() => {
    return {
      aside: `asideNav ${activeIndex === 1 ? "msgNav" : ""}`,
      panel: `navPanel ${activeIndex === 1 ? "msgpanel" : ""}`,
      piece: (index) => `navPiece ${index < 5 ? "bottomBorder" : ""} ${
        activeIndex === index ? "active" : ""
      } ${activeIndex === 1 ? "navPieceMsg" : ""}`,
    };
  }, [activeIndex]);

  return (
    <div className={navClasses.aside}>
      {inMessagePage && (
        <Link to="/" className="msg-icon flex py-1 -mt-10 rounded-lg">
          <img src={skrolls} alt="Skrolls icon" />
        </Link>
      )}

      <div className={navClasses.panel}>
        {navItems.slice(0, 5).map((item, index) => (
          <NavItem
            key={item.path}
            {...item}
            index={index}
            activeIndex={activeIndex}
            navClasses={navClasses}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      <div className={`navPanel bottom ${activeIndex === 1 ? "msgpanel" : ""}`}>
        {navItems.slice(5).map((item, index) => (
          <NavItem
            key={item.path}
            {...item}
            index={index + 5}
            activeIndex={activeIndex}
            navClasses={navClasses}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};

const NavItem = ({ path, label, icon, index, isProfile, activeIndex, navClasses, setActiveIndex }) => {
  const Component = path ? Link : 'a';
  const props = path ? { to: path } : {};

  return (
    <Component
      {...props}
      className={navClasses.piece(index)}
      onClick={() => setActiveIndex(index)}
    >
      {isProfile ? (
        <img src={icon} className="profileLogo" alt={label} />
      ) : (
        <OnlineLogo icon={icon} flag={index < 2 || index === 4} />
      )}
      <h1>{label}</h1>
    </Component>
  );
};