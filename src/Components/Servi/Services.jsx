import { motion } from "framer-motion";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";

const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Software Development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Satisfied Development",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  { id: 6, title: "24/7 support", link: "#", icon: <BiSupport />, delay: 0.7 },
];

const SlideLeft = (delay) => ({
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  });
  

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((ser) => (
            <motion.div
              variants={SlideLeft(Services.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{once: true}}
              key={ser.id}
              className="bg-[#f4f4f4]  rounded-2xl flex flex-col justify-center items-center gap-4 p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{ser.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {ser.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
