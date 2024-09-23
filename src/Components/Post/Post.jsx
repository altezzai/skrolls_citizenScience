import { cn } from '../../utils/utils';

import photo from '../../assets/profile.png';
import comment_icon from '../../assets/comments.svg';
import view from '../../assets/view.svg';
import send from '../../assets/send.svg';
import back from '../../assets/previous.svg';
import internet from '../../assets/internet.svg';
import translate from '../../assets/translate.svg';

import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart } from '../ui/Heart';
import { Saved } from '../ui/Saved';

import { formatDate } from '@/utils/formatDate';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/Components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { SharePost } from './SharePost';
import { Description } from '@radix-ui/react-dialog';

const Post = ({ feed, userId = 1 }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const inPostPage = location.pathname.includes('/post');

  const handleCommentClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleUserProfile = (targetUserId) => {
    if (userId === targetUserId) {
      navigate('/profile');
    } else {
      navigate(`/userprofile/${targetUserId}`);
    }
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
          'post flex w-full gap-3 rounded-2xl bg-bg-secondary px-5 py-6 max-md:rounded-lg max-md:p-2',
          {
            'mb-2 rounded-t-none': inPostPage,
            'mb-5 max-md:mb-2': !inPostPage,
          }
        )}
      >
        <div
          onClick={() => handleUserProfile(feed.userId)}
          className="cursor-pointer"
        >
          <ProfilePhoto img={feed.User?.profilePhoto} className={'h-10 w-10'} />
        </div>
        <div className="w-full pr-3">
          <div className="flex select-none items-center gap-3">
            <div className="text-xl font-bold text-text-primary max-lg:text-lg max-md:text-base">
              {feed.username}
            </div>
            <div className="h-1 w-1 rounded-full bg-text-muted"></div>
            <div className="text-[0.9rem] font-bold text-text-muted">
              {formatDate(feed.createdAt)}
            </div>
          </div>
          <Link to={`/post/${feed.id}`} className="text-lg font-normal">
            {feed.description}
          </Link>
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
            <div className="mb-3 flex w-full select-none justify-center rounded-2xl">
              <Carousel className="w-11/12 rounded-2xl">
                <CarouselContent className="w-full">
                  {feed.fileName &&
                    feed.fileName.map((imageUrl, index) => (
                      <CarouselItem
                        key={index}
                        className="flex max-h-[400px] w-full justify-center"
                      >
                        <img
                          src={`http://localhost:3000/uploads/${encodeURIComponent(imageUrl)}`}
                          alt={`post image ${index + 1}`}
                          className="max-h-[400px] rounded-2xl object-cover"
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
                userId={1}
                feedId={feed.id}
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
                    className="w-6 select-none"
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
                    className="w-6 select-none"
                    draggable="false"
                  />
                </div>
                {feed.viewsCount}
              </div>

              <Dialog>
                <DialogTrigger>
                  <div className="flex h-8 w-8 cursor-pointer select-none items-center rounded-full p-1 hover:bg-red-50">
                    <img
                      src={send}
                      alt="send message"
                      className="w-7"
                      draggable="false"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="flex h-fit w-fit">
                  <DialogHeader className="hidden">
                    <DialogTitle>Share</DialogTitle>
                  </DialogHeader>
                  <Description className="hidden">hi </Description>
                  <SharePost />
                </DialogContent>
              </Dialog>

              <Saved feedId={feed.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
