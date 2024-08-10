import React from "react";

import whatsapp from "../../assets/whatsapp.svg";
import facebook from "../../assets/facebook_color.svg";
import mail from "../../assets/mail.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";

export const ShareProfile = () => {
  return (
    <div className="bg-bg-secondary flex flex-col rounded-2xl p-3 gap-3">
      <div className="text-sm font-medium select-none">Share</div>

      <div className="flex gap-5 items-end text-xs pb-1 select-none">
        <div className="flex flex-col items-center gap-1">
          <img
            src={facebook}
            className="w-16 cursor-pointer"
            draggable="false"
            alt="facebook"
          />
          Facebook
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="rounded-full p-3 bg-green-500 w-fit cursor-pointer">
            <img
              src={whatsapp}
              className="w-8 "
              draggable="false"
              alt="whatsapp"
            />
          </div>
          Whatsapp
        </div>

        <div className="flex flex-col items-center gap-2">
          <img
            src={twitter}
            className="w-14 cursor-pointer"
            draggable="false"
            alt="X"
          />
          X
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="p-4 rounded-full bg-gray-400 w-fit cursor-pointer">
            <img src={mail} className="w-7" draggable="false" alt="mail" />
          </div>
          Email
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            src={insta}
            className="w-16 cursor-pointer"
            draggable="false"
            alt="linkedin"
          />
          Linkedin
        </div>
      </div>

      <div className="flex bg-textarea p-1 rounded-lg text-sm font-medium">
        <input
          type="text"
          className="bg-textarea outline-none w-full pl-3"
          value="http://hereIamYouSeeMeNow"
        />
        <div className="cursor-pointer bg-primary text-bg-secondary rounded-lg px-5 py-2 select-none">
          Copy
        </div>
      </div>
    </div>
  );
};
