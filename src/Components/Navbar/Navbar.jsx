import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/" },
  { id: 3, title: "About Us", path: "/" },
  { id: 4, title: "Our Team", path: "/" },
  { id: 5, title: "Contact Us", path: "/" },
];

const Navbar = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="container py-5 flex justify-between items-center"
        >
          {/* Logo Section */}
          <div>
            <h1 className="font-bold text-2xl">The Coding Journey</h1>
          </div>

          {/* Menu Section */}
          <div className="hidden lg:block">
            <ul className="flex gap-3 items-center">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.path} className="inline-block py-2 px-3 hover:text-secondary relative group">
                    <div className="w-2 h-2 rounded-full bg-secondary absolute mr-2 left-1/2 -translate-x-1/2 top-7 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Sign in</button>
            </ul>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div className="lg:hidden">
            <IoMenu 
              onClick={toggleMenu} // Toggle the menu on click
              className="text-4xl cursor-pointer"
            />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.5 }} 
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black z-20"
            onClick={toggleMenu} // Close the menu on backdrop click
          ></motion.div>

          {/* Mobile Menu */}
          <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-0 left-0 right-0 bg-white w-full h-[200px] shadow-lg z-30"
          >
            <div className="flex justify-end p-4">
              <IoClose 
                onClick={toggleMenu} // Close the menu on close button click
                className="text-4xl cursor-pointer"
              />
            </div>
            <ul className="flex flex-col items-center gap-4 py-10 bg-white">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.path} className="py-2 px-3 text-lg">{menu.title}</a>
                </li>
              ))}
              <button className="primary-btn">Sign in</button>
            </ul>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
