import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import IconDropdown from './IconDropdown.tsx';
import './Banner.css';

const navItems = [
  { name: 'Home', id: 'intro' },
  { name: 'About', id: 'about-section' },
  { name: 'Projects', id: 'project-section' },
];

interface BannerProps {
  activeTab: 'programming' | 'manga';
  onTabChange: (tab: 'programming' | 'manga') => void;
}

const Banner: React.FC<BannerProps> = ({ activeTab, onTabChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`banner ${scrolled ? 'scrolled' : ''}`}>
      <div className="banner-inner">

        <button className="banner-logo" onClick={() => scrollTo('intro')}>
          DD
        </button>

        {/* Centered on desktop via position:absolute, inline on mobile */}
        <div className="banner-toggle-group">
          <span className="banner-toggle-label">Project Toggle</span>
          <div className="banner-tabs">
            <button
              className={`banner-tab ${activeTab === 'programming' ? 'active' : ''}`}
              onClick={() => onTabChange('programming')}
            >
              Code
            </button>
            <button
              className={`banner-tab ${activeTab === 'manga' ? 'active' : ''}`}
              onClick={() => onTabChange('manga')}
            >
              Manga
            </button>
          </div>
        </div>

        <div className="banner-nav">
          {navItems.map(item => (
            <button key={item.id} className="banner-nav-link" onClick={() => scrollTo(item.id)}>
              {item.name}
            </button>
          ))}
        </div>

        <div className="banner-actions">
          <a
            href="https://github.com/danieldaug"
            target="_blank"
            rel="noopener noreferrer"
            className="banner-icon-link"
          >
            <FaGithub size={19} />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/Daugbjerg_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-resume-btn"
          >
            Resume
          </a>
        </div>

        <div className="banner-mobile-menu">
          <IconDropdown navItems={navItems} />
        </div>

      </div>
    </nav>
  );
};

export default Banner;
