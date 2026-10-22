import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'My Process', href: '#process' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#F5F3EE]/95 backdrop-blur-md border-b-2 border-[#111111] shadow-xs'
          : 'bg-[#F5F3EE] border-b border-[#111111]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1.5 text-2xl font-display font-extrabold tracking-tighter text-[#111111] whitespace-nowrap shrink-0 hover:text-[#FF6418] transition-colors"
        >
          <span>{PERSONAL_INFO.brandName}</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#FF6418] group-hover:scale-150 transition-transform" />
        </a>

        {/* Zone 2: Navigation Links (Clean unboxed text links with active indicator) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#111111]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#FF6418]"
              >
                <span className={isActive ? 'text-[#FF6418]' : 'text-[#111111]'}>
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#FF6418] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20%E2%80%94%20Let's%20Work%20Together`}
            className="hidden sm:inline-flex items-center gap-2 bg-[#111111] text-white hover:bg-[#FF6418] hover:text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider sticker-btn transition-colors whitespace-nowrap shrink-0 border border-black"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border-2 border-[#111111] bg-white text-[#111111] hover:bg-[#FFD329] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F3EE] border-b-2 border-[#111111] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-bold text-[#111111]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FF6418] text-white'
                      : 'hover:bg-[#EAE8E3] text-[#111111]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs">●</span>}
                </a>
              );
            })}
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20%E2%80%94%20Let's%20Work%20Together`}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#111111] text-white py-3 rounded-full font-bold text-sm uppercase tracking-wider sticker-btn hover:bg-[#FF6418] transition-colors"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
