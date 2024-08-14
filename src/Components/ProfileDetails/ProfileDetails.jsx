import React from 'react';
import './ProfileDetails.css';
import DetailBox from '../DetailBox/DetailBox';
import SkillBtn from '../SkillBtn/SkillBtn';

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <DetailBox heading={'Personal Details'}>
        <div className="personal-details-container">
          <div className="personal-detail-box">
            <div className="per-box">
              <div className="detail-label">Name</div>
              <div className="detail-value">Muhammed Rafsal</div>
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

      <DetailBox heading={'Professional Details'}>
        <div className="personal-details-container">
          <div className="personal-detail-box">
            <div className="per-box">
              <div className="detail-label">Workspace (company/institute)</div>
              <div className="detail-value">InfoTCS</div>
            </div>
            <div className="per-box">
              <div className="detail-label">Position</div>
              <div className="detail-value">Senior Developer</div>
            </div>
          </div>
        </div>
      </DetailBox>

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
              <tr className="detail-value">
                <td>01</td>
                <td>Kannur University</td>
                <td>MSc Computer Science</td>
                <td>2024</td>
              </tr>
              <tr className="detail-value">
                <td>02</td>
                <td>IHRD Pinarayi</td>
                <td>BSc Computer Science</td>
                <td>2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DetailBox>

      <DetailBox heading={'Interest'}>
        <div className="interest">
          <SkillBtn> Machine Learning</SkillBtn>
          <SkillBtn> Artificial Intelligence</SkillBtn>
          <SkillBtn> Designing</SkillBtn>
        </div>
      </DetailBox>

      <DetailBox heading={'Skill'}>
        <div className="interest">
          <SkillBtn> Artificial Intelligence</SkillBtn>
          <SkillBtn> Designing</SkillBtn>
          <SkillBtn> Designing</SkillBtn>
        </div>
      </DetailBox>
    </div>
  );
};

export default ProfileDetails;
