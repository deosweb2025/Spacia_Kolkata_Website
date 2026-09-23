import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-[90px]">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#111]"
        style={{ 
          backgroundImage: 'url(https://teamdeos.co.in/spacia/wp-content/uploads/2024/03/Frame-1.png)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="font-sans text-[40px] md:text-[64px] font-light text-[#D0FBFF] mb-6 leading-tight">
          Designing the Ceiling of Your Dreams
        </h1>
        
        <p className="font-sans text-gray-300 text-[16px] md:text-[18px] max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Transform your space with stylish and durable false ceilings. Our expert designs add elegance and functionality to any room, tailored to your needs.
        </p>
        
        <a 
          href="#contact"
          className="inline-block border border-[#62B5CC] hover:bg-[#62B5CC] text-white font-sans font-bold text-[15px] px-8 py-3 rounded-[3px] transition-all duration-300 bg-transparent"
        >
          Contact us now
        </a>
      </div>
    </section>
  );
}
