import React from 'react';

import login_bg from '../assets/login_bg.png';
import skrolls_logo from '../assets/skrolls.png';
import orcid from '../assets/orcid_icon.png';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="flex h-screen w-full items-center gap-10 bg-bg-secondary px-20 max-xl:gap-5 max-xl:px-5">
      <div className="flex h-4/5 w-5/12 flex-col justify-between gap-10 max-lg:w-1/2 max-md:w-full">
        <div className="flex select-none items-center pl-10 text-xl font-bold text-[#324452] max-lg:text-base">
          <img
            src={skrolls_logo}
            alt="logo"
            className="w-10 max-lg:w-7"
            draggable="false"
          />
          CitizenScience
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex w-8/12 flex-col gap-4 max-lg:w-3/4 max-md:w-11/12">
            <div className="flex select-none flex-col gap-1 max-lg:gap-0">
              <div className="text-3xl font-bold max-lg:text-lg">Register </div>
              <div className="text-sm font-medium max-lg:text-sm">
                Create a new account
              </div>
            </div>
            <form action="" className="flex flex-col gap-2">
              <div className="mt-2 flex flex-col">
                <label
                  htmlFor=""
                  className="select-none text-sm font-medium text-text-hard"
                >
                  Full Name
                </label>
                <input
                  id="full_name"
                  type="text"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  name=""
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="select-none text-sm font-medium text-text-hard"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  name=""
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="select-none text-sm font-medium text-text-hard"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  name=""
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="select-none text-sm font-medium text-text-hard"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  name=""
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="select-none text-sm font-medium text-text-hard"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm_password"
                  type="text"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  name=""
                />
              </div>

              <div className="mt-4 flex w-full cursor-pointer select-none justify-center rounded-lg bg-primary py-2 text-bg-secondary transition-all ease-in-out hover:bg-red-500">
                <input
                  className="text-base font-bold"
                  type="submit"
                  name=""
                  id=""
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex w-full justify-center gap-1 text-base text-text-secondary">
          Already have an account?
          <Link
            to="/login"
            className="cursor-pointer select-none font-medium text-text-primary underline"
          >
            Login here
          </Link>
        </div>
      </div>

      <div className="flex h-4/5 w-7/12 select-none items-center justify-center rounded-2xl bg-[#E3EAFF] max-lg:h-2/3 max-lg:w-1/2 max-md:hidden">
        <img
          src={login_bg}
          className="h-4/6 w-4/5 max-lg:h-1/2 max-lg:w-3/4"
          alt="login background"
          draggable="false"
        />
      </div>
    </div>
  );
};
