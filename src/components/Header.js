import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl text-blue-700">
          Africa Home Haven
        </Link>
        <nav className="space-x-4">
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</Link> {/* New link */}
          <Link to="/donate" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">Donate</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;