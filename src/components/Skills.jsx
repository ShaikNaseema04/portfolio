import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Sparkles,
  Wrench,
  Terminal,
  Database,
  Code2,
  Check,
  Cpu,
  Layers,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICONS = {
  BarChart3: BarChart3,
  Sparkles: Sparkles,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Categorized technical stack focused on quantitative analytics, data modeling, and modern AI workflows.
          </p>
          <div className="mt-2 text-xs font-mono text-slate-500">
            Structured competency cards without arbitrary percentage bars.
          </div>
        </div>

        {/* 3 Structured Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bento Card 1: Data Analytics & BI (Wider card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 xl:col-span-7 bg-[#0D1326] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Data Analytics &amp; Business Intelligence</h3>
                    <p className="text-xs text-slate-400">Data Modeling, ETL, Statistical EDA &amp; Visualization</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono">
                  Core Stack
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Hands-on analytical toolset utilized to clean, transform, model, and visualize data across real-world business scenarios, internships, and national hackathon solutions.
              </p>

              {/* Skills Interactive Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {SKILL_CATEGORIES[0].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group px-3 py-2 rounded-xl bg-[#090E1F] border border-white/10 hover:border-blue-500/40 hover:bg-[#121A36] transition-all flex items-center gap-2"
                  >
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/20">
                      {skill.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" /> 16 Analytical Competencies
              </span>
              <span>Power BI • SQL • Python • Excel</span>
            </div>
          </motion.div>

          {/* Right Column Bento Stack: AI Workflows + Developer Tools */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
            
            {/* Bento Card 2: Prompt Engineering & AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0D1326] border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Prompt Engineering &amp; AI</h3>
                      <p className="text-xs text-slate-400">AI Tooling &amp; Agentic Workflows</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                    AI Workflows
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  Leveraging cutting-edge generative AI models and structured prompt design to engineer semantic engines, speed up code generation, and automate analytical workflows.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {SKILL_CATEGORIES[1].skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group px-3 py-2 rounded-xl bg-[#090E1F] border border-white/10 hover:border-violet-500/40 hover:bg-[#15122E] transition-all flex items-center gap-2"
                    >
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-violet-500/15 text-violet-300 border border-violet-500/20">
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-violet-400" /> Prompt &amp; Model Integration
                </span>
                <span>Gemini • Antigravity • ChatGPT</span>
              </div>
            </motion.div>

            {/* Bento Card 3: Developer & Analytics Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0D1326] border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Developer &amp; Analytics Tools</h3>
                      <p className="text-xs text-slate-400">Version Control &amp; Interactive Notebooks</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    Tooling
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {SKILL_CATEGORIES[2].skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group px-3 py-2 rounded-xl bg-[#090E1F] border border-white/10 hover:border-emerald-500/40 hover:bg-[#0D1F1A] transition-all flex items-center gap-2"
                    >
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Environment &amp; VCS
                </span>
                <span>Git • GitHub • VS Code • Jupyter</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
