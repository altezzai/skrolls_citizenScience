import React from 'react';
import './Post.css';
import { cn } from '../../utils/utils';

import photo from '../../assets/profile.png';
import image from '../../assets/post-img.png';
import comment_icon from '../../assets/comments.svg';
import view from '../../assets/view.svg';
import send from '../../assets/send.svg';
import save from '../../assets/save.svg';
import back from '../../assets/previous.svg';
import internet from '../../assets/internet.svg';
import translate from '../../assets/translate.svg';

import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from '../ui/Heart';

const Post = () => {
  const location = useLocation();
  const inPostPage = location.pathname.includes('/post');

  return (
    <>
      {inPostPage && (
        <Link
          to="/"
          className="flex gap-2 h-12 items-center border-b-2 rounded-t-2xl text-base px-6 font-medium select-none bg-bg-secondary hover:bg-slate-50"
        >
          <img src={back} className="w-4" alt="previous" draggable="false" />
          Back
        </Link>
      )}

      <div
        className={clsx(
          "post flex w-full px-5 py-6 rounded-2xl bg-bg-secondary gap-3",
          {
            'mb-2 rounded-t-none': inPostPage,
            'mb-5': !inPostPage,
          }
        )}
      >
        <ProfilePhoto img={photo} size={"2.6rem"} />

        <div className="pr-3">
          <div className="flex gap-3 items-center select-none">
            <div className="text-text-primary text-xl font-bold">Manu P</div>
            <div className="rounded-full text-text-muted text-xl flex items-center  pb-2">
              .
            </div>
            <div className="text-[0.9rem] font-bold text-text-muted">
              April 17
            </div>
          </div>
          <div className="text-lg font-normal">
            🚀 Excited to dive into the world of computer science! 💻 Just
            started my journey as a CS student, and I'm already fascinated by
            the endless possibilities of coding. From unraveling algorithms to
            crafting innovative solutions, every day is an adventure! 🌟 Can't
            wait to see where this path takes me! #CSStudent #CodingAdventure
            #TechJourney 🌐✨:
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-text-secondary my-4">
            <div className="px-4 bg-bg-muted gap-2 flex py-2 rounded-full cursor-pointer">
              <img
                src={internet}
                className="w-5"
                alt="internet link"
                draggable="false"
              />
              <Link to="http://altezzai.com">http://rsg.ms/3426e12</Link>
            </div>
            <div className="px-4 bg-bg-muted gap-2 flex py-2 rounded-full cursor-pointer">
              <img
                src={translate}
                className="w-5"
                alt="translation"
                draggable="false"
              />
              See Translation
            </div>
          </div>
          <div className="w-full rounded-2xl mb-3">
            <img
              src={image}
              alt="post"
              className="w-11/12 rounded-2xl max-h-[600px]"
              draggable="false"
            />
          </div>
          <div className="flex justify-between w-11/12">
            <div className="flex gap-6">
              <Heart
                className={"w-8 h-8 p-1 hover:bg-red-50"}
                textclr={"text-black"}
              />

              <Link
                to="/post"
                className="flex items-center justify-center gap-1 cursor-pointer "
              >
                <div className="rounded-full  hover:bg-red-50 p-1">
                <img
                  src={msg}
                  alt="comment "
                  className="w-6"
                  draggable="false"
                />
                </div>
                56
              </Link>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={view}
                  alt="view icon"
                  className="w-6"
                  draggable="false"
                />
                270
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={send}
                  alt="send message"
                  className="w-6"
                  draggable="false"
                />
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={save}
                  className="w-8"
                  alt="save message"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
