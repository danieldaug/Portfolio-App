// Banner.tsx
import React from 'react';
import Button from './Button.tsx';
import IconDropdown from './IconDropdown.tsx';
import './Banner.css';

const menuItems = [
  { name: 'Home', link: 'home-section'},
  { name: 'About', link: 'about-section'},
  { name: 'Projects', link: 'projects-section'},
]

const Banner: React.FC = () => (
  <div className="banner">
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

export default Banner;