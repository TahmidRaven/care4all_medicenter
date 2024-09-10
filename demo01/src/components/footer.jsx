import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/TahmidRaven" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-gray-400" />
          </a>
          <a href="https://github.com/TahmidRaven/care4all_medicenter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com/tahmid_raven/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-gray-400" />
          </a>
          <a href="https://www.youtube.com/@tahmidraven" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" className="hover:text-gray-400" />
          </a>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Contact us</h2>
          <h2 className="text-xl font-bold">Our Services</h2>
        </div>
        <div className="text-sm">
          <p>Tahmid Raven Copyright © 2024 - All rights reserved || Designed By: Tahmid, Ahtesham, Mehedi, Toufik</p>
        </div>
      </div>
    </footer>
  );
}
