import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-[50px] md:py-[80px] bg-white">
      <div className="max-w-[88vw] mx-auto text-center">
        <h2 className="font-heading text-[24px] md:text-[30px] font-bold uppercase text-[#242121] mb-6">
          What peoples says
        </h2>
        <p className="font-sans text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12">
          We do everything to satisfy them, and when their beautiful words of appreciation touch us – we find more courage to improve and to keep improving.
        </p>
        
        {/* Simple Testimonial Card */}
        <div className="max-w-2xl mx-auto bg-[#F4F5F6] p-8 md:p-12 rounded-[5px] shadow-[0px_12px_18px_-6px_rgba(34,56,101,0.04)] relative">
          <div className="text-4xl text-[#00BCD5] font-serif absolute top-6 left-6 opacity-30">"</div>
          <p className="font-sans text-[#242121] text-lg md:text-xl italic relative z-10">
            "Spacia transformed our office into a modern, vibrant workspace. Their false ceiling designs and lighting completely changed the ambiance. Highly recommended!"
          </p>
          <div className="mt-8">
            <h4 className="font-heading font-bold uppercase text-[#242121]">Rajesh Kumar</h4>
            <span className="font-sans text-sm text-gray-500">Corporate Client</span>
          </div>
        </div>
      </div>
    </section>
  );
}
