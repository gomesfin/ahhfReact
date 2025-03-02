import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl text-blue-700">
          Africa Home Haven
        </Link>
        <nav className="space-x-4">
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link to="/donate" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">Donate</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;