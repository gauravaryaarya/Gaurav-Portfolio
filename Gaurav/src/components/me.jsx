import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import profilepic from "../assets/images/propic.jpg";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.6, type: 'spring' }
  }),
};

const imageVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.6, type: 'spring' }
  }
};

const Me = () => {
  return (
    <div className='border-b bg-black border-white px-4 md:px-12 lg:px-16 py-10'>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        
        {/* Text Section */}
        <motion.div
          className='w-full lg:w-1/2 flex flex-col lg:items-start items-center text-center lg:text-left'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={textVariants}
            custom={0.3}
            className='text-5xl md:text-6xl lg:text-8xl font-thin tracking-tight pb-4'
          >
            Gaurav Arya
          </motion.h1>

          <motion.span
            variants={textVariants}
            custom={0.6}
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-transparent text-3xl md:text-4xl tracking-tight'
          >
            Software Developer
          </motion.span>

          <motion.p
            variants={textVariants}
            custom={0.9}
            className='mt-6 max-w-xl font-light tracking-tight text-white'
          >
            Computer Science student with strong command over full-stack web development and real-world experience
            in building scalable applications using React and Firebase. I take ownership from design to deployment,
            focusing on clean, efficient, and user-centered solutions. As Placement Cell President, I’ve led teams,
            handled pressure, and driven results, developing both technical and leadership skills. I quickly grasp complex
            concepts (Btech Rank 1 Holder) and turn them into working solutions. I’m well-prepared to contribute
            meaningfully to fast-paced engineering teams.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
        >
          <img
            src={profilepic}
            alt="Gaurav Arya"
            className='rounded-[30px] shadow-lg max-h-[420px] w-auto lg:pr-12'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Me;
