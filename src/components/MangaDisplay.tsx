import React, { useState, useRef } from 'react';
import './MangaDisplay.css';
import { FaExternalLinkAlt, FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DoubleSpreadImg from '../assets/doublespread.png';
import LoneJungleImg from '../assets/lonejungle.png';
import ResidualImg from '../assets/residual.png';
import SecondStringImg from '../assets/2ndString.png';
import ResidualPageImg from '../assets/residual_page.png';
import LoneJunglePageImg from '../assets/lone_jungle_page.png';
import BlamPfp from '../assets/blampfp.jpeg';

const slides = [
  { src: DoubleSpreadImg, alt: 'Double spread for upcoming short-story' },
  { src: ResidualPageImg, alt: 'Page from Residual' },
  { src: LoneJunglePageImg, alt: 'Page from Lone Jungle' },
];

const MangaDisplay: React.FC = () => {
  const [slide, setSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setSlide(i => (i - 1 + slides.length) % slides.length);
  const next = () => setSlide(i => (i + 1) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <div className="manga-display">

      {/* ── Publicly Posted Works ── */}
      <div className="manga-center">
        <h3 className="manga-center-title">Publicly Posted Works</h3>
        <p className="manga-center-body">
          My first 3 projects ever, created within the past year. Residual, my first
          ever work, was submitted to the 2026 Kadokawa World Manga Contest and finished as
          a finalist.
        </p>
        <a
          href="https://mangaplus-creators.jp/authors/27412352"
          target="_blank"
          rel="noopener noreferrer"
          className="manga-center-link"
        >
          <FaExternalLinkAlt size={12} />
          <span>View published works</span>
        </a>
      </div>

      {/* ── Three covers ── */}
      <div className="manga-covers-row">
        <a
          href="https://mangaplus-creators.jp/episodes/my2606020638450027412352"
          target="_blank"
          rel="noopener noreferrer"
          className="manga-side-wrap"
        >
          <img src={LoneJungleImg} alt="Lone Jungle" className="manga-side-img" />
          <span className="manga-side-label">Lone Jungle</span>
        </a>

        <a
          href="https://mangaplus-creators.jp/episodes/xj2609071059240027412352"
          target="_blank"
          rel="noopener noreferrer"
          className="manga-side-wrap"
        >
          <img src={SecondStringImg} alt="2nd String" className="manga-side-img" />
          <span className="manga-side-label">2nd String</span>
        </a>

        <a
          href="https://mangaplus-creators.jp/episodes/k52606100916070027412352"
          target="_blank"
          rel="noopener noreferrer"
          className="manga-side-wrap"
        >
          <img src={ResidualImg} alt="Residual" className="manga-side-img" />
          <span className="manga-side-label">Residual</span>
        </a>
      </div>

      {/* ── Image slideshow ── */}
      <div className="manga-slideshow">
        <div
          className="manga-slide-wrap"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="manga-slide-btn manga-slide-prev" onClick={prev} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <div className="manga-slide-track">
            <img src={slides[slide].src} alt={slides[slide].alt} className="manga-slide-img" />
          </div>
          <button className="manga-slide-btn manga-slide-next" onClick={next} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
        <div className="manga-slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`manga-slide-dot${i === slide ? ' active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Instagram section ── */}
      <a
        href="https://www.instagram.com/blam.jpeg"
        target="_blank"
        rel="noopener noreferrer"
        className="manga-insta"
      >
        <img src={BlamPfp} alt="blam.jpeg Instagram" className="manga-insta-pfp" />
        <div className="manga-insta-text">
          <div className="manga-insta-handle">
            <FaInstagram size={16} />
            <span>@blam.jpeg</span>
          </div>
          <p className="manga-insta-desc">
            Main source of posting work and progress directly through social media.
          </p>
        </div>
        <FaExternalLinkAlt size={13} className="manga-insta-arrow" />
      </a>

    </div>
  );
};

export default MangaDisplay;
