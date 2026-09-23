import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinks = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'SERVICES', href: '#service' },
    { name: 'ABOUT', href: '#about' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const mobileLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Services', href: '#service' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-[1290px] w-full mx-auto flex items-center justify-between h-[90px] px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0 cursor-pointer">
            <img 
              src="https://spaciakolkata.online/wp-content/uploads/2025/02/COMPANY-LOGO.png" 
              alt="Spacia Logo" 
              style={{ height: '50px', width: 'auto', objectFit: 'contain', maxWidth: '100px' }}
            />
            <span className="font-sans text-[36px] font-bold text-[#6BB9D2] whitespace-nowrap">Spacia</span>
          </a>

          {/* Desktop Navigation (Laptop / Desktop View) */}
          <nav className="spacia-desktop-nav">
            {desktopLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-sans font-bold text-[13px] tracking-wide uppercase whitespace-nowrap hover:!text-[#6BB9D2] ${link.active ? '!text-[#6BB9D2]' : '!text-black'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button (Laptop / Desktop View) */}
          <div className="spacia-desktop-cta">
            <a 
              href="#contact"
              className="bg-[#6BB9D2] !text-white font-sans font-bold text-[15px] px-8 py-3 inline-block whitespace-nowrap"
            >
              Enquery
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="spacia-mobile-trigger items-center justify-center p-2 text-[#6BB9D2] hover:opacity-80 transition-opacity"
            aria-label="Open Menu"
          >
            <svg width="22" height="16" viewBox="0 0 18 14" fill="#6BB9D2">
              <rect y="0.00" width="18" height="1.8" rx="0.9" />
              <rect y="6.10" width="18" height="1.8" rx="0.9" />
              <rect y="12.2" width="18" height="1.8" rx="0.9" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <div className="spacia-mobile-drawer">
        <div
          className={`fixed inset-0 z-[100] transition-all duration-300 ${
            isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />

          {/* Side Panel */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#1E1F24] text-white shadow-2xl p-7 flex flex-col justify-between transition-transform duration-300 ease-in-out z-10 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div>
              {/* Close Button ✕ */}
              <div className="flex justify-end mb-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#6BB9D2] transition-colors p-1"
                  aria-label="Close Menu"
                >
                  <X size={26} strokeWidth={1.5} />
                </button>
              </div>

              {/* Vertical Routing Links */}
              <nav className="flex flex-col gap-3">
                {mobileLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-[22px] font-light tracking-wide transition-colors py-1 ${
                      link.active ? '!text-[#6BB9D2]' : '!text-white hover:!text-[#6BB9D2]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Footer Address & Social Icons */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <p className="text-[#9ea3aa] text-[13px] leading-relaxed">
                304 East Kodalia, Rammohan Sarani,<br />
                New Barrackpur, Kolkata 700131
              </p>

              <div className="flex items-center gap-4 text-[#9ea3aa]">
                {/* Facebook */}
                <a href="#" className="hover:text-[#6BB9D2] transition-colors" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a href="#" className="hover:text-[#6BB9D2] transition-colors" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.9 0C1.3 0 0 1.3 0 2.9v14.3C0 18.7 1.3 20 2.9 20h14.3c1.6 0 2.9-1.3 2.9-2.9V2.9C20 1.3 18.7 0 17.1 0H2.9zm13.2 3.8L11.5 9l5.5 7.2h-4.3l-3.3-4.4-3.8 4.4H3.4l5-5.7-5.3-6.7h4.4l3 4 3.5-4h2.1zM14.4 15 6.8 5H5.6l7.7 10h1.1z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="hover:text-[#6BB9D2] transition-colors" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="3.3"/>
                    <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
