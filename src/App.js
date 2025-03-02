import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="pt-[68px]"> {/* Add padding to top. Adjust to your header height*/}

        <Routes>
          <Route path="/" element={<> <Hero /> <About /> <Donate /> </>} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;