// components/ImageSlideshow.tsx
import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css';

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
            borderRadius: '20px'
          }}
        ></div>
      ))}
    </div>
  );
};

export default ImageSlideshow;
