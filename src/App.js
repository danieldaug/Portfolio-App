//import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.tsx';

// Functional Component for Header
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

// Functional Component for Footer
const Footer = () => (
  <footer>
    <p>&copy; 2024 Daugbjerg Portfolio All Rights Reserved.</p>
  </footer>
);

// Main App Component
function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>This is the homepage content. You can customize this to showcase your website's main features.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This section is for describing what your website or business is about.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>You can place your contact information or a form here.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;