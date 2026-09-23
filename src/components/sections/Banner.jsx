import React from 'react';

export default function Banner() {
  return (
    <section className="relative py-[80px] md:py-[120px] bg-[#242121]">
      {/* Background Image overlay if any */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 bg-fixed"
        style={{ backgroundImage: 'url(https://spaciakolkata.online/wp-content/uploads/2024/03/kenny-eliason-kdwahpWYfQo-unsplash-1024x683.jpg)' }}
      ></div>
      
      <div className="relative z-10 max-w-[88vw] mx-auto text-center">
        <h2 className="font-heading text-white text-[24px] md:text-[36px] font-bold uppercase mb-8 leading-snug max-w-4xl mx-auto">
          The Essence of False Ceiling Design is Not Just About Style, but About Enhancing Spaces for the People who Live and Work in Them.
        </h2>
        <a 
          href="tel:9836566787" 
          className="inline-block bg-[#00BCD5] hover:bg-white hover:text-[#00BCD5] text-white font-sans font-bold uppercase tracking-wider text-sm px-10 py-4 rounded-[5px] transition-all duration-300"
        >
          Contact us now
        </a>
      </div>
    </section>
  );
}
