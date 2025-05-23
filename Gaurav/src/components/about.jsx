import React from 'react';
import { motion } from 'framer-motion';
import imgprofilepic from "../assets/images/gaurav2.jpg";


const About = () => {
    return (
        <div className='border-b bg-black border-neutral-200 pb-5'>
            <h2 className='my-14 text-center text-4xl'>About Me</h2>
            <div className='mb-8 flex flex-col lg:flex-row md:flex-col md:justify-center lg:justify-center items-center md:items-center lg:items-start'>
                <motion.div
                whileInView={{x:0,opacity:1}}
                initial={{x:-100,opacity:1}}
                transition={{duration:0.5}} 
                
                className='w-full md:w-1/2 lg:w-1/2 flex justify-center md:justify-center lg:justify-start p-8'>
                    <img className='rounded-lg shadow-lg mt-4 lg:mt-0 max-h-96 object-cover' src={imgprofilepic} alt="Gaurav Arya" />
                </motion.div>
                <motion.div
                 whileInView={{x:0,opacity:1}}
                 initial={{x:+100,opacity:1}}
                 transition={{duration:0.5}} 
                 
                className='w-full md:w-1/2 lg:w-1/2'>
                    <p className='my-2 max-w-xl py-8 font-light tracking-tighter text-left md:text-center lg:text-left'>
                    Hello! I'm Gaurav Arya, a dedicated Full Stack Developer currently in my third year of pursuing a B.Tech in Computer Science Engineering. My journey into the world of technology began with a deep curiosity about how things work, which led me to explore various programming languages and development frameworks. I have solid experience with languages such as C++, C, Python, Java, and JavaScript. On the frontend, I'm proficient in building responsive and dynamic web applications using React.js, while on the backend, I have a strong grasp of developing robust server-side applications and APIs. My expertise spans the full stack, allowing me to seamlessly integrate frontend and backend components to create cohesive, efficient systems.  </p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
