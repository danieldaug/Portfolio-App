//import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.tsx';
import Intro from './components/Intro.tsx';
import { FaArrowDown } from 'react-icons/fa';

// Functional Component for Footer
const Footer = () => (
  <footer>
    <p>&copy; 2024 Daugbjerg Portfolio All Rights Reserved.</p>
  </footer>
);

// Main App Component
function App() {
  const handleClick = () => {
    if (document.getElementById('project-section')){
      document.getElementById('project-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Banner />
      <main>
        <div id="intro">
          <Intro
            introTitle="Hello! I'm Daniel Daugbjerg."
            introSub="Welcome to my Computer Science Portfolio."
            profileImageSrc="/profile.png" // Update with actual image path
          />
        </div>
        <div id="about-section">
          <h1>About</h1>
          <div className="about-content">
            <div>
              <p>I am a student majoring in computer science at the University of
              San Diego in the graduating class of 2025. I am originally from Marin
              County in the Bay Area.
              </p>
              <p>
              My strongest programming languages are Java, Python, and C++. I am
              also experienced in frontend/web development with frameworks like React, which was used to
              create this portfolio. I have always had a great interest in
              creative thinking and problem-solving, making computer science
              a significant part, not only in my academics, but
              in my personal life and hobbies as well, which is showcased in my
              projects. 
              </p>
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
              <button className="about-button" onClick={ handleClick }>
                <FaArrowDown size={40} />
              </button>
            </div>
            <div className="about-image">
              <img src={"/about.JPG"} alt="About" />
            </div>
          </div>
        </div>
        <div id="project-section">
        <h1>Projects</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;