
import './App.css';
import React, { useState } from 'react';
import logo from './assets/xers-logo.png'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-cyan-400">
      <nav className="flex items-center justify-between flex-wrap p-6 bg-gradient-to-r from-indigo-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 flex-row">
          <img src={logo} className="w-20 h-20 mr-2" alt="Logo" />
          <div className='text-black font-bold font-sans'>Xers</div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-l lg:flex-grow">
            <a href="/home" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 rounded p-2 hover:text-black font-bold">
              Home
            </a>
            <a href="/home" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 rounded p-2 hover:text-black font-bold">
              Hall of Fame
            </a>
            <a href="/mentors" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 rounded p-2 hover:text-black font-bold">
              Mentor
            </a>
          </div>
          <div>
            {/* <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
              Click Me
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default App;
