import React from 'react';

function About() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-blue-700">About Us</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Africa Home Haven is dedicated to providing essential resources and support to vulnerable communities in Africa. Our mission is to empower individuals and families, fostering sustainable development and creating lasting positive change. We believe in the power of community and collaboration to build a brighter future for all.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Through our various programs, we address critical needs such as access to clean water, education, healthcare, and economic opportunities. We strive to create a safe and nurturing environment where individuals can thrive and reach their full potential.
        </p>
      </div>
    </section>
  );
}

export default About;