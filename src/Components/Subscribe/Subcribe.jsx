import React from 'react';
import BgImage from '../../assets/bg.png';
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroudRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
}

const Subcribe = () => {
  return (
   <section className='bg-[#f7f7f7]'>
     <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      style={bgStyle} className="container py-24 md:py-48">
        <motion.div
         initial={{opacity:0, scale:0.5}}
         whileInView={{opacity:1, scale:1}}
         transition={{duration:0.8, ease:"easeInOut"}}
        className="flex flex-col justify-center">
            <div className='text-center space-y-4 lg:max-w[430px] mx-auto'>
                <h1 className='text-4xl font-bold !leading-snug'>
                    450K+ Students are learing from us
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem eum illo laudantium nisi tenetur iste, consectetur provident minus maiores.
                </p>
                <a 
                 href=""
                 className='primary-btn !mt-8 inline-flex items-center gap-4 group'
                 >
                    Subscribe Now
                    <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200'/>
                </a>
            </div>
        </motion.div>
     </motion.div>
   </section>
  )
}

export default Subcribe