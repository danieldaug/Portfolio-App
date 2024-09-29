//import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.tsx';
import Intro from './components/Intro.tsx';
import ProjectDisplay from './components/ProjectDisplay.tsx';
import BlamLogo from './assets/CombinedLogo.png';
import PerceptronImg from './assets/perceptroninput.png';
import StoneGridImg from './assets/stonegrid.jpg';
import PlatformerImg from './assets/videogame.png';
import WordleImg from './assets/wordleimg.png';
import { FaArrowDown } from 'react-icons/fa';

// Projects
const projects = [
  { title: 'Daily Disc', description: '3D mobile game where the user throws a disc and tries to score in 4 nets in as few throws as possible. New island/level every day through random perlin noise generation. Releasing a beta testing version by the end of the year and releasing the game within the following few months. Contains 100% original assets and coding with Godot.', imageUrl: '/DDIcon.png', git: 'https://github.com/tommycbird/DailyDisc' },
  { title: 'Texas Hold\'em Bot', description: 'Program that generates thousands of data files from simulated Texas Hold\'em games and saves the data into 4 csv files. Each csv file is then transferred to a Pandas dataframe and fitted to their 4 respective perceptron machines that each predict a specific stage of Texas Hold\'em (preflop, flop, turn, river).', imageUrl: '/pokerbot.png', git: 'https://github.com/danieldaug/Texas-Holdem-Bot'},
];

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
              <p>I am a student majoring in computer science with a concentration in Artificial Intelligence/Data Science at the University of
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
        <ProjectDisplay items={projects} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;