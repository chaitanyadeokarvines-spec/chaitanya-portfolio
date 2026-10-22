import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle, Edit3, Save, Video, Tag, Calendar, UserCheck } from 'lucide-react';
import { ProjectCaseStudy } from '../types/portfolio';
import { StarDoodle, SmileyDoodle } from './Doodles';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Allow live editing of custom case study notes so Chaitanya can update in real-time
  const storageKey = `portfolio_case_study_notes_${project.id}`;
  const [customNotes, setCustomNotes] = useState<string>(() => {
    return localStorage.getItem(storageKey) || '';
  });
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleSaveNotes = () => {
    localStorage.setItem(storageKey, customNotes);
    setIsEditingNotes(false);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F5F3EE] border-3 border-[#111111] rounded-3xl max-w-4xl w-full my-8 shadow-[10px_12px_0px_#111111] overflow-hidden text-[#111111] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#111111] text-white px-6 py-4 flex items-center justify-between border-b-3 border-[#111111]">
          <div className="flex items-center gap-3">
            <span
              className="w-4 h-4 rounded-full border border-white"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="font-mono text-xs uppercase tracking-wider font-bold">
              CASE STUDY 0{project.id === 'hgpworld' ? '1' : project.id === 'worldatlas' ? '2' : project.id === 'aye-mumbhai' ? '3' : '4'}
            </span>
            <span className="text-gray-400">/</span>
            <span className="text-xs font-mono text-gray-300 hidden sm:inline">{project.client}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-white bg-white/10 hover:bg-[#FF6418] hover:border-black flex items-center justify-center transition-colors text-white hover:text-white"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 space-y-10">
          
          {/* Hero Banner inside Case Study */}
          <div className="border-b-2 border-[#111111] pb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#111111] text-white border border-black">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-[#111111] border border-black">
                Featured Collaboration
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black text-[#111111] tracking-tight">
              {project.title}
            </h1>

            <p className="mt-3 text-lg text-gray-700 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Quick Metadata Strip */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#111111]/15 text-xs font-mono">
              <div>
                <span className="text-gray-500 block uppercase">Client / Channel</span>
                <span className="font-bold text-sm text-[#111111]">{project.client}</span>
              </div>
              <div>
                <span className="text-gray-500 block uppercase">Role</span>
                <span className="font-bold text-sm text-[#111111]">{project.caseStudy.role}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-gray-500 block uppercase">Live Channel / Feed</span>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-[#FF6418] hover:underline inline-flex items-center gap-1"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 01: Project Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FF6418] mb-2">
              <span>01</span>
              <span>·</span>
              <span>Project Overview</span>
            </div>
            <p className="text-base text-gray-800 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Section 02 & 03: Client & Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#3467FF] mb-2">
                <span>02</span>
                <span>·</span>
                <span>Client / Creator Context</span>
              </div>
              <h4 className="text-xl font-display font-bold text-[#111111] mb-2">
                {project.client}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Strategic digital presence and media creation aligned with {project.client}'s target demographic, tone, and long-term channel positioning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FFD329] mb-2 text-amber-700">
                <span>03</span>
                <span>·</span>
                <span>Project Objectives</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                {project.caseStudy.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6418] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 04 & 05: My Role & Creative Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#EAE8E3] p-6 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                <UserCheck className="w-4 h-4 text-[#FF6418]" />
                <span>04 · My Specific Role</span>
              </div>
              <p className="text-base font-bold text-[#111111] mb-2">
                {project.caseStudy.role}
              </p>
              <p className="text-xs text-gray-700 leading-relaxed font-mono">
                Responsible for editorial direction, pacing formulation, timeline editing, graphic hooks, and final packaging.
              </p>
            </div>

            <div className="bg-[#EAE8E3] p-6 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                <Sparkles className="w-4 h-4 text-[#3467FF]" />
                <span>05 · Creative Approach</span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                {project.caseStudy.creativeApproach}
              </p>
            </div>
          </div>

          {/* Section 06: Work Showcase Visuals */}
          <div className="bg-[#111111] text-white p-6 sm:p-8 rounded-3xl border-3 border-[#111111] shadow-[6px_8px_0px_#3467FF]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FFD329]">
                <Video className="w-4 h-4" />
                <span>06 · Work Showcase & Media Representation</span>
              </div>
              <span className="text-xs font-mono text-gray-400">Authentic Simulation</span>
            </div>

            <p className="text-sm text-gray-300 mb-6">
              {project.caseStudy.workShowcaseDescription}
            </p>

            {/* Video Suite / Studio Mockup */}
            <div className="bg-[#1A1A1A] rounded-2xl border-2 border-white/20 p-5 overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-2 text-white font-bold">{project.title} // Content Cut</span>
                </div>
                <span className="text-[11px] font-mono text-[#FF6418]">4K UHD 60FPS</span>
              </div>

              <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 flex flex-col items-center justify-center p-6 text-center border border-white/10 relative overflow-hidden">
                <div className="absolute top-3 left-3 bg-black/60 px-2.5 py-1 rounded text-[11px] font-mono text-white">
                  {project.category}
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FF6418] text-white flex items-center justify-center border-2 border-white shadow-lg mb-3">
                  <Video className="w-7 h-7" />
                </div>
                <h5 className="text-xl font-display font-black text-white">{project.title}</h5>
                <p className="text-xs text-gray-400 font-mono mt-1 max-w-md">
                  View the live released creative work directly on the official channel.
                </p>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-bold text-xs uppercase hover:bg-[#FFD329] transition-colors"
                >
                  <span>Open Official Content Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 07: Outcome & Learnings */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FF6418] mb-2">
              <span>07</span>
              <span>·</span>
              <span>Outcome & Strategic Learnings</span>
            </div>
            <p className="text-base text-gray-800 leading-relaxed">
              {project.caseStudy.outcomeAndLearnings}
            </p>
            <div className="mt-4 p-3 rounded-lg bg-[#F5F3EE] border border-black/15 text-xs text-gray-600 font-mono">
              Note: Respecting creator confidentiality and analytics policies; unverified metrics are not fabricated.
            </div>
          </div>

          {/* Section 08: External Project Link */}
          <div className="bg-[#FF6418] text-white p-6 rounded-2xl border-3 border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-black font-bold">
                08 · External Project Verification
              </div>
              <div className="text-xl font-display font-black text-white mt-1">
                Explore {project.title} Live
              </div>
            </div>
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white hover:bg-white hover:text-black rounded-full font-bold text-xs uppercase tracking-wider sticker-btn transition-colors shrink-0"
            >
              <span>Visit Official Link</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Editable Project Notes Section for Chaitanya */}
          <div className="border-2 border-dashed border-[#111111] p-5 rounded-2xl bg-white/70">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-700 uppercase">
                <Edit3 className="w-3.5 h-3.5 text-[#FF6418]" />
                <span>Custom Project Notes (Stored in your browser)</span>
              </div>
              {savedFeedback && (
                <span className="text-xs font-bold text-emerald-600 font-mono">
                  Saved successfully!
                </span>
              )}
            </div>

            {isEditingNotes ? (
              <div className="space-y-3">
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Add specific highlights, client praise, or milestone notes for this project..."
                  rows={4}
                  className="w-full text-xs p-3 rounded-xl border-2 border-[#111111] bg-white focus:outline-hidden font-mono"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingNotes(false)}
                    className="px-3 py-1.5 text-xs font-bold border border-black rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveNotes}
                    className="px-4 py-1.5 text-xs font-bold bg-[#111111] text-white rounded-lg hover:bg-[#FF6418]"
                  >
                    Save Notes
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-xs text-gray-600 italic">
                  {customNotes || 'No custom notes added yet. Click edit to record your private client insights or additional milestones.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsEditingNotes(true)}
                  className="mt-2 text-xs font-bold text-[#FF6418] hover:underline flex items-center gap-1 font-mono"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>{customNotes ? 'Edit Notes' : '+ Add Note'}</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-[#EAE8E3] px-6 py-4 border-t-2 border-[#111111] flex items-center justify-between text-xs font-mono">
          <span className="font-bold">CHAITANYA DEOKAR · CREATIVE CASE STUDY</span>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-[#111111] hover:text-[#FF6418] underline"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
