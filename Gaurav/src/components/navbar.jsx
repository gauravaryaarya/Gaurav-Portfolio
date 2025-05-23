import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='mb-20 flex items-center justify-between py-2'>

            
            <div className='flex flex-shrink-0 items-center'>
                <h3 className='text-xl font-bold'>GA.</h3>
            </div>

            
            <div className='flex m-3 justify-center gap-4 text-2xl items-center'>
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
    );
};

export default Navbar;
