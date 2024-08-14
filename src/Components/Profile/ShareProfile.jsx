import React, { useState } from "react";

import whatsapp from "../../assets/whatsapp.svg";
import facebook from "../../assets/facebook_color.svg";
import mail from "../../assets/mail.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";
import copy from "copy-to-clipboard";
import useClickOutside from "../../hooks/useClickOutside";
import { useModal } from "../../context/ModalContext";
import { modals } from "../../data/constants";

export const ShareProfile = () => {
  const { isModalOpen, closeModal } = useModal();
  const shareModalRef = useClickOutside(isModalOpen(modals.SHARE_MODAL), () =>
    closeModal(modals.SHARE_MODAL)
  );
  const [copyText, setCopyText] = useState("http://hereIamYouSeeMeNow");

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText);
  };

  return (
    <div
      ref={shareModalRef}
      className="bg-bg-secondary flex flex-col rounded-2xl p-3 gap-3 absolute z-50"
    >
      <div className="text-sm font-medium select-none">Share</div>

      <div className="flex gap-6 items-end text-xs pb-1 select-none">
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
          value={copyText}
          onChange={handleCopyText}
        />
        <div
          className="cursor-pointer bg-primary text-bg-secondary rounded-lg px-5 py-2 select-none hover:bg-red-500 transition-all ease-in delay-75"
          onClick={copyToClipboard}
        >
          Copy
        </div>
      </div>
    </div>
  );
};
