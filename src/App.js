import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Project';
import Contact from './components/contact/Contact';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onNavigate={scrollToSection} />

      <div id="home">
        <Home />
      </div>
      <div id="bio">
        <Bio />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
