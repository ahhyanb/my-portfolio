import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </>
  );
}

export default App;
