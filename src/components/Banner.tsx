// Banner.tsx
import React, { useEffect, useState } from 'react';
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
        <a href="/Daugbjerg_Resume.pdf">
          <Button text="Resume" />
        </a>
        <a href="/Recommendation_for_Daniel.pdf">
          <Button text="Recommendations" />
        </a>
      </div>
    </div>
  );
};

export default Banner;