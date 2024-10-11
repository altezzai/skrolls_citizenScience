import { Link, useLocation } from 'react-router-dom';

import icon from '../../assets/icon.png';
import search from '../../assets/search.svg';
import { useRef } from 'react';
import HeaderUser from './HeaderUser';

const Header = () => {
  const inputRef = useRef(null);
  const location = useLocation();
  const inMessagePage =
    location.pathname.includes('/messages') ||
    location.pathname.includes('/communities') ||
    location.pathname.includes('/groups');

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={`flex h-20 w-full select-none items-center justify-between bg-bg-secondary px-20 max-lg:px-10 max-md:h-14 max-md:gap-3 max-md:px-6 ${
        inMessagePage && 'hidden'
      }`}
    >
      <Link to="/" className="flex">
        <img
          className="h-12 w-24 max-md:h-9 max-md:w-14"
          src={icon}
          alt="icon"
          draggable="false"
        />
      </Link>
      <div className="flex">
        <div className="mx-4 my-4 flex gap-3 rounded-3xl bg-textarea px-4 py-2 max-md:m-0 max-md:gap-1 max-md:px-2 max-md:py-1">
          <img
            src={search}
            alt="search"
            className="w-7 cursor-pointer max-md:w-5"
            onClick={handleSearchClick}
            draggable="false"
          />
          <input
            type="text"
            placeholder="Search"
            ref={inputRef}
            className="w-full bg-textarea text-base outline-none max-md:text-xs"
          />
        </div>

        {/* <HeaderUser /> */}
      </div>
    </div>
  );
};

export default Header;
