import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  MapPin,
  Award,
  BarChart3,
  Cpu,
  Sparkles,
  BookOpen,
  Target,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Shaik Naseema
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Main Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Exact Bio & Core Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#0D1326] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Professional Overview
            </div>
            
            {/* Exact Bio specified in prompt */}
            <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 border-l-4 border-blue-500/70 pl-4 py-1 italic bg-blue-950/20 rounded-r-xl">
              "{PERSONAL_INFO.bio}"
            </blockquote>

            {/* Metadata Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-[#090E1D] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Location</div>
                  <div className="text-xs font-semibold text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090E1D] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Academic Track</div>
                  <div className="text-xs font-semibold text-white">{PERSONAL_INFO.degree}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090E1D] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Academic Standing</div>
                  <div className="text-xs font-semibold text-emerald-400 font-mono">CGPA: {PERSONAL_INFO.cgpa}</div>
                </div>
              </div>
            </div>

            {/* Value Proposition bullets */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Analytical Strengths &amp; Approach
              </h4>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Structured Data Problem Solving:</strong> Transforming ambiguous raw data into clean, normalized datasets with verifiable metrics and KPI dashboards.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Generative AI Acceleration:</strong> Leveraging LLM prompt engineering, few-shot conditioning, and AI workflows for data wrangling, SQL validation, and rapid prototyping.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Team Collaboration &amp; Execution:</strong> Proven team contributor in national competitions and remote enterprise internship sprints.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Areas & Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-[#0D1326] border border-white/10 hover:border-blue-500/30 transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Data Analytics &amp; Visual BI</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialized in exploratory data analysis (EDA), multi-table star schemas, DAX measures, and high-impact Power BI dashboard engineering for business leaders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#0D1326] border border-white/10 hover:border-indigo-500/30 transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Prompt Engineering &amp; AI Integration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Harnessing state-of-the-art LLMs (Gemini, Claude, GPT models) to engineer safe analytical agents, natural language BI queries, and AI-accelerated workflows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#0D1326] border border-white/10 hover:border-emerald-500/30 transition-all shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Target Roles &amp; Availability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Currently open to Data Analyst, Business Intelligence, and Prompt Engineering internships or entry-level opportunities (Remote / Hybrid / On-site).
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
