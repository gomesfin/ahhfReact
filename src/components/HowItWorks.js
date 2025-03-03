import React from 'react';

function HowItWorks() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-blue-700">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mb-4">
            <span className="text-4xl text-blue-600 font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Identify</h3>
          <p className="text-gray-700">
            We identify vulnerable communities and individuals in need of
            support.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mb-4">
            <span className="text-4xl text-blue-600 font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Partner</h3>
          <p className="text-gray-700">
            We partner with local organizations and leaders to implement
            effective programs.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mb-4">
            <span className="text-4xl text-blue-600 font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Empower</h3>
          <p className="text-gray-700">
            We empower individuals and communities with the resources and skills
            they need to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;