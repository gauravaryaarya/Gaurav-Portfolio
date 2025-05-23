import React from 'react'
import bgImage from '../assets/images/page1pic3.jpg';
import Navbar from '../components/navbar';

const Page1 = () => {
  return (
    <div className='min-h-screen px-4 sm:px-8 md:px-16 pt-0 bg-black'>
      <div>
        <Navbar />
      </div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className='h-[60vh] sm:h-[78vh] w-full rounded-[20px] sm:rounded-[40px] bg-cover bg-center bg-no-repeat shadow-xl shadow-blue-900 mt-6'
      ></div>
    </div>
  )
}

export default Page1
