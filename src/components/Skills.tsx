import React, { useState } from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { StarDoodle, SmileyDoodle, ScratchDoodle } from './Doodles';
import { Sparkles, Filter } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Strategy', 'Content', 'Marketing', 'Technical'];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-20 lg:py-24 bg-[#F5F3EE] relative overflow-hidden">
      
      {/* Background doodles */}
      <div className="absolute top-8 left-10 hidden sm:block opacity-25 pointer-events-none">
        <ScratchDoodle size={36} color="#FF6418" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3467FF] mb-2">
              <span>EXPERTISE</span>
              <span>/</span>
              <span>TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              My Creative Toolkit.
            </h2>
            <p className="mt-2 text-lg sm:text-xl font-display font-medium text-[#111111]/70">
              Interdisciplinary skill set uniting high-level strategy with hands-on production.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-gray-700 hover:text-black hover:bg-[#EAE8E3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Skill Tags Grid */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-start items-center">
          {filteredSkills.map((skill, index) => {
            // Assign varying rotations for a playful, hand-crafted streetwear sticker look
            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
            const rot = rotations[index % rotations.length];

            return (
              <div
                key={skill.name}
                className={`inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-2xl border-3 border-[#111111] shadow-[4px_4px_0px_#111111] transition-all hover:scale-105 hover:shadow-[6px_6px_0px_#111111] cursor-default font-display font-black text-sm sm:text-base tracking-tight ${skill.colorClass} ${rot}`}
              >
                <Sparkles className="w-4 h-4 shrink-0 opacity-80" />
                <span>{skill.name}</span>
                <span className="font-mono text-[10px] uppercase font-bold opacity-75 px-1.5 py-0.5 rounded bg-black/10">
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-[#111111] p-6 shadow-[4px_4px_0px_#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD329] border border-black flex items-center justify-center shrink-0">
              <StarDoodle size={22} fill="#FF6418" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-[#111111]">
                Continuous Learning & Modern Tech Stack
              </h4>
              <p className="text-xs text-gray-600 font-sans">
                Deep expertise across modern editing suites, algorithmic distribution, and generative AI workflows.
              </p>
            </div>
          </div>

          <span className="font-hand text-xl font-bold text-[#FF6418] shrink-0">
            Strategy × Technology × Craft
          </span>
        </div>

      </div>
    </section>
  );
};
