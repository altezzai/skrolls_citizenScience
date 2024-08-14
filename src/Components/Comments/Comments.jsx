import React, { useRef, useState } from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import photo from '../../assets/profile.png';
import more from '../../assets/vertical_dots.svg';
import reply_icon from '../../assets/reply.svg';
import send from '../../assets/send_white.svg';
import { Heart } from '../ui/Heart';

export const Comments = () => {
  const [reply, setReply] = useState(false);
  const inputRef = useRef(null);

  const handleReply = () => {
    setReply(!reply);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  return (
    <>
      <div
        className={`bg-bg-secondary flex  px-5 py-3 gap-2 rounded-xl ${
          reply ? "mb-0 rounded-b-none" : "mb-2"
        }`}
      >
        <ProfilePhoto img={photo} size={'2rem'} />

        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="text-lg font-medium">rafsal</div>
              <div className="select-none text-base font-normal text-text-muted">
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
              <Heart className={"w-5 h-5"} textclr={"text-text-secondary"} disableClick={true}/>
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
            <div
              className="cursor-pointer"
              onClick={() => {
                handleReply();
              }}
            >
              6 reply
            </div>
          </div>
        </div>
      </div>

      {reply && (
        <div className="mb-2 flex w-full flex-col rounded-b-xl bg-textarea pl-10">
          <div className="flex w-full gap-2 border-l-2 bg-textarea px-5 py-3">
            <ProfilePhoto img={photo} size={'2rem'} />

            <div className="flex w-full flex-col">
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className="text-lg font-medium">rafsal</div>
                  <div className="select-none text-base font-normal text-text-muted">
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

              <div className="py-3 text-base font-normal">
                Okay thats all information I need to know
              </div>

              <div className="flex select-none items-center justify-between text-sm text-text-secondary">
                <div className="flex items-center gap-8">
                  <Heart
                    className={"w-5 h-5"}
                    textclr={"text-text-secondary"}
                    disableClick={true}
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

          <div className="flex w-full gap-2 border-l-2 bg-textarea px-5 py-3">
            <ProfilePhoto img={photo} size={'2rem'} />

            <div className="flex w-full flex-col">
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <div className="text-lg font-medium">rafsal</div>
                  <div className="select-none text-base font-normal text-text-muted">
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

              <div className="py-3 text-base font-normal">
                Okay thats all information I need to know
              </div>

              <div className="flex select-none items-center justify-between text-sm text-text-secondary">
                <div className="flex items-center gap-8">
                  <Heart
                    className={"w-5 h-5"}
                    textclr={"text-text-secondary"}
                    disableClick={true}
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

          <div className="-ml-4 mb-2 flex w-full items-center gap-5">
            <ProfilePhoto img={photo} size={'2rem'} />
            <div className="flex w-full rounded-lg bg-bg-secondary p-2">
              <input
                type="text"
                className="placeholder: w-full pl-3 outline-none"
                placeholder="Enter your reply"
                ref={inputRef}
              />
              <div className=" flex items-center py-1 px-4 rounded-md bg-primary select-none hover:bg-red-500 cursor-pointer transition-all duration-100">
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
