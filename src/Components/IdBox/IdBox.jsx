import React from 'react';
import './IdBox.css';
import internet from '../../assets/internet.svg';

export const IdBox = () => {
  return (
    <div className="idBox">
      <div className="other">
        <span>Other id's</span>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
    </div>
  );
};
