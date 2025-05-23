import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-neutral-200 pb-20 px-6 lg:px-48'>
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='my-10 text-center text-4xl'
      >
        Get In Touch
      </motion.h2>

      {/* Contact Info with Fade-in Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-center tracking-tight max-w-md mx-auto space-y-4'
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='my-4'
        >
          New Delhi
        </motion.p>

        <motion.a
          href="mailto:gauravarya272003@gmail.com"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="block text-blue-500 hover:text-blue-600 transition duration-300 break-words"
        >
          gauravarya272003@gmail.com
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='my-4'
        >
          +91 8506824135
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;
