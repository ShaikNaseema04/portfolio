import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  BarChart2,
  Users,
  Briefcase,
  CheckCircle2,
  Code2,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';

const CATEGORY_TABS = [
  'All Projects',
  'Data Analytics',
  'AI & Prompt Engineering',
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Projects');

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === 'All Projects') return true;
    if (activeTab === 'Data Analytics') return project.category.includes('Data Analytics');
    if (activeTab === 'AI & Prompt Engineering') return project.category.includes('AI') || project.category.includes('Prompt Engineering');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Analytics Dashboards
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Real-world data intelligence systems, BI dashboard suites, and agentic AI applications with clear provenance and team attribution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0D1326] border border-white/10 shadow-lg">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between bg-[#0D1326] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Top Bar: Category & Attribution Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium">
                      {project.category}
                    </span>

                    {/* Attribution Badges */}
                    {project.attribution && (
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-md font-semibold flex items-center gap-1.5 ${
                          project.attributionType === 'team'
                            ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                            : 'bg-indigo-500/15 border border-indigo-500/30 text-indigo-300'
                        }`}
                      >
                        {project.attributionType === 'team' ? (
                          <Users className="w-3 h-3 text-amber-400" />
                        ) : (
                          <Briefcase className="w-3 h-3 text-indigo-400" />
                        )}
                        <span>{project.attribution}</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Tech Stack & Links */}
                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#090E1F] border border-white/5 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] py-2 px-3 rounded-xl bg-[#090E1F] hover:bg-[#121A33] border border-white/10 hover:border-white/25 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400 shrink-0" />
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 whitespace-nowrap shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
