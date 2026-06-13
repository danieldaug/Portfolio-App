import React from 'react';
import './MangaDisplay.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import DoubleSpreadImg from '../assets/doublespread.png';
import LoneJungleImg from '../assets/lonejungle.png';
import ResidualImg from '../assets/residual.png';

const MangaDisplay: React.FC = () => {
  return (
    <div className="manga-display">

      {/* ── Centered hero spread ── */}
      <div className="manga-spread-wrap">
        <img src={DoubleSpreadImg} alt="Double spread" className="manga-spread-img" />
        <div className="manga-spread-overlay">
          <p>Double spread for upcoming short-story.</p>
        </div>
      </div>

      {/* ── Side images + center text ── */}
      <div className="manga-row">
        <div className="manga-side-wrap">
          <img src={LoneJungleImg} alt="Lone Jungle" className="manga-side-img" />
          <span className="manga-side-label">Lone Jungle</span>
        </div>

        <div className="manga-center">
          <h3 className="manga-center-title">Publicly Posted Works</h3>
          <p className="manga-center-body">
            My two first projects ever, created within the past 9 months. Residual, my first
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

        <div className="manga-side-wrap">
          <img src={ResidualImg} alt="Residual" className="manga-side-img" />
          <span className="manga-side-label">Residual</span>
        </div>
      </div>

    </div>
  );
};

export default MangaDisplay;
