import React from 'react';

export default function Services() {
  return (
    <section id="service" className="py-[50px] md:py-[80px] bg-[#F4F5F6]">
      <div className="max-w-[88vw] mx-auto">
        
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div>
            <h2 className="font-heading text-[24px] md:text-[30px] font-bold uppercase text-[#242121] mb-6">
              What Spacia does
            </h2>
            <p className="font-sans text-[#242121] text-base md:text-lg leading-relaxed">
              False ceiling design is not just about aesthetics but also about functionality. We create stunning and efficient ceiling solutions that enhance the visual appeal of any space while improving insulation, acoustics, and lighting. Our designs are crafted to impress and built to last.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="font-heading text-[24px] md:text-[30px] font-bold uppercase text-[#242121] mb-6">
              Your Dream Space, Realized
            </h2>
            <p className="font-sans text-[#242121] text-base md:text-lg leading-relaxed mb-4">
              Welcome to Spacia — your trusted partner in transforming spaces with exceptional false ceiling designs and interior solutions. With over two decades of expertise, we specialize in crafting innovative ceiling solutions that enhance both aesthetics and functionality.
            </p>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
              As a leading false ceiling service provider, we go beyond design to improve acoustics, insulation, and lighting, creating visually stunning yet practical environments. Our commitment to quality and customer satisfaction ensures a seamless experience, making us your one-stop destination for elegant and efficient interior transformations.
            </p>
          </div>
        </div>

        {/* Services Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {/* Service 1 */}
          <div className="bg-white rounded-[5px] overflow-hidden shadow-[0px_12px_18px_-6px_rgba(34,56,101,0.04)] group transition-transform duration-300 hover:-translate-y-1">
            <div className="h-[250px] md:h-[300px] overflow-hidden">
              <img 
                src="https://spaciakolkata.online/wp-content/uploads/2024/03/toa-heftiba-FV3GConVSss-unsplash-1024x683.jpg" 
                alt="False Ceiling Design Service" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-[#242121] uppercase mb-4">
                False Ceiling Design Service
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed text-[15px]">
                Elevate your space with our innovative false ceiling designs, combining style and functionality. Whether for homes or offices, our ceilings enhance aesthetics, improve acoustics, and create a sophisticated ambiance.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-[5px] overflow-hidden shadow-[0px_12px_18px_-6px_rgba(34,56,101,0.04)] group transition-transform duration-300 hover:-translate-y-1">
            <div className="h-[250px] md:h-[300px] overflow-hidden">
              <img 
                src="https://spaciakolkata.online/wp-content/uploads/2024/03/jonny-caspari-KuudDjBHIlA-unsplash-1024x683.jpg" 
                alt="Office Decoration & Home Interior" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-[#242121] uppercase mb-4">
                Office Decoration & Home Interior
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed text-[15px]">
                From the boardroom to the living room, our designs reflect a blend of professionalism and comfort. Places we create are both cozy and stylish, making every day a luxury experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
