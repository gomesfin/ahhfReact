import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks'; // Import the component
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="pt-[50px]"> {/* Add padding to top. Adjust header height*/}

        <Routes>
          <Route path="/" element={<> <Hero /> <About /> <Donate /> </>} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/how-it-works" element={<HowItWorks />} /> {/* New route */}
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;