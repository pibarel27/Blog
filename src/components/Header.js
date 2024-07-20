import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 p-4 text-white flex items-center relative">
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none"
        >
          Menu
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <Link
                to="/thesis"
                className="text-white block px-4 py-2 text-sm hover:bg-gray-600"
                role="menuitem"
                onClick={() => setDropdownOpen(false)}
              >
                Thesis
              </Link>
              <Link
                to="/notes"
                className="text-white block px-4 py-2 text-sm hover:bg-gray-600"
                role="menuitem"
                onClick={() => setDropdownOpen(false)}
              >
                Notes
              </Link>
            </div>
          </div>
        )}
      </div>
      <Link to="/" className="flex-grow text-center">
        <h1 className="text-3xl font-bold">My Blog</h1>
      </Link>
    </header>
  );
};

export default Header;
