import React, { useState } from "react";
import "./Post.css";

import photo from "../../assets/profile.png";
import image from "../../assets/post-img.png";
import love from "../../assets/love.svg";
import msg from "../../assets/message.svg";
import view from "../../assets/view.svg";
import send from "../../assets/send.svg";
import save from "../../assets/save.svg";
import internet from "../../assets/internet.svg";
import translate from "../../assets/translate.svg";

const Post = () => {
  const [likeCount, setLikeCount] = useState(200);
  const [liked, setLiked] = useState(false);

  const handleIconClick = (message) => {
    console.log(message);
  };

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
      handleIconClick("Unliked");
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
      handleIconClick("Liked");
    }
  };

  return (
    <div className="post">
      <div className="post-profile">
        <img src={photo} alt="" />
      </div>

      <div className="post-details">
        <div className="poster-details">
          <div className="poster-name">Manu P</div>
          <div className="posted-date dot"></div>
          <div className="posted-date"> April 17</div>
        </div>
        <div className="post-content">
          🚀 Excited to dive into the world of computer science! 💻 Just started
          my journey as a CS student, and I'm already fascinated by the endless
          possibilities of coding. From unraveling algorithms to crafting
          innovative solutions, every day is an adventure! 🌟 Can't wait to see
          where this path takes me! #CSStudent #CodingAdventure #TechJourney
          🌐✨:
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
          <img src={image} alt="" />
        </div>
        <div className="post-icons">
          <div className="icon-section">
            <div className="icon" onClick={handleLikeClick}>
              <img src={love} alt="" />
              {likeCount}
            </div>

            <div className="icon" onClick={() => handleIconClick("message")}>
              <img src={msg} alt="" />
              56
            </div>
          </div>
          <div className="icon-section">
            <div className="icon">
              <img src={view} alt="" />
              270
            </div>
            <div className="icon">
              <img src={send} alt="" />
            </div>
            <div className="icon">
              <img src={save} className="save-icon" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
