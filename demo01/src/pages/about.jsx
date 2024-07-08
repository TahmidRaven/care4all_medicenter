import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Care4All</h2>
        <p className="text-lg mb-6">
          Care4All is dedicated to providing top-notch healthcare services for both humans and pets. Our mission is to ensure that everyone receives the best possible care.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Human Healthcare</h3>
            <img src="https://via.placeholder.com/400x300?text=Human+Healthcare" alt="Human Healthcare" className="w-full rounded-lg mb-4" />
            <p>
              Our human healthcare services include a wide range of medical specialties, ensuring comprehensive care for you and your family. From preventive care to advanced treatments, we have you covered.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pet Healthcare</h3>
            <img src="https://via.placeholder.com/400x300?text=Pet+Healthcare" alt="Pet Healthcare" className="w-full rounded-lg mb-4" />
            <p>
              We understand that pets are part of your family too. Our pet healthcare services are designed to provide your furry friends with the best possible medical care, from routine check-ups to emergency services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
