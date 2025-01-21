import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { footer } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f4f1f1]">
      <motion.div 
       initial={{opacity:0, y:50}}
       whileInView={{opacity:1, y:0}}
      className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First Section */}
           <div className="space-y-4 max-w-[300px]">
             <h1 className="text-2xl font-bold">The Codeing Journey</h1>
             <p className="text-dark2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, blanditiis, quam debitis a eveniet labore voluptas dolor tempore porro placeat, sint hic.</p>
           </div>

          {/* Second Section */}
           <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                 <h1 className="text-2xl font-bold">Course</h1>
                 <div className="text-dark2">
                    <ul className="space-y-2 text-lg">
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            Web developmen
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            Software developmen
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            Apps developmen
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            E-learning
                        </li>
                    </ul>
                 </div>
              </div>

              <div className="space-y-4">
                 <h1 className="text-2xl font-bold">Links</h1>
                 <div className="text-dark2">
                    <ul className="space-y-2 text-lg">
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            Service
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            About Us
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            Our Team
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                            Contact Us
                        </li>
                    </ul>
                 </div>
              </div>
           </div>

          {/* Third Section */}
           <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">
               Get in Touch 
            </h1>
            <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter your email"
                  className="p-3 rounded-xl bg-white w-full py-4 focus:right-0 focus:outline-none placeholder:text-dark2"
                />
                <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
            </div>
            {/* Social icon */}
              <div className="flex space-x-6 py-3 text-xl">
                <a href="">
                    <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                </a>
                <a href="">
                    <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                </a>
                <a href="">
                    <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                </a>
                <a href="">
                    <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
                </a>
              </div>
           </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
