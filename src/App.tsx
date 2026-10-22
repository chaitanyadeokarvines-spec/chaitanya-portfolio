import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Skills } from './components/Skills';
import { ShowcaseBanner } from './components/ShowcaseBanner';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'process'];
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
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Skills />
        <ShowcaseBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
