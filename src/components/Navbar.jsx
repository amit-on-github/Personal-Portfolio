import React, { useState } from "react";
import pic from "../../public/Amit photo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { AiOutlineDownload } from "react-icons/ai";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Amit Kumar<span className="text-green-500 text-2xl"></span>
              <p className="text-sm">Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/a.pdf" // Replace with the actual path to your CV file
              download
              className="hidden md:block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 duration-200"
            >
              <AiOutlineDownload className="inline-block mr-1" />
              Download CV
            </a>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/path-to-your-cv-file.pdf" // Replace with the actual path to your CV file
                  download
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 duration-200"
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
