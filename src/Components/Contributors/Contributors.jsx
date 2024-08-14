import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import profile from '../../assets/profile.png';
import { Photogroup } from '../Photogroup/Photogroup';
import { PhotowithName } from '../PhotowithName/PhotowithName';
import Dot from '../ui/Dot';

export const Contributors = () => {
  const ContributorsList = [
    'Anurag T K',
    'Ishaque',
    'Aswin K',
    'Farhathulla',
    'Rafsal',
    'Akshay Bose',
  ];

  const renderContributor = (name, index) => (
    <>
      {index > 0 && <Dot />}
      <PhotowithName profile={profile} name={name} />
    </>
  );

  const renderOthers = (count) => (
    <>
      <Dot />
      <Photogroup images={[profile, profile, profile]} />
      <span className="uname">+ {count} Others</span>
    </>
  );

  const displayContributors = () => {
    const count = ContributorsList.length;
    const visibleCount = Math.min(count, count === 4 ? 4 : 3);

    return (
      <>
        {ContributorsList.slice(0, visibleCount).map(renderContributor)}
        {count > 4 && renderOthers(count - 3)}
      </>
    );
  };

  return <div className="flex items-center">{displayContributors()}</div>;
};
