import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Banner from '../components/sections/Banner';
import WhyUs from '../components/sections/WhyUs';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <div className="font-sans text-[#242121] bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Banner />
        <WhyUs />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
