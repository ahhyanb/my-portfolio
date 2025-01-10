import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Project';

function App() {
  return (
   <>
    <Routes>

      <Route path="/" element={<Header />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/projects" element={<Projects />} />

    </Routes>
  </>
  );
}

export default App;
