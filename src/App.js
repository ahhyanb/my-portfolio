import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Project';
import Contact from './components/contact/Contact';

function App() {
  return (
   <>

    <Header />

    <Routes>

      {/* <Route path="/" element={<Header />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>

  </>
  );
}

export default App;
