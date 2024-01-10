import React, { useState } from 'react';
//import logo from './assets/xers-logo.png'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="">
            <nav className="flex items-center justify-between flex-wrap p-6 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 flex-row">
                    <div className='text-white font-bold font-sans text-3xl font-serif italic'>
                        <a href="/">
                            Xers
                        </a>
                    </div>
                </div>
                <div className="block lg:hidden bg-white rounded-full justify-self-flex-end">
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
                <div className={`w-full  flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"} justify-items-end items-end text-end`}>
                    <div className="text-l lg:flex-grow">
                        <a href="/home" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 rounded p-2 hover:text-gray-500 focus:text-gray-500 font-bold">
                            Home
                        </a>
                        <a href="/hof" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 rounded p-2 hover:text-gray-500 focus:text-gray-500 font-bold">
                            Hall of Fame
                        </a>
                        <a href="/mentors" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 rounded p-2 hover:text-gray-500 focus:text-gray-500 font-bold">
                            Mentorship
                        </a>
                    </div>
                    {/* <div>
                        <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white rounded-full">
                            Click Me
                        </button>
                    </div> */}
                </div>
            </nav>
        </header>
    )
}


