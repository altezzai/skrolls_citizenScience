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

const Post = ({ id }) => {
  const location = useLocation();
  const inPostPage = location.pathname.includes('/post');

  return (
    <>
      {inPostPage && (
        <Link
          to="/"
          className="flex h-12 select-none items-center gap-2 rounded-t-2xl border-b-2 bg-bg-secondary px-6 text-base font-medium hover:bg-slate-50"
        >
          <img src={back} className="w-4" alt="previous" draggable="false" />
          Back
        </Link>
      )}

      <div
        className={cn(
          'post flex w-full gap-3 rounded-2xl bg-bg-secondary px-5 py-6',
          {
            'mb-2 rounded-t-none': inPostPage,
            'mb-5': !inPostPage,
          }
        )}
      >
        <ProfilePhoto img={photo} size={'2.6rem'} />

        <div className="pr-3">
          <div className="flex select-none items-center gap-3">
            <div className="text-xl font-bold text-text-primary">Manu P</div>
            <div className="flex items-center rounded-full pb-2 text-xl text-text-muted">
              .
            </div>
            <div className="text-[0.9rem] font-bold text-text-muted">
              April 17
            </div>
          </div>
          <div className="text-lg font-normal">
            🚀 Excited to dive into the world of computer science! 💻 Just
            started my journey as a CS student, and I&apos;m already fascinated by
            the endless possibilities of coding. From unraveling algorithms to
            crafting innovative solutions, every day is an adventure! 🌟 Can&apos;t
            wait to see where this path takes me! #CSStudent #CodingAdventure
            #TechJourney 🌐✨:
          </div>
          <div className="my-4 flex flex-wrap gap-5 text-sm font-semibold text-text-secondary">
            <div className="flex cursor-pointer gap-2 rounded-full bg-bg-muted px-4 py-2">
              <img
                src={internet}
                className="w-5"
                alt="internet link"
                draggable="false"
              />
              <Link to="http://altezzai.com">http://rsg.ms/3426e12</Link>
            </div>
            <div className="flex cursor-pointer gap-2 rounded-full bg-bg-muted px-4 py-2">
              <img
                src={translate}
                className="w-5"
                alt="translation"
                draggable="false"
              />
              See Translation
            </div>
          </div>
          <div className="mb-3 w-full rounded-2xl">
            <img
              src={image}
              alt="post"
              className="max-h-[600px] w-11/12 rounded-2xl"
              draggable="false"
            />
          </div>
          <div className="flex w-11/12 justify-between">
            <div className="flex gap-6">
              <Heart
                className={'h-8 w-8 p-1 hover:bg-red-50'}
                textclr={'text-black'}
                id={id}
              />

              <Link
                to="/post"
                className="flex cursor-pointer items-center justify-center gap-1"
              >
                <div className="rounded-full p-1 hover:bg-red-50">
                  <img
                    src={comment_icon}
                    alt="comment "
                    className="w-6"
                    draggable="false"
                  />
                </div>
                56
              </Link>
            </div>
            <div className="flex gap-6">
              <div className="flex cursor-pointer items-center gap-2">
                <img
                  src={view}
                  alt="view icon"
                  className="w-6"
                  draggable="false"
                />
                270
              </div>
              <div className="flex cursor-pointer items-center gap-2">
                <img
                  src={send}
                  alt="send message"
                  className="w-6"
                  draggable="false"
                />
              </div>
              <div className="flex cursor-pointer items-center gap-2">
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
