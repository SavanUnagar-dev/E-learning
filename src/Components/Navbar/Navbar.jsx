import React from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";


const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/" },
  { id: 3, title: "About Us", path: "/" },
  { id: 4, title: "Our Team", path: "/" },
  { id: 5, title: "Contact Us", path: "/" },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div 
      initial= {{ opacity:0, y:-50 }}
      animate={{ opacity:1, y:0 }}
      className="container py-10 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>

        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex gap-3 items-center">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path}
                 className="inline-block py-2 px-3 hover:text-secondary relative group">
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
          <IoMenu className="text-4xl"/>
         </div>

      </motion.div>
    </nav>
  );
};

export default Navbar;
