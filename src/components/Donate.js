import React from 'react';

function Donate() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-blue-700">Donate</h2>
      <p className="text-gray-700 text-lg text-center mb-8">
        Your generous donation helps us make a real difference in the lives of those we serve.
      </p>
      <div className="flex justify-center mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md text-lg transition-colors">
          Donate Now
        </button>
      </div>
      <div className="max-w-md mx-auto text-center">
        <p className="text-gray-600 mb-2">
          You can also donate via bank transfer:
        </p>
        <p className="text-gray-600 mb-1">
          Account Name: Africa Home Haven
        </p>
        <p className="text-gray-600 mb-1">
          Account Number: [Your Account Number]
        </p>
        <p className="text-gray-600">
          Bank: [Your Bank Name]
        </p>
      </div>
    </section>
  );
}

export default Donate;