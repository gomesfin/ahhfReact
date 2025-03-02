import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative">
      <img src="/images/hero-image.jpg" alt="Hero" className="w-full h-[500px] object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Africa Home Haven</h1>
        <p className="text-lg md:text-xl mb-6">Providing support and hope.</p>
        <Link to="/donate" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md text-lg transition-colors">Donate Now</Link>
      </div>
    </section>
  );
}

export default Hero;