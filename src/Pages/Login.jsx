import React, { useState } from 'react';

import login_bg from '../assets/login_bg.png';
import skrolls_logo from '../assets/skrolls.png';
import orcid from '../assets/orcid_icon.png';
import visible from '../assets/visible.svg';
import invisible from '../assets/invisible.svg';
import { Link } from 'react-router-dom';
// import { Separator } from '@radix-ui/react-separator';
import { Separator } from '@/Components/ui/separator';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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
              <div className="text-3xl font-bold max-lg:text-lg">Sign in </div>
              <div className="text-sm font-medium max-lg:text-sm">
                Welcome back user!
              </div>
            </div>
            <form action="" className="flex flex-col gap-2">
              <div className="mt-2 flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="select-none text-sm font-medium text-text-hard"
                >
                  Email / Username
                </label>
                <input
                  type="text"
                  className="rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1 outline-none"
                  name=""
                  id=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="select-none text-sm font-medium text-text-hard"
                >
                  Password
                </label>
                <div className="flex rounded-lg border-2 border-border-muted bg-bg-primary px-2 py-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name=""
                    id=""
                    className="w-full bg-bg-primary outline-none"
                  />
                  <img
                    src={showPassword ? visible : invisible}
                    className="w-5 cursor-pointer select-none"
                    alt="visible"
                    draggable="false"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>

              <div className="mt-5 flex w-full cursor-pointer select-none justify-center rounded-lg bg-primary py-2 text-bg-secondary transition-all ease-in-out hover:bg-red-500">
                <input
                  className="text-base font-bold"
                  type="submit"
                  name=""
                  id=""
                  value="Login"
                />
              </div>
            </form>

            <div className="flex w-full select-none items-center justify-center gap-3 overflow-hidden">
              <Separator className="bg-border-muted" />
              <div className="text-base font-light text-text-secondary">or</div>
              <Separator className="bg-border-muted" />
            </div>

            <div className="relative flex cursor-pointer select-none items-center justify-center rounded-lg border-2 border-text-primary py-2 text-base font-bold text-text-primary transition-all delay-100 ease-in-out hover:bg-bg-primary">
              <img
                src={orcid}
                alt="ORCID"
                className="absolute left-[10%] w-7 max-xl:left-3"
                draggable="false"
              />
              Login with ORCID
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center gap-1 text-base text-text-secondary max-sm:text-sm">
          Need an account?
          <Link
            to="/register"
            className="cursor-pointer select-none font-medium text-text-primary underline"
          >
            Signup here
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
