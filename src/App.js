//import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.tsx';
import Intro from './components/Intro.tsx';
import ProjectDisplay from './components/ProjectDisplay.tsx';
import { FaArrowDown } from 'react-icons/fa';

// Projects
const projects = [
  { title: 'Daily Disc', description: '3D mobile game where the user throws a disc and tries to score in 4 nets in as few throws as possible. New island/level every day through random perlin noise generation. Releasing a beta testing version by the end of the year and releasing the game within the following few months. Contains 100% original assets and coding with Godot.', imageUrl: '/DDIcon.png', overlayText: 'This is the logo of the Daily Disc app. Expect to see it soon in the App store!', git: 'https://github.com/tommycbird/DailyDisc' },
  { title: 'Texas Hold\'em Bot', description: 'Program that generates thousands of data files from simulated Texas Hold\'em games and saves the data into 4 csv files. Each csv file is then transferred to a Pandas dataframe and fitted to their 4 respective perceptron machines that each predict a specific stage of Texas Hold\'em (preflop, flop, turn, river).', imageUrl: '/pokerbot.png', overlayText: 'The Poker Bot recognizes that a pair of jacks is a desirable hand without knowledge of other current hands. As a result, the bot tells the user to continue.', git: 'https://github.com/danieldaug/Texas-Holdem-Bot'},
  { title: 'Most Stones Within Manhattan Distance', description: 'Solution to finding the location on a grid with the most stones placed within a specified distance. Solution reads in a grid containing stone locations and the maximum Manhattan distance to measure stones from. This solution utilizes dynamic programming to build a memoization grid in order to efficiently calculate the amount of stones in a given distance.', imageUrl: '/stonegrid.jpg', overlayText: 'An example of the program\'s input of stone locations on a grid', git: 'https://github.com/danieldaug/StonesWithinManhattanDistance'},
  { title: '2D Videogame Demo', description: 'Basic 2D game including original animated sprites that collide, interact with each other, and take in user input. Built with the Godot Game Engine, coded with GDscript (similar to Python), and tested with Godot Unit Test extension.', imageUrl: '/videogame.png', overlayText: 'The player\'s character (knight) about to battle with npc (alien)', git: 'https://github.com/danieldaug/VideogameDemo' },
  { title: 'Wordle With Tkinter', description: 'Game replicating the popular game, Wordle, with Python and the Python GUI, Tkinter. Contains different settings for games and keyboard.', imageUrl: '/wordleimg.png', overlayText: 'Wordle user interface', git: 'https://github.com/danieldaug/Wordle' },
  { title: 'Single Layer Perceptron', description: 'Single layer perceptron that takes in matrix input and outputs a vector classifying that matrix based on previous training of weights. Comes with example files showing matrices representing letters that the perceptron can then recognize during testing.', imageUrl: '/perceptroninput.png', overlayText: 'Examples of letter inputs in the form of matrices that the perceptron will memorize.', git: 'https://github.com/danieldaug/Perceptron' },
  { title: 'Art Website', description: 'Simple art website for a my personal art brand containing links to socials, an art gallery with a randomly generated layout of art pieces, and a setup for a future online store.', imageUrl: '/CombinedLogo.png', overlayText: '', git: 'https://github.com/danieldaug/BLAM-Website', other: 'https://blamcreative.com'},
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