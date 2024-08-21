import { useEffect, useState } from 'react';

import whatsapp from '../../assets/whatsapp.svg';
import facebook from '../../assets/facebook_color.svg';
import mail from '../../assets/mail.svg';
import twitter from '../../assets/twitter.svg';
import insta from '../../assets/insta.svg';

import copy from 'copy-to-clipboard';
import useClickOutside from '../../hooks/useClickOutside';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/ui/popover';

export const ShareProfile = () => {
  const { isModalOpen, closeModal } = useModal();
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const shareModalRef = useClickOutside(isModalOpen(modals.SHARE_MODAL), () =>
    closeModal(modals.SHARE_MODAL)
  );
  const [copyText, setCopyText] = useState('http://hereIamYouSeeMeNow');

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText);
    setIsPopOpen(true);
    setIsButtonClicked(true);
  };

  useEffect(() => {
    if (isButtonClicked) {
      const buttonTimer = setTimeout(() => {
        setIsButtonClicked(false);
      }, 200);
      return () => clearTimeout(buttonTimer);
    }
  }, [isButtonClicked]);

  useEffect(() => {
    let timer;
    if (isPopOpen) {
      timer = setTimeout(() => {
        setIsPopOpen(false);
      }, 700);
    }
    return () => clearTimeout(timer);
  }, [isPopOpen]);

  return (
    <div
      ref={shareModalRef}
      className="absolute z-50 flex flex-col gap-3 rounded-2xl bg-bg-secondary p-3"
    >
      <div className="select-none text-sm font-medium">Share</div>

      <div className="flex select-none items-end gap-6 pb-1 text-xs">
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
          <div className="w-fit cursor-pointer rounded-full bg-green-500 p-3">
            <img
              src={whatsapp}
              className="w-8"
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
          <div className="w-fit cursor-pointer rounded-full bg-gray-400 p-4">
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

      <div className="flex rounded-lg bg-textarea p-1 text-sm font-medium">
        <input
          type="text"
          className="w-full bg-textarea pl-3 outline-none"
          value={copyText}
          onChange={handleCopyText}
        />
        <Popover open={isPopOpen} onOpenChange={setIsPopOpen}>
          <PopoverTrigger asChild>
            <div
              className={`cursor-pointer select-none rounded-lg px-5 py-2 text-bg-secondary ${
                isButtonClicked ? 'bg-red-900' : 'bg-primary hover:bg-red-500'
              }`}
              onClick={copyToClipboard}
            >
              Copy
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex h-10 w-fit items-center border-none bg-text-primary text-sm text-bg-secondary">
            Copied to Clipboard
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
