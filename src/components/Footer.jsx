import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-[88vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[50px] mb-12">
        {/* About Column */}
        <div className="flex flex-col gap-4">
          <img 
            src="https://spaciakolkata.online/wp-content/uploads/2025/02/COMPANY-LOGO.png" 
            alt="Spacia Logo" 
            className="w-[150px] bg-white p-2 rounded"
          />
          <p className="text-gray-400 font-sans text-[13px] md:text-[14px] leading-relaxed mt-2">
            Transforming spaces with exceptional false ceiling designs and interior solutions. With over two decades of expertise, we specialize in crafting innovative ceiling solutions that enhance both aesthetics and functionality.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-6 uppercase">Quick Links</h3>
          <ul className="flex flex-col gap-3 font-sans text-[13px] md:text-[14px] text-gray-400">
            <li><a href="#home" className="hover:text-[#00BCD5] transition-colors">Home</a></li>
            <li><a href="#service" className="hover:text-[#00BCD5] transition-colors">Service</a></li>
            <li><a href="#about" className="hover:text-[#00BCD5] transition-colors">About</a></li>
            <li><a href="#gallery" className="hover:text-[#00BCD5] transition-colors">Gallery</a></li>
            <li><a href="#testimonial" className="hover:text-[#00BCD5] transition-colors">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-2">
          <h3 className="font-heading font-semibold text-lg mb-6 uppercase">Contact Information</h3>
          <div className="flex flex-col gap-4 text-gray-400 font-sans text-[13px] md:text-[14px]">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#00BCD5] shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-white mb-1">Address:</p>
                <p>304 East Kodalia, Rammohan Sarani, New Barrackpur, Kolkata 700131</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#00BCD5] shrink-0" size={20} />
              <div>
                <p className="font-semibold text-white mb-1">Phone:</p>
                <a href="tel:+919836566787" className="hover:text-[#00BCD5]">+91 98365 66787</a><br/>
                <a href="tel:+918420390348" className="hover:text-[#00BCD5]">+91 84203 90348</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#00BCD5] shrink-0" size={20} />
              <div>
                <p className="font-semibold text-white mb-1">Email:</p>
                <a href="mailto:spaciaint@gmail.com" className="hover:text-[#00BCD5]">spaciaint@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="max-w-[88vw] mx-auto text-center font-sans text-[10px] md:text-[13px] text-gray-500">
          Copyright © {new Date().getFullYear()} Spacia - Powered by <a href="http://teamdeos.com/" className="text-[#00BCD5] hover:underline" target="_blank" rel="noreferrer">Digital Exposure Online Services</a>
        </div>
      </div>
    </footer>
  );
}
