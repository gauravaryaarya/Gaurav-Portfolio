import React from 'react'
import bgImage from '../assets/images/page1pic2.jpg';
import Navbar from '../components/navbar';

const Page1 = () => {
  return (
    <div className='h-screen p-16 pt-0  bg-black'>
        <div>
        <Navbar/>
        </div>
      <div  
        style={{ backgroundImage: `url(${bgImage})` }} 
        className='h-[72vh] shadow-xl shadow-blue-900 w-full rounded-[40px] bg-contain bg-center'
      ></div>
    </div>
  )
}

export default Page1
