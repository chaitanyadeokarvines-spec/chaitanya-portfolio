import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { StarDoodle, SmileyDoodle } from './Doodles';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'My Process', href: '#process' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t-3 border-[#111111] relative overflow-hidden">
      
      {/* Background street accent */}
      <div className="absolute top-8 right-12 opacity-10 pointer-events-none hidden md:block">
        <StarDoodle size={70} fill="#FF6418" stroke="#FFFFFF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15 items-center">
          
          {/* LEFT: Brand Wordmark & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block text-3xl font-display font-black tracking-tight text-white hover:text-[#FF6418] transition-colors"
            >
              {PERSONAL_INFO.brandName}
            </a>
            <p className="text-gray-400 text-sm max-w-sm font-medium">
              Creative thinking. Meaningful impact.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#FFD329]">
              <span className="w-2 h-2 rounded-full bg-[#FF6418]" />
              <span>Available for worldwide remote collaborations</span>
            </div>
          </div>

          {/* RIGHT: Navigation Links & Back to Top */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-gray-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FF6418] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={scrollToTop}
              className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors pt-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* BOTTOM: Copyright & Handwritten Creative Tag */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="font-hand text-xl font-bold text-[#FFD329]">
              Keep Creating ✳
            </span>
            <SmileyDoodle size={20} color="#FFFFFF" />
          </div>
        </div>

      </div>
    </footer>
  );
};
