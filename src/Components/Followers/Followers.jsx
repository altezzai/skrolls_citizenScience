import './Followers.css';
import UserFollowListItem from '../UserFollowListItem/UserFollowListItem';

export const Followers = ({
  title,
  unfollowbtnflag = false,
  followbtnflag = false,
  countflag = false,
}) => {
  return (
    <div className="followersBox">
      <div className="titlespace">
        <span>{title}</span>
        {countflag ? <div className="countcircle">12</div> : undefined}
      </div>

      {/* <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic"></img>
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          <FollowButton follow={true} />
        </div>
      </div> */}
      <UserFollowListItem
        user={{ name: 'Manuprasad', username: 'manu' }}
        btnClassName={'w-fit'}
      />
      <div className="viewmore">
        <a href="">View more</a>
      </div>
    </div>
  );
};
