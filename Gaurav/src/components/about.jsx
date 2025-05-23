import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import imgprofilepic from "../assets/images/cdc.jpg";

const About = () => {
  return (
    <div className='border-b bg-black px-6 md:px-16 lg:px-24 py-12 border-neutral-200'>
      
      {/* Heading */}
      <h2 className='text-center text-white text-5xl md:text-6xl font-semibold mb-16'>
        About Me
      </h2>

      {/* Flex Container: gap for spacing */}
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-x-16'>

        {/* Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          viewport={{ once: true }}
          className='w-full lg:w-1/2 flex justify-center'
        >
          <img
            src={imgprofilepic}
            alt="Gaurav Arya"
            className='rounded-xl shadow-lg object-cover max-h-[400px] w-auto'
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          viewport={{ once: true }}
          className='w-full lg:w-1/2 text-white'
        >
          <p className='text-lg lg:text-xl font-light leading-relaxed tracking-tight text-justify'>
            Hello! I'm <span className='font-semibold text-pink-400'>Gaurav Arya</span>, a dedicated Full Stack Developer currently in my third year of pursuing a B.Tech in Computer Science Engineering. My journey into the world of technology began with a deep curiosity about how things work, which led me to explore various programming languages and development frameworks.

            <br /><br />
            I have experience in <span className='text-yellow-400'>C++, C, Python, Java, JavaScript</span>. I'm proficient in <span className='text-green-400'>React.js</span> for frontend and backend development with API integration. I build full-stack apps and love creating seamless user experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
