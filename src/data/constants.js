import home_icon from "../assets/home.svg";
import messages_icon from "../assets/messages.svg";
import notification_icon from "../assets/notification.svg";
import groups_icon from "../assets/groups.svg";
import communities_icon from "../assets/community.svg";
import settings_icon from "../assets/settings.svg";
import profile_icon from "../assets/profile.png";

const modals = {
  FOLLOW_LIST: "follow_list_modal",
};

const PUBLIC_NAV_ITEMS = {
  top: [
    {
      label: "Home",
      link: "/",
      icon: home_icon,
    },
    {
      label: "Messages",
      link: "/messages",
      icon: messages_icon,
      notify: true,
    },
    {
      label: "Groups",
      link: "/groups",
      icon: groups_icon,
    },
    {
      label: "Communities",
      link: "/communities",
      icon: communities_icon,
    },
    {
      label: "Notifications",
      link: "/notifications",
      icon: notification_icon,
      notify: true,
    },
  ],
  bottom: [
    {
      label: "Profile",
      link: "/profile",
      icon: profile_icon,
    },
    {
      label: "Settings",
      link: "/settings",
      icon: settings_icon,
    },
  ],
};

export { modals, PUBLIC_NAV_ITEMS };
