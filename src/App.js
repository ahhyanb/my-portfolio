import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
    </Routes>
  </>
  );
}

export default App;
