import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'SERVICES', href: '#service' },
    { name: 'ABOUT', href: '#about' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-[88vw] mx-auto flex items-center justify-between h-[90px]">
        {/* Logo */}
        <div className="flex items-center gap-3 h-full cursor-pointer">
          <img 
            src="https://spaciakolkata.online/wp-content/uploads/2025/02/COMPANY-LOGO.png" 
            alt="Spacia Logo" 
            className="h-14 w-auto object-contain"
          />
          <span className="font-sans text-[32px] font-bold text-[#62B5CC]">Spacia</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto mr-12">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`font-sans font-bold text-[13px] tracking-wide uppercase transition-colors hover:text-[#62B5CC] ${link.active ? 'text-[#62B5CC]' : 'text-[#242121]'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="#contact"
            className="bg-[#62B5CC] hover:bg-[#242121] text-white font-sans font-medium text-[15px] px-8 py-3 rounded-[3px] transition-colors"
          >
            Enquery
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#242121] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col py-4">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="px-[6vw] py-3 font-sans font-medium text-[14px] text-[#242121] uppercase hover:bg-gray-50 hover:text-[#62B5CC]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-[6vw] py-4">
              <a 
                href="#contact"
                className="block text-center bg-[#62B5CC] text-white font-sans font-medium text-[14px] px-6 py-3 rounded-[3px]"
                onClick={() => setIsOpen(false)}
              >
                Enquery
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
