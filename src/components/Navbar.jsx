import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { AiOutlineDownload } from "react-icons/ai";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-opacity-60 bg-gradient-to-r from-blue-500 to-teal-500 backdrop-blur-lg shadow-lg">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16">
          <div className="flex justify-between items-center h-full">
            {/* empty div to push items to the right */}
            <div className="flex-grow"></div>
            
            {/* desktop navbar */}
            <div className="flex items-center space-x-8">
              <ul className="hidden md:flex space-x-8">
                {navItems.map(({ id, text }) => (
                  <li
                    className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    key={id}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      className="text-white"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="/R.pdf" // Replace with the actual path to your CV file
                download
                className="hidden md:block px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration=300"
              >
                <AiOutlineDownload className="inline-block mr-1" />
                Download CV
              </a>
              <div onClick={() => setMenu(!menu)} className="md:hidden text-white">
                {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
              </div>
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 backdrop-blur-lg text-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="text-white"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/path-to-your-cv-file.pdf" // Replace with the actual path to your CV file
                  download
                  className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-300"
                >
                  <AiOutlineDownload className="inline-block mr-1" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
