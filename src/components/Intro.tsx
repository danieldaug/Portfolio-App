// components/Intro.tsx
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './Intro.css';

interface IntroProps {
  introTitle: string;
  introSub: string;
  profileImageSrc: string;
}

const Intro: React.FC<IntroProps> = ({ introTitle, introSub, profileImageSrc }) => {
  const handleClick = () => {
    if (document.getElementById('about-section')){
      document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="intro-container"></div>
      <div className="overlay-content">
        <div className="intro-text">
          <h1>{introTitle}</h1>
          <p>{introSub}</p>
          <button className="intro-button" onClick={ handleClick }>
            <FaArrowDown size={50} />
          </button>
        </div>
        <div className="profile-image">
          <img src={profileImageSrc} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
