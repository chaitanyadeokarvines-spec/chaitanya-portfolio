import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Youtube, Instagram, Sparkles, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';
import { StarDoodle, ScratchDoodle, SmileyDoodle } from './Doodles';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F5F3EE] relative overflow-hidden">
      
      {/* Background Streetwear Accents */}
      <div className="absolute top-16 right-8 hidden lg:block opacity-20 pointer-events-none">
        <StarDoodle size={48} fill="#3467FF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6418] mb-2">
              <span>PORTFOLIO</span>
              <span>/</span>
              <span>PROVEN EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              Selected Work.
            </h2>
            <p className="mt-2 text-lg sm:text-xl font-display font-medium text-[#111111]/70">
              Creative projects. Real collaborations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-hand text-xl font-bold text-[#FF6418] transform -rotate-1">
              Click any project to inspect full case study
            </span>
            <SmileyDoodle size={30} color="#FF6418" />
          </div>
        </div>

        {/* Desktop: Two-column grid, Mobile: Single-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => {
            const isYouTube = project.externalUrl.includes('youtube.com');

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-3xl border-3 border-[#111111] p-6 sm:p-8 shadow-[6px_8px_0px_#111111] hover:shadow-[10px_14px_0px_#111111] hover:-translate-y-2 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Thumbnail Mockup with brand color blocking */}
                  <div
                    className="relative aspect-[16/10] w-full rounded-2xl border-2 border-[#111111] overflow-hidden mb-6 flex flex-col justify-between p-5"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor} 0%, #111111 120%)`
                    }}
                  >
                    {/* Top Row inside thumbnail */}
                    <div className="flex items-center justify-between">
                      <div className="bg-white/95 text-[#111111] px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 border border-black shadow-xs">
                        {isYouTube ? (
                          <Youtube className="w-3.5 h-3.5 text-red-600" />
                        ) : (
                          <Instagram className="w-3.5 h-3.5 text-pink-600" />
                        )}
                        <span>{isYouTube ? 'YouTube Channel' : 'Instagram Campaign'}</span>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs border border-white/50 text-white flex items-center justify-center font-mono text-xs font-bold">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Middle Graphic Label */}
                    <div className="text-center my-auto">
                      <h4 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight drop-shadow-[2px_2px_0px_#111111]">
                        {project.title}
                      </h4>
                      <p className="text-xs font-mono font-semibold text-white/90 mt-1 uppercase tracking-wider">
                        {project.category}
                      </p>
                    </div>

                    {/* Bottom Row inside thumbnail */}
                    <div className="flex items-center justify-between text-white/90 text-xs font-mono">
                      <span>VERIFIED CASE STUDY</span>
                      <span className="flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Subtle Streetwear Doodle in corner */}
                    <div className="absolute bottom-2 right-2 opacity-30 pointer-events-none">
                      <ScratchDoodle size={32} color="#FFFFFF" />
                    </div>
                  </div>

                  {/* Metadata Row: Category & Creator (Zero-Pill clean text formatting) */}
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">
                    <span className="font-bold text-[#FF6418]">{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-[#111111] tracking-tight group-hover:text-[#FF6418] transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-8 pt-5 border-t-2 border-[#111111]/10 flex items-center justify-between">
                  {/* View Project Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-2 bg-[#111111] text-white group-hover:bg-[#FF6418] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider sticker-btn transition-colors border border-black"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>

                  {/* Direct External Link */}
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gray-600 hover:text-[#111111] hover:underline"
                    title={`Open ${project.title} external link`}
                  >
                    <span>External Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
