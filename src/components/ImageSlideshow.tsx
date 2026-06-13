import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css';

interface SlideshowProps {
  images: string[];
}

const ImageSlideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`slideshow-img ${i === current ? 'active' : ''}`}
        />
      ))}
      <div className="slideshow-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`slideshow-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
