import { useState } from "react";
import Link from 'next/link';

const Headers = () => {
  const [isOpen, SetisOpen] = useState(false);

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3">
      <div className="flex items-center justify-between bg-gray-900 px-4 py-3 sm:p-0">
        <div>
          <h3 className="text-white font-poppins font-bold">CDV</h3>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => SetisOpen((isOpen) => !isOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={
          (isOpen ? "block" : "hidden") + " px-2 pt-2 pb-4 sm:p-0 sm:flex"
        }
      >
        <Link href="/" scroll={false}>
          <a 
            className="text-white font-poppins font-medium block px-2 py-1 mr-5"
            >
            Home
          </a>
        </Link>
         
        <Link href="/#projects" scroll={false}>
          <a 
            className="text-white font-poppins font-medium block px-2 py-1 mr-5"
            >
            Work
          </a>
        </Link>
        <Link href="/#skills" scroll={false}>
          <a 
            className="font-poppins font-medium mt-1 block px-2 py-1 text-white  sm:mt-0"
            >
            Skills
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Headers;
