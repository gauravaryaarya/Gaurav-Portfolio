import React from 'react';
import { motion } from 'framer-motion';
import exp from '../../exp.json';

const Experience = () => {
  return (
    <div>
      <div className='border-b border-neutral-200 pb-5'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className='my-14 text-4xl text-center'> Experience </h2>
        </motion.div>

        <div>
          {exp.map((e, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:gap-24 mb-8 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start"
            >
              {/* Year Animation */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='w-full lg:w-1/4 text-center lg:text-left'
              >
                <p className="mb-2 text-sm text-neutral-400">{e.year}</p>
              </motion.div>

              {/* Role, Company, and Description Animation */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='flex flex-col items-center lg:w-1/2 lg:items-start text-center lg:text-left'
              >
                <h6 className='mb-2 font-semibold'>
                  {e.role} - <span className='text-sm text-purple-100'>{e.Company}</span>
                </h6>
                <p>{e.discription}</p>

                {/* Tech Stack Animation */}
                <div className='flex flex-wrap'>
                  {e.tech &&
                    e.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className='text-sm text-purple-100 mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600 flex'
                      >
                        {tech}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
