import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

const Footer = () => {
  return (
    <footer className="bg-gray-500 p-4 text-white mt-4 flex flex-col sm:flex-row sm:justify-between items-center">
      <p className="text-center sm:text-left mb-4 sm:mb-0">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
        <a href="https://www.facebook.com/pibarel27" target="_blank" rel="noopener noreferrer" className="mb-2">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://twitter.com/MaisnamPibarel" target="_blank" rel="noopener noreferrer" className="mb-2">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://www.instagram.com/_pibarel/" target="_blank" rel="noopener noreferrer" className="mb-2">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href='https://www.linkedin.com/in/akash-maisnam-92726224b/' target="_blank" rel="noopener noreferrer" className="mb-2">
          <FontAwesomeIcon icon={faLinkedin} size='lg'/>
        </a>
        <a href='https://github.com/pibarel27' target="_blank" rel="noopener noreferrer" className="mb-2">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
