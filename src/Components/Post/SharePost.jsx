import { useEffect, useRef, useState } from 'react';

import whatsapp from '../../assets/whatsapp.svg';
import facebook from '../../assets/facebook_color.svg';
import mail from '../../assets/mail.svg';
import twitter from '../../assets/twitter.svg';
import insta from '../../assets/insta.svg';
import search_icon from '../../assets/search.svg';
import photo from '../../assets/profile.png';

import copy from 'copy-to-clipboard';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/ui/popover';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

export const SharePost = () => {
  const searchRef = useRef(null);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
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

  const handleSearchClick = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <div className="z-50 flex flex-col gap-3 rounded-xl bg-bg-secondary">
      <div className="flex gap-3 rounded-3xl bg-textarea px-4 py-2">
        <img
          src={search_icon}
          alt="search icon"
          className="w-6 cursor-pointer"
          draggable="false"
          onClick={handleSearchClick}
        />
        <input
          type="text"
          name=""
          id=""
          className="w-full bg-textarea outline-none placeholder:text-sm"
          placeholder="Search"
          ref={searchRef}
        />
      </div>

      <div className="flex items-center justify-around gap-3 rounded-2xl bg-textarea px-1 py-3 text-xs">
        <div className="flex h-20 w-24 flex-col items-center justify-start gap-1">
          <ProfilePhoto img={photo} className={'h-10 w-10'} />
          Rafsal
        </div>
        <div className="flex h-20 w-24 flex-col items-center justify-start gap-1 text-center">
          <ProfilePhoto img={photo} className={'h-10 w-10'}/>
          Muhammed Rafsal
        </div>
        <div className="flex h-20 w-24 flex-col items-center justify-start gap-1">
          <ProfilePhoto img={photo} className={'h-10 w-10'} />
          Rafsal N
        </div>
        <div className="flex h-20 w-24 flex-col items-center justify-start gap-1">
          <ProfilePhoto img={photo} className={'h-10 w-10'} />
          Rafsal who
        </div>
      </div>

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
