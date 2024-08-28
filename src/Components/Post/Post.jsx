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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart } from '../ui/Heart';

import { formatDate } from '@/utils/formatDate';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/Components/ui/carousel';

const Post = ({ key, feed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const inPostPage = location.pathname.includes('/post');

  const handleCommentClick = (postId) => {
    navigate(`/post/${postId}`);
  };

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
        key={feed.id}
        className={cn(
          'post flex w-full gap-3 rounded-2xl bg-bg-secondary px-5 py-6',
          {
            'mb-2 rounded-t-none': inPostPage,
            'mb-5': !inPostPage,
          }
        )}
      >
        <ProfilePhoto img={photo} size={'2.6rem'} />

        <div className="w-full pr-3">
          <div className="flex select-none items-center gap-3">
            <div className="text-xl font-bold text-text-primary">Manu P</div>
            <div className="flex items-center rounded-full pb-2 text-xl text-text-muted"></div>
            <div className="text-[0.9rem] font-bold text-text-muted">
              {formatDate(feed.createdAt)}
            </div>
          </div>
          <div className="text-lg font-normal"> {feed.description}</div>
          <div className="my-4 flex flex-wrap gap-5 text-sm font-semibold text-text-secondary">
            {feed.link && (
              <div className="flex cursor-pointer gap-2 rounded-full bg-bg-muted px-4 py-2">
                <img
                  src={internet}
                  className="w-5"
                  alt="internet link"
                  draggable="false"
                />
                <Link to={feed.link}>{feed.link}</Link>
              </div>
            )}

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

          {feed.fileName && feed.fileName.length > 0 && (
            <div className="mb-3 flex w-full justify-center rounded-2xl">
              <Carousel className="w-11/12 rounded-2xl">
                <CarouselContent>
                  {feed.fileName &&
                    feed.fileName.map((imageUrl, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={`http://localhost:3000/uploads/${imageUrl}`}
                          alt={`post image ${index + 1}`}
                          className="max-h-[500px] rounded-2xl"
                          draggable="false"
                        />
                      </CarouselItem>
                    ))}
                </CarouselContent>

                {feed.fileName.length > 1 && (
                  <>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-16" />
                  </>
                )}
              </Carousel>
            </div>
          )}

          <div className="flex w-11/12 justify-between">
            <div className="flex gap-6">
              <Heart
                className={'h-8 w-8 p-1 hover:bg-red-50'}
                textclr={'text-black'}
                id={feed.id}
                likes={feed.likeCount}
              />

              <div
                className="flex cursor-pointer items-center justify-center gap-1"
                onClick={() => handleCommentClick(feed.id)}
              >
                <div className="rounded-full p-1 hover:bg-red-50">
                  <img
                    src={comment_icon}
                    alt="comment "
                    className="w-6"
                    draggable="false"
                  />
                </div>
                {feed.commentCount}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex cursor-pointer items-center gap-2">
                <div className="rounded-full p-1 hover:bg-red-50">
                  <img
                    src={view}
                    alt="view icon"
                    className="w-6"
                    draggable="false"
                  />
                </div>
                {feed.viewsCount}
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center rounded-full p-1 hover:bg-red-50">
                <img
                  src={send}
                  alt="send message"
                  className="w-7"
                  draggable="false"
                />
              </div>
              <div className="flex cursor-pointer items-center rounded-full p-1 hover:bg-red-50">
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
