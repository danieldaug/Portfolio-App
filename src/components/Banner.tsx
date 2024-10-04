// Banner.tsx
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Button from './Button.tsx';
import IconDropdown from './IconDropdown.tsx';
import './Banner.css';

const menuItems = [
  { name: 'Home', link: '#intro'},
  { name: 'About', link: '#about-section'},
  { name: 'Projects', link: '#project-section'},
]

const Banner: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // True if the user has scrolled down
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`banner ${isScrolled ? 'scrolled' : ''}`}>
      <IconDropdown menuItems={menuItems}></IconDropdown>
      <div id="rightbanner">
      <a href="https://github.com/danieldaug">
        <button className="git-button">
            <FaGithub size={23} />
        </button>
        </a>
        <a href={`${process.env.PUBLIC_URL}/Daugbjerg_Resume.pdf`} target="_blank" rel="noopener noreferrer">
          <Button text="Resume" />
        </a>
        <a href={`${process.env.PUBLIC_URL}/Recommendation_for_Daniel.pdf`} target="_blank" rel="noopener noreferrer">
          <Button text="Recommendations" />
        </a>
      </div>
    </div>
  );
};

export default Banner;