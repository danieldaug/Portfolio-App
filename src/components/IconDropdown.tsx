import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './IconDropdown.css';

interface NavItem {
  name: string;
  id: string;
}

interface IconDropdownProps {
  navItems: NavItem[];
}

const IconDropdown: React.FC<IconDropdownProps> = ({ navItems }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="mobile-menu" ref={ref}>
      <button
        className="mobile-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {open && (
        <div className="mobile-dropdown">
          {navItems.map(item => (
            <button key={item.id} className="mobile-item" onClick={() => scrollTo(item.id)}>
              {item.name}
            </button>
          ))}
          <div className="mobile-divider" />
          <a
            href="https://github.com/danieldaug"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-item"
          >
            GitHub
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/Daugbjerg_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-item"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default IconDropdown;
