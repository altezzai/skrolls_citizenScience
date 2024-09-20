import DetailBox from '../DetailBox/DetailBox';
import SkillBtn from '../SkillBtn/SkillBtn';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

const ProfileDetails = ({ userDetails, userId }) => {
  const [experiences, setExperiences] = useState([]);
  const [Educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [intrests, setIntrests] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await apiClient.get(
          `users/profile/${userId}/experience`,
          {
            params: { userId },
          }
        );
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching educations:', error);
      }
    };

    fetchExperiences();
  }, [userId]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await apiClient.get(
          `users/profile/${userId}/education`,
          {
            params: { userId },
          }
        );
        setEducations(response.data);
      } catch (error) {
        console.error('Error fetching educations:', error);
      }
    };

    fetchEducations();
  }, [userId]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await apiClient.get(`users/profile/${userId}/skill`, {
          params: { userId },
        });
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, [userId]);

  useEffect(() => {
    const fetchIntrests = async () => {
      try {
        const response = await apiClient.get(
          `users/profile/${userId}/interest`,
          {
            params: { userId },
          }
        );
        setIntrests(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchIntrests();
  }, [userId]);

  return (
    <div className="mb-16">
      <DetailBox heading={'Personal Details'}>
        <div className="w-full pt-1">
          <div className="flex w-full items-center justify-between border-b-[1px] border-solid border-border-muted p-2">
            <div className="mb-1 flex w-48 flex-col">
              <div className="pb-1 text-left text-xs font-medium text-text-hard">
                Name
              </div>
              <div className="text-left text-xs font-bold text-text-primary">
                {userDetails.first_name +
                  ' ' +
                  userDetails.middle_name +
                  ' ' +
                  userDetails.last_name}
              </div>
            </div>
            <div className="mb-1 flex w-48 flex-col">
              <div className="pb-1 text-left text-xs font-medium text-text-hard">
                Phone Number
              </div>
              <div className="text-left text-xs font-bold text-text-primary">
                9087654321
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between p-2">
            <div className="mb-1 flex w-48 flex-col">
              <div className="pb-1 text-left text-xs font-medium text-text-hard">
                E-mail
              </div>
              <div className="text-left text-xs font-bold text-text-primary">
                rafaln2001@gmail.com
              </div>
            </div>
            <div className="mb-1 flex w-48 flex-col">
              <div className="pb-1 text-left text-xs font-medium text-text-hard">
                Date of Birth
              </div>
              <div className="text-left text-xs font-bold text-text-primary">
                01/07/2001
              </div>
            </div>
          </div>
        </div>
      </DetailBox>

      {experiences.length > 0 && (
        <DetailBox heading={'Professional Details'}>
          <div className="w-full px-4 pt-2">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-text-hard">
                  <th className="pb-2">Workspace(company/institute)</th>
                  <th className="pb-2">Position</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((experience) => (
                  <tr
                    className="text-left text-xs font-bold text-text-primary border-b-[1px] border-solid border-border-muted p-2 last:border-b-0"
                    key={experience.id}
                  >
                    <td className='py-2'>{experience.workspace}</td>
                    <td className='py-2'>{experience.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DetailBox>
      )}

      {Educations.length > 0 && (
        <DetailBox heading={'Education'}>
          <div className="w-full px-4 pt-2">
            <table className="w-full">
              <thead>
                <tr className="pb-1 text-left text-xs font-medium text-text-hard">
                  <th className="pb-2">No</th>
                  <th className="pb-2">Institution</th>
                  <th className="pb-2">Course</th>
                  <th className="pb-2">Year</th>
                </tr>
              </thead>
              <tbody>
                {Educations.map((education, index) => (
                  <tr
                    className="text-left text-xs font-bold text-text-primary border-b-[1px] border-solid border-border-muted p-2 last:border-b-0"
                    key={education.id}
                  >
                    <td className="py-2">{index + 1}</td>
                    <td>{education.institution}</td>
                    <td>{education.course}</td>
                    <td>{education.startYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DetailBox>
      )}

      {intrests.length > 0 && (
        <DetailBox heading={'Interest'}>
          <div className="flex w-full flex-wrap gap-2 pb-1 pt-4">
            {intrests.map((interest) => (
              <SkillBtn key={interest.Interest.id}>
                {interest.Interest.interest}
              </SkillBtn>
            ))}
          </div>
        </DetailBox>
      )}

      {skills.length > 0 && (
        <DetailBox heading={'Skill'}>
          <div className="flex w-full flex-wrap gap-2 pb-1 pt-4">
            {skills.map((skill) => (
              <SkillBtn key={skill.Skill.id}>{skill.Skill.skill}</SkillBtn>
            ))}
          </div>
        </DetailBox>
      )}
    </div>
  );
};

export default ProfileDetails;
