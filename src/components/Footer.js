import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Africa Home Haven. All rights reserved.</p>
        <p className="text-sm mt-2">Contact: info@africahomehaven.org</p>
      </div>
    </footer>
  );
}

export default Footer;