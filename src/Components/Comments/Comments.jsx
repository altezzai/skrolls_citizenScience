import React, { useRef, useState } from "react";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";

import photo from "../../assets/profile.png";
import more from "../../assets/vertical_dots.svg";
import love from "../../assets/love_gray.svg";
import reply_icon from "../../assets/reply.svg";
import send from "../../assets/send_white.svg";
import { Heart } from "../ui/Heart";

export const Comments = () => {
  const [reply, setReply] = useState(false);
  const inputRef = useRef(null);

  //reply to comments open and close toggle
  const handleReply = () => {
    setReply(!reply);
    // Use setTimeout to ensure the input is rendered before focusing
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  return (
    <>
      <div
        className={`bg-bg-secondary flex mb-2 px-5 py-3 gap-2 rounded-xl ${
          reply && "mb-0 rounded-b-none"
        }`}
      >
        <ProfilePhoto img={photo} size={"2rem"} />

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className=" font-medium text-lg">rafsal</div>
              <div className=" font-normal text-base text-text-muted select-none">
                5h ago
              </div>
            </div>
            <img
              src={more}
              className="w-5 select-none"
              alt="more"
              draggable="false"
            />
          </div>

          <div className="py-4 text-base font-normal">
            Okay thats all information I need to know
          </div>

          <div className="flex justify-between items-center text-text-secondary text-sm select-none">
            <div className="flex gap-8 items-center">
              <Heart className={"w-5 h-5"} textclr={"text-text-secondary"} />
              <img
                src={reply_icon}
                className="w-5 cursor-pointer"
                alt="reply"
                draggable="false"
                onClick={() => {
                  handleReply();
                }}
              />
            </div>
            6 reply
          </div>
        </div>
      </div>

      {reply && (
        <div className="flex bg-textarea w-full pl-10 flex-col mb-2 rounded-b-xl">
          <div className="flex bg-textarea w-full px-5 py-3 gap-2 border-l-2">
            <ProfilePhoto img={photo} size={"2rem"} />

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className=" font-medium text-lg">rafsal</div>
                  <div className=" font-normal text-base text-text-muted select-none">
                    5h ago
                  </div>
                </div>
                <img
                  src={more}
                  className="w-5 select-none"
                  alt="more"
                  draggable="false"
                />
              </div>

              <div className="py-4 text-base font-normal">
                Okay thats all information I need to know
              </div>

              <div className="flex justify-between items-center text-text-secondary text-sm select-none">
                <div className="flex gap-8 items-center">
                  <Heart
                    className={"w-5 h-5"}
                    textclr={"text-text-secondary"}
                  />

                  <img
                    src={reply_icon}
                    className="w-5"
                    alt="reply"
                    draggable="false"
                  />
                </div>
                {/* 6 reply */}
              </div>
            </div>
          </div>

          <div className="flex bg-textarea w-full px-5 py-3 gap-2 border-l-2">
            <ProfilePhoto img={photo} size={"2rem"} />

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className=" font-medium text-lg">rafsal</div>
                  <div className=" font-normal text-base text-text-muted select-none">
                    5h ago
                  </div>
                </div>
                <img
                  src={more}
                  className="w-5 select-none"
                  alt="more"
                  draggable="false"
                />
              </div>

              <div className="py-4 text-base font-normal">
                Okay thats all information I need to know
              </div>

              <div className="flex justify-between items-center text-text-secondary text-sm select-none">
                <div className="flex gap-8 items-center">
                  <Heart
                    className={"w-5 h-5"}
                    textclr={"text-text-secondary"}
                  />
                  <img
                    src={reply_icon}
                    className="w-5"
                    alt="reply"
                    draggable="false"
                  />
                </div>
                {/* 6 reply */}
              </div>
            </div>
          </div>

          <div className="flex w-full gap-5 items-center mb-2 -ml-4">
            <ProfilePhoto img={photo} size={"2rem"} />
            <div className="flex bg-bg-secondary p-2 w-full rounded-lg">
              <input
                type="text"
                className="w-full pl-3 outline-none placeholder:"
                placeholder="Enter your reply"
                ref={inputRef}
              />
              <div className=" flex items-center py-1 px-4 rounded-md bg-primary select-none">
                <img
                  src={send}
                  className="w-6"
                  alt="send button"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
