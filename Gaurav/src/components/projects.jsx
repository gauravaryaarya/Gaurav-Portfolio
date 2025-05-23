import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import project from '../../project.json';

const Projects = () => {
  return (
    <div className='border-b pl-[200px] border-neutral-200 pb-5'>
     
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className='my-12 text-4xl text-center'>Projects</h2>
      </motion.div>

      <div>
        {project.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className='mb-7 flex flex-col lg:flex-row lg:justify-between items-center'
          >
           
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='rounded-lg shadow-lg mb-4 lg:mb-0 max-h-64 object-cover w-3/4 lg:w-1/4'
              src={p.img}
              width={150}
              height={150}
              alt={p.name}
            />

           
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='w-full lg:w-2/3 flex flex-col items-center lg:items-start lg:ml-8'
            >
              <h2 className='text-xl font-lato mb-2'>{p.name}</h2>
              <p className='my-3 max-w-xl text-center font-thin lg:text-left'>{p.disc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
