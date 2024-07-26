import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 p-4 text-white flex items-center justify-between relative">
      <div className="text-center">
        <Link to="/" className="text-3xl font-bold">
          My Blog
        </Link>
      </div>
      
      <button
        onClick={toggleMenu}
        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <nav
        ref={menuRef}
        className={`lg:flex lg:items-center lg:space-x-4 absolute top-full right-0 w-40 bg-gray-800 shadow-lg rounded-md text-white lg:relative lg:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <Link
          to="/thesis"
          className="block px-4 py-2 text-sm underline-animation"
          onClick={() => setMenuOpen(false)}
        >
          Thesis
        </Link>
        <Link
          to="/notes"
          className="block px-4 py-2 text-sm underline-animation"
          onClick={() => setMenuOpen(false)}
        >
          Notes
        </Link>
      </nav>
    </header>
  );
};

export default Header;
