import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { DiNodejsSmall, DiPython } from "react-icons/di";

const techStack = [
  { icon: <RiReactjsLine />, key: "react", delay: 0, color: '#00ffff' },     // cyan neon
  { icon: <SiMongodb />, key: "mongodb", delay: 0.2, color: '#39ff14' },     // green neon
  { icon: <DiNodejsSmall />, key: "nodejs", delay: 0.4, color: '#32cd32' },  // lime green neon
  { icon: <SiExpress />, key: "express", delay: 0.6, color: '#ff1493' },     // pink neon
  { icon: <DiPython />, key: "python", delay: 0.8, color: '#ffb347' },       // orange neon
];

const Technology = () => {
  return (
    <div className='border-b border-neutral-200 pb-10 px-6 md:px-16 lg:px-24 bg-black'>
      <h2 className='my-16 text-4xl md:text-5xl text-center text-white font-semibold'>
        Technology
      </h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-10'
      >
        {techStack.map(({ icon, key, delay, color }) => (
          <motion.div
            key={key}
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }}
            transition={{
              duration: 2.5 + delay,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className='rounded-2xl border-4 border-neutral-200 p-6 shadow-lg flex items-center justify-center bg-gray-900'
            style={{
              color: color,
              filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 10px ${color})`
            }}
          >
            {React.cloneElement(icon, { className: 'text-6xl' })}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
