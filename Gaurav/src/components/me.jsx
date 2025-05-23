import React from 'react';
import { motion } from 'framer-motion';
import profilepic from "../assets/images/propic.jpg";

const Me = () => {
    return (
        <div className='border-b bg-black border-white p-5 pl-16'>
            <div className='flex flex-wrap justify-between'>
                <div className='w-full flex flex-col items-center lg:w-1/2 lg:items-start'>
                    <motion.h1 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='pb-8 lg:pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Gaurav Arya
                    </motion.h1>

                    <motion.span
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-5xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className='my-3 max-w-xl font-light tracking-tighter text-left text-white'>
                        I am a proactive and driven 3rd-year B.Tech Computer Science Engineering student at Guru Gobind Singh Indraprastha University...
                    </motion.p>
                </div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='w-full lg:w-1/2 flex  justify-center lg:justify-end'>
                    <img className='rounded-[30px] pr-16 shadow-lg mt-4 lg:mt-0 max-h-96 object-cover' src={profilepic} alt="Gaurav Arya" />
                </motion.div>
            </div>
        </div>
    )
}

export default Me;
