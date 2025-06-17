import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`No section found with id: ${id}`);
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header onNavigate={scrollToSection} />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="bio">
          <Bio />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
