import React from 'react';
import './ProjectDisplay.css'; // CSS for styling

interface Item {
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectDisplayProps {
  items: Item[];
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ items }) => {
  return (
    <div className="stack-container">
      {items.map((item, index) => (
        <div key={index} className="stack-item">
          <div className="stack-title">
            <h2>{item.title}</h2>
          </div>
          <div className="stack-description">
            <p>{item.description}</p>
          </div>
          <div className="stack-image">
            <img className="proj-img" src={item.imageUrl} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;

