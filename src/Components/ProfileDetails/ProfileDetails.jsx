import './ProfileDetails.css';
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
    <div className="profile-details">
      <DetailBox heading={'Personal Details'}>
        <div className="personal-details-container">
          <div className="personal-detail-box">
            <div className="per-box">
              <div className="detail-label">Name</div>
              <div className="detail-value">
                {userDetails.first_name +
                  ' ' +
                  userDetails.middle_name +
                  ' ' +
                  userDetails.last_name}
              </div>
            </div>
            <div className="per-box">
              <div className="detail-label">Phone Number</div>
              <div className="detail-value">9087654321</div>
            </div>
          </div>
          <div className="personal-detail-box">
            <div className="per-box">
              <div className="detail-label">E-mail</div>
              <div className="detail-value">rafaln2001@gmail.com</div>
            </div>
            <div className="per-box">
              <div className="detail-label">Date of Birth</div>
              <div className="detail-value">01/07/2001</div>
            </div>
          </div>
        </div>
      </DetailBox>

      {experiences.length > 0 && (
        <DetailBox heading={'Professional Details'}>
          <div className="personal-details-container">
            <table className="edu-table">
              <thead>
                <tr className="detail-label">
                  <th>Workspace(company/institute)</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((experience) => (
                  <tr className="detail-value" key={experience.id}>
                    <td>{experience.workspace}</td>
                    <td>{experience.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DetailBox>
      )}

      {Educations.length > 0 && (
        <DetailBox heading={'Education'}>
          <div className="personal-details-container">
            <table className="edu-table">
              <thead>
                <tr className="detail-label">
                  <th>No</th>
                  <th>Institution</th>
                  <th>Course</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {Educations.map((education, index) => (
                  <tr className="detail-value" key={education.id}>
                    <td>{index + 1}</td>
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
          <div className="interest">
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
          <div className="interest">
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
