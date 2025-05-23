import React, { useEffect, useState } from 'react';
import bgImage from '../assets/images/page1pic3.jpg';
import Navbar from '../components/navbar';

const Page1 = () => {
  const [text, setText] = useState('');
  const fullText = 'Driven to Build, Learn and Lead';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const renderText = () => {
    const pattern = /(Build)|(Learn)|(Lead)/g;
    const parts = text.split(pattern);

    return parts.map((part, i) => {
      if (part === 'Build') {
        return (
          <span key={i} className="text-cyan-400 text-4xl sm:text-5xl font-bold">
            {part}
          </span>
        );
      } else if (part === 'Learn') {
        return (
          <span key={i} className="text-purple-400 text-4xl sm:text-5xl font-bold">
            {part}
          </span>
        );
      } else if (part === 'Lead') {
        return (
          <span key={i} className="text-emerald-400 text-4xl sm:text-5xl font-bold">
            {part}
          </span>
        );
      } else {
        return <span key={i}>{part}</span>;
      }
    });
  };

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 pt-0 bg-black relative">
      <Navbar />

      <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-10 relative">

        {/* Image Container */}
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="h-[60vh] w-[80vw] sm:w-[55vw] sm:h-[68vh] rounded-[20px] sm:rounded-[40px] bg-cover bg-center bg-no-repeat shadow-xl shadow-blue-900 z-10"
        ></div>

        {/* Animated Text Section */}
        <div className="relative max-w-md text-center lg:text-left">
          <div className="absolute top-0 left-0 w-full h-full blur-3xl opacity-30 bg-gradient-to-br from-[#00f0ff] via-[#9b5de5] to-transparent rounded-xl -z-10"></div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-relaxed">
            {renderText()}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page1;
