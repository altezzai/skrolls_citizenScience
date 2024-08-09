import React from "react";
import "./Post.css";
import { cn } from "../../utils/utils";

import photo from "../../assets/profile.png";
import image from "../../assets/post-img.png";
import comment_icon from "../../assets/comments.svg";
import view from "../../assets/view.svg";
import send from "../../assets/send.svg";
import save from "../../assets/save.svg";
import back from "../../assets/previous.svg";
import internet from "../../assets/internet.svg";
import translate from "../../assets/translate.svg";

import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import { Link, useLocation } from "react-router-dom";
import { Heart } from "../ui/Heart";

const Post = () => {
  const location = useLocation();
  const inPostPage = location.pathname.includes("/post");

  return (
    <>
      {inPostPage && (
        <Link
          to="/"
          className="back-bgcolor flex gap-2 h-12 items-center border-b-2 rounded-t-2xl text-base px-6 font-medium select-none"
        >
          <img src={back} className=" w-4" alt="previous" draggable="false" />
          Back
        </Link>
      )}

      <div
        className={cn(
          "post flex w-full px-5 py-6 rounded-2xl bg-bg-secondary gap-3 ",
          {
            "rounded-t-none  mb-2": inPostPage,
            "mb-5": !inPostPage,
          }
        )}
      >
        <ProfilePhoto img={photo} size={"3rem"} />

        <div className="post-details">
          <div className="poster-details">
            <div className="poster-name">Manu P</div>
            <div className="posted-date dot"></div>
            <div className="posted-date"> April 17</div>
          </div>
          <div className="post-content">
            🚀 Excited to dive into the world of computer science! 💻 Just
            started my journey as a CS student, and I'm already fascinated by
            the endless possibilities of coding. From unraveling algorithms to
            crafting innovative solutions, every day is an adventure! 🌟 Can't
            wait to see where this path takes me! #CSStudent #CodingAdventure
            #TechJourney 🌐✨:
          </div>
          <div className="post-extra">
            <div className="post-link btn">
              <img src={internet} alt="" />
              <a href="">http://rsg.ms/3426e12</a>
            </div>
            <div className="post-link btn">
              <img src={translate} alt="" />
              See Translation
            </div>
          </div>
          <div className="post-img">
            <img src={image} alt="post image" />
          </div>
          <div className="post-icons">
            <div className="icon-section">
              <Heart
                className={"w-8 h-8 p-1 hover:bg-red-50"}
                textclr={"text-black"}
              />

              <Link to="/post" className="icon">
                <img src={comment_icon} alt="comment" draggable="false" />
                56
              </Link>
            </div>
            <div className="icon-section">
              <div className="icon">
                <img src={view} alt="view icon" draggable="false" />
                270
              </div>
              <div className="icon">
                <img src={send} alt="send message" draggable="false" />
              </div>
              <div className="icon">
                <img
                  src={save}
                  className="save-icon"
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
