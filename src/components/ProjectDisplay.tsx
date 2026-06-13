import React from 'react';
import './ProjectDisplay.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Item {
  title: string;
  description: string;
  imageUrl: string;
  overlayText: string;
  git: string;
  other?: string;
}

interface ProjectDisplayProps {
  items: Item[];
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ items }) => {
  return (
    <div className="projects-grid">
      {items.map((item, index) => (
        <article key={index} className="project-card">
          <div className="project-img-wrap">
            <img src={item.imageUrl} alt={item.title} className="project-img" />
            {item.overlayText && (
              <div className="project-overlay">
                <p>{item.overlayText}</p>
              </div>
            )}
          </div>
          <div className="project-body">
            <h3 className="project-title">{item.title}</h3>
            <p className="project-desc">{item.description}</p>
            <div className="project-links">
              <a
                href={item.git}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
              {item.other && (
                <a
                  href={item.other}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt size={12} />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectDisplay;
