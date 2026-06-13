import React from 'react';
import './Intro.css';
import WelcomeBg from '../assets/welcomebackground.JPG';

interface IntroProps {
  introTitle: string;
  introSub: string;
  profileImageSrc: string;
}

const Intro: React.FC<IntroProps> = ({ introTitle, introSub, profileImageSrc }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="intro-section" style={{ backgroundImage: `url(${WelcomeBg})` }}>
      <div className="intro-inner">
        <div className="intro-content">
          <span className="intro-eyebrow">Hello, I'm</span>
          <h1 className="intro-name">{introTitle}</h1>
          <p className="intro-tagline">{introSub}</p>
          <div className="intro-ctas">
            <button
              className="intro-btn-primary"
              onClick={() => scrollTo('project-section')}
            >
              View Projects
            </button>
            <button
              className="intro-btn-secondary"
              onClick={() => scrollTo('about-section')}
            >
              About Me
            </button>
          </div>
        </div>
        <div className="intro-photo-wrap">
          <img src={profileImageSrc} alt="Daniel Daugbjerg" className="intro-photo" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
