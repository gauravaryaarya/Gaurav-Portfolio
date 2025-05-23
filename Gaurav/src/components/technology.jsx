import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { DiNodejsSmall, DiPython } from "react-icons/di";

const techStack = [
  { icon: <RiReactjsLine className='text-6xl text-cyan-400' />, key: "react", delay: 0 },
  { icon: <SiMongodb className='text-6xl text-green-500' />, key: "mongodb", delay: 0.2 },
  { icon: <DiNodejsSmall className='text-6xl text-green-400' />, key: "nodejs", delay: 0.4 },
  { icon: <SiExpress className='text-6xl text-white' />, key: "express", delay: 0.6 },
  { icon: <DiPython className='text-6xl text-orange-400' />, key: "python", delay: 0.8 },
];

const Technology = () => {
  return (
    <div className='border-b border-neutral-200 pb-5'>
      <h2 className='my-20 text-4xl text-center'> Technology </h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{ opacity:0,x:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-6'>

        {techStack.map((tech) => (
          <motion.div
            key={tech.key}
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }}
            transition={{
              duration: 2.5 + tech.delay, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className='rounded-2xl border-4 border-neutral-200 p-4 shadow-lg'
          >
            {tech.icon}
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Technology;
