import React from 'react';
import './ProjectDisplay.css'; // CSS for styling
import { FaGithub, FaLink } from 'react-icons/fa';
import Divider from './Divider.tsx';

interface Item {
  title: string;
  description: string;
  imageUrl: string;
  git: string;
  other?: string;
}

interface ProjectDisplayProps {
  items: Item[];
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ items }) => {
  return (
    <div className="stack-container">
      {items.map((item, index) => (
        <div>
        <div key={index} className="stack-item">
          <div className="stack-title">
            <h2>{item.title}</h2>
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
            <a href={item.git}>
                <button className="git-button">
                    <FaGithub size={30} />
                </button>
            </a>
            { item.other && <a href={item.other}>
                <button className="git-button">
                    <FaLink size={30} />
                </button>
            </a>}
          </div>
          <div className="stack-description">
            <p>{item.description}</p>
          </div>
          <div className="stack-image">
            <img className="proj-img" src={item.imageUrl} alt={item.title} />
          </div>
        </div>
        <Divider color="#19057e" thickness='5px' />
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;

