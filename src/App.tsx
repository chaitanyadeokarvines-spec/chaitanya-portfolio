import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Skills } from './components/Skills';
import { ShowcaseBanner } from './components/ShowcaseBanner';
import { Reveal } from './components/Reveal';
import { Marquee } from './components/Marquee';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#111111] flex flex-col font-sans selection:bg-[#FF6418] selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <Reveal y={20}><About /></Reveal>
        <Reveal y={20}><Services /></Reveal>
        <Reveal y={20}><Portfolio /></Reveal>
        <Reveal y={20}><Process /></Reveal>
        <Reveal y={20}><Skills /></Reveal>
        <ShowcaseBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
