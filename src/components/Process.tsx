import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowDoodle, StarDoodle, SmileyDoodle } from './Doodles';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#EAE8E3]/50 border-t-2 border-b-2 border-[#111111] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6418] mb-2">
              <span>MY PROCESS</span>
              <span>/</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              How I Make Things Happen.
            </h2>
            <p className="mt-2 text-lg sm:text-xl font-display font-medium text-[#111111]/70">
              A structured, results-driven creative framework.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-hand text-xl font-bold text-[#3467FF] transform -rotate-1">
              From raw concept to refined execution
            </span>
            <StarDoodle size={28} fill="#FF6418" />
          </div>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#111111] -translate-y-8 z-0 doodle-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isFirst = index === 0;
              const isSecond = index === 1;
              const isThird = index === 2;
              const isFourth = index === 3;

              let badgeBg = 'bg-[#FF6418] text-white';
              if (isSecond) badgeBg = 'bg-[#3467FF] text-white';
              if (isThird) badgeBg = 'bg-[#FFD329] text-black';
              if (isFourth) badgeBg = 'bg-[#111111] text-white';

              return (
                <div
                  key={step.number}
                  className="bg-white rounded-3xl border-3 border-[#111111] p-6 sm:p-7 shadow-[6px_6px_0px_#111111] hover:shadow-[8px_10px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl border-2 border-[#111111] flex items-center justify-center font-display font-black text-2xl shadow-[3px_3px_0px_#111111] ${badgeBg}`}
                      >
                        {step.number}
                      </div>

                      {/* Small Doodle Tag */}
                      <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">
                        PHASE 0{index + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-2xl font-display font-black text-[#111111] tracking-tight mb-3">
                      {step.name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Arrow Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#111111]/15 flex items-center justify-between">
                    <span className="font-hand text-lg text-gray-700">
                      {isFirst && 'Research & Goals'}
                      {isSecond && 'Roadmap & Style'}
                      {isThird && 'Production & Polish'}
                      {isFourth && 'Metrics & Feedback'}
                    </span>
                    {index < 3 && (
                      <div className="hidden lg:block transform rotate-12">
                        <ArrowDoodle color="#111111" direction="curved" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
