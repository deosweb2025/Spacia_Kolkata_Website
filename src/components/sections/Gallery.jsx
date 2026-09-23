import React from 'react';

export default function Gallery() {
  const images = [
    'https://spaciakolkata.online/wp-content/uploads/2024/03/jonny-caspari-KuudDjBHIlA-unsplash-1024x683.jpg',
    'https://spaciakolkata.online/wp-content/uploads/2024/03/kenny-eliason-kdwahpWYfQo-unsplash-1024x683.jpg',
    'https://spaciakolkata.online/wp-content/uploads/2024/03/toa-heftiba-FV3GConVSss-unsplash-1024x683.jpg',
    'https://spaciakolkata.online/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-1.57.33-PM.jpeg'
  ];

  return (
    <section id="gallery" className="py-[50px] md:py-[80px] bg-[#F4F5F6]">
      <div className="max-w-[88vw] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-[24px] md:text-[30px] font-bold uppercase text-[#242121] mb-4">
            Some Insights
          </h2>
          <p className="font-sans text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Here’s how you’d know what we have done and how much you as a client can expect working with us.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-[5px] group cursor-pointer aspect-square">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
