// components/IconDropdown.tsx
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import './IconDropdown.css';

interface MenuItem {
  name: string;
  link: string; // The ID of the section or URL you want to scroll to
}

interface IconDropdownProps {
  menuItems: MenuItem[];
}

const IconDropdown: React.FC<IconDropdownProps> = ({ menuItems }) => {
  const [iconSize, setIconSize] = useState(50); // Default size

  useEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      if ((window.innerWidth < 800)){
        setIconSize(15);
      } else if (window.innerWidth < 1200) {
        setIconSize(25); // Smaller size for mobile devices
      } else {
        setIconSize(35); // Larger size for larger screens
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (link: string) => {
    if (link.startsWith('/')) {
      // If it's an external link, use window.location to navigate
      window.location.href = link;
    } else {
      // Otherwise, scroll to the section
      document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the dropdown after selecting a location
  };

  return (
    <div className="icon-button-container">
      <svg width="0" height="0">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'var(--primary-color)', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="hover-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'var(--primary-color)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
      <button className="icon-button" onClick={toggleDropdown}>
        <FaBars size={iconSize} />
      </button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="dropdown-item" onClick={() => handleClick(item.link)}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconDropdown;

