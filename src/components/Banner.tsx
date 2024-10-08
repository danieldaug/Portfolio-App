// Banner.tsx
import React, { useEffect, useState, useLayoutEffect } from 'react';
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

  const [buttonSize, setButtonSize] = useState<'small' | 'medium' | 'large'>('large');
  const [iconSize, setIconSize] = useState<15 | 20 | 23>(23);

  useLayoutEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      if ((window.innerWidth < 800)){
        setButtonSize('small');
        setIconSize(15);
      } else if (window.innerWidth < 1200) {
        setButtonSize('medium'); // Smaller size for mobile devices
        setIconSize(20);
      } else {
        setButtonSize('large'); // Larger size for larger screens
        setIconSize(23);
      }
    };

    // Set initial size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`banner ${isScrolled ? 'scrolled' : ''}`}>
      <IconDropdown menuItems={menuItems}></IconDropdown>
      <div id="rightbanner">
      <a href="https://github.com/danieldaug">
        <button className="git-button">
            <FaGithub size={iconSize} />
        </button>
        </a>
        <a href={`${process.env.PUBLIC_URL}/Daugbjerg_Resume.pdf`} target="_blank" rel="noopener noreferrer">
          <Button text="Resume" size={buttonSize}/>
        </a>
        <a href={`${process.env.PUBLIC_URL}/Recommendation_for_Daniel.pdf`} target="_blank" rel="noopener noreferrer">
          <Button text="Recommendations" size={buttonSize}/>
        </a>
      </div>
    </div>
  );
};

export default Banner;