import React from 'react';
import { Check } from 'lucide-react';

export default function WhyUs() {
  const points = [
    '20 Years of Industry Experience',
    'Customer-Centric Approach',
    'Comprehensive Solutions'
  ];

  return (
    <section id="about" className="py-[50px] md:py-[80px] bg-white">
      <div className="max-w-[88vw] mx-auto flex flex-col lg:flex-row items-center gap-[50px]">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src="https://spaciakolkata.online/wp-content/uploads/2024/03/interior.jpg" 
            alt="Why Spacia" 
            className="w-full h-auto rounded-[5px] shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-heading text-[24px] md:text-[30px] font-bold uppercase text-[#242121] mb-6">
            Why Spacia ?
          </h2>
          <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Whether you’re looking to breathe new life into your existing space or embark on a completely new project, Spacia is here to guide you every step of the way. Let us transform your space into a reflection of your personality and style. Contact us today to start your transformation journey.
          </p>

          <ul className="flex flex-col gap-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#00BCD5]/10 flex items-center justify-center shrink-0">
                  <Check className="text-[#00BCD5]" size={18} />
                </div>
                <span className="font-sans text-[#242121] font-semibold text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
