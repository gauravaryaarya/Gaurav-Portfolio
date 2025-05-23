import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='mb-10 flex flex-col sm:flex-row sm:items-center justify-between py-6 px-4 gap-6'>

            <div className='flex justify-center sm:justify-start'>
                <h3 className='text-2xl font-bold text-white'>GA.</h3>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <button 
                    className='bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-300 transition'
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Gaurav_Arya_Resume.pdf';  // Put your resume file in public folder
                        link.download = 'Gaurav_Arya_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                >
                    Hire Me
                </button>
                
                <div className='flex flex-wrap justify-center gap-4 text-2xl items-center'>
                    <a href="https://www.linkedin.com/in/gaurav-arya-4321041a6/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-600 transition duration-300" />
                    </a>
                    <a href="https://github.com/gauravaryaarya" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-gray-500 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com/gauravaryaarya2/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-pink-500 transition duration-300" />
                    </a>
                    <a href="https://x.com/Gauravarya98985" target="_blank" rel="noopener noreferrer">
                        <FaSquareXTwitter className="hover:text-black transition duration-300" />
                    </a>
                    <a href="https://leetcode.com/Gauravarya98985" target="_blank" rel="noopener noreferrer">
                        <FaCode className="hover:text-black transition duration-300" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
