import { useState } from 'react';
import './App.css';
import Banner from './components/Banner.tsx';
import Intro from './components/Intro.tsx';
import ProjectDisplay from './components/ProjectDisplay.tsx';
import ImageSlideshow from './components/ImageSlideshow.tsx';
import MangaDisplay from './components/MangaDisplay.tsx';
import ProfileImg from './assets/profile.JPG';
import FamilyImg from './assets/family.JPG';
import FriendsImg from './assets/friends.jpg';
import SkiImg from './assets/skiing.png';
import DDIcon from './assets/DDIcon.png';
import PokerbotImg from './assets/pokerbot.png';
import StoneGridImg from './assets/stonegrid.jpg';
import BirdBurgerLogo from './assets/birdburgerlogo.png';
import WordleImg from './assets/wordleimg.png';
import PerceptronImg from './assets/perceptroninput.png';
import BlamLogo from './assets/CombinedLogo.png';

const aboutImages = [FamilyImg, FriendsImg, SkiImg];

const skills = ['Java', 'Python', 'C++', 'React', 'Machine Learning', 'Godot', 'Data Science'];

const projects = [
  {
    title: 'BirdBurger Games',
    description: 'An Indie Game Development Studio LLC founded and run by myself and a fellow programmer. I am the co-founder, co-developer, and sole artist.',
    imageUrl: BirdBurgerLogo,
    overlayText: 'Company Logo',
    git: 'https://github.com/BirdBurger',
    other: 'https://birdburger.com',
  },
  {
    title: 'Daily Disc',
    description: '3D mobile game where the player throws a disc and tries to score in 4 nets in as few throws as possible. A new island is generated each day via Perlin noise. Live on the iOS App Store with 100% original assets, built entirely with Godot.',
    imageUrl: DDIcon,
    overlayText: 'The Daily Disc logo — download for free on the App Store.',
    git: 'https://github.com/tommycbird/DailyDisc',
    other: 'https://birdburger.com/dailydisc/',
  },
  {
    title: "Texas Hold'em Bot",
    description: "Simulates thousands of Texas Hold'em games to generate training data across 4 CSV files. Each file trains a separate perceptron that predicts optimal play at a specific stage — preflop, flop, turn, and river — using Pandas and Python.",
    imageUrl: PokerbotImg,
    overlayText: 'The bot identifies a pair of jacks as a strong hand and advises the player to continue.',
    git: 'https://github.com/danieldaug/Texas-Holdem-Bot',
  },
  {
    title: 'Most Stones Within Manhattan Distance',
    description: 'Finds the grid location with the highest number of stones within a given Manhattan distance. Uses dynamic programming to build a memoization grid for efficient computation.',
    imageUrl: StoneGridImg,
    overlayText: 'Example program input showing stone positions on a grid.',
    git: 'https://github.com/danieldaug/StonesWithinManhattanDistance',
  },
  {
    title: 'Wordle With Tkinter',
    description: 'Python recreation of Wordle using the Tkinter GUI library, with support for multiple game modes and keyboard layout settings.',
    imageUrl: WordleImg,
    overlayText: 'Wordle user interface built with Tkinter.',
    git: 'https://github.com/danieldaug/Wordle',
  },
  {
    title: 'Single Layer Perceptron',
    description: 'A perceptron that accepts matrix input and classifies it based on learned weight vectors. Includes example letter matrices the model recognizes after training.',
    imageUrl: PerceptronImg,
    overlayText: 'Letter input matrices the perceptron memorizes during training.',
    git: 'https://github.com/danieldaug/Perceptron',
  },
  {
    title: 'Art Website',
    description: 'Website for a personal art brand featuring social links, a randomly generated gallery layout of art pieces, and groundwork for a future online store.',
    imageUrl: BlamLogo,
    overlayText: '',
    git: 'https://github.com/danieldaug/BLAM-Website',
    other: 'https://blamcreative.com',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('programming');

  return (
    <div className="app">
      <Banner activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <div id="intro">
          <Intro
            introTitle="Daniel Daugbjerg."
            introSub="CS Graduate · AI & Data Science · Software Developer · Artist & Writer"
            profileImageSrc={ProfileImg}
          />
        </div>

        <section id="about-section">
          <div className="section-inner">
            <span className="section-label">About</span>
            <h2 className="section-title">Who I Am</h2>
            <div className="about-grid">
              <div className="about-text">
                {activeTab === 'programming' ? (
                  <>
                    <p>
                      I'm a computer science graduate from the University of San Diego, where I
                      concentrated in Artificial Intelligence and Data Science. I'm originally from
                      Marin County in the Bay Area, California.
                    </p>
                    <p>
                      I build software across the full stack — from mobile games to machine learning
                      systems. My core languages are Java, Python, and C++, and I'm comfortable with
                      frontend development in React, which powers this site.
                    </p>
                    <div className="about-skills">
                      {skills.map(s => (
                        <span key={s} className="skill-tag">{s}</span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {}
                    <p>
                      I'm a self-taught manga artist who's been making art for my years, but recently started pursuing manga.
                      Outside of software, storytelling and visual art are where I spend my creative energy.
                    </p>
                    <p>
                      Since high school, the stories that I have watched and read in the medium of animanga have always spoken
                      to me in a special way. As an artist and a writer, my goal is to reciprocate this storytelling through
                      my unique perspectives and ideas.
                    </p>
                    {}
                  </>
                )}
              </div>
              <div>
                <ImageSlideshow images={aboutImages} />
              </div>
            </div>
          </div>
        </section>

        <section id="project-section">
          <div className="section-inner">
            <span className="section-label">{activeTab === 'programming' ? 'Work' : 'Art'}</span>
            <h2 className="section-title">{activeTab === 'programming' ? 'Projects' : 'Works'}</h2>
            {activeTab === 'programming' ? (
              <ProjectDisplay items={projects} />
            ) : (
              <MangaDisplay />
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Daniel Daugbjerg. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
