import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Building2,
  Award,
  CheckCircle2,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Academic Qualifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Solid foundation in Computer Science, quantitative mathematics, and analytical problem solving.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0D1326] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{edu.status}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>

                  <div className="text-sm font-semibold text-slate-300 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="self-start sm:self-auto">
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/40 text-blue-300 font-mono text-sm font-bold flex items-center gap-2 shadow-sm">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{edu.score}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                {edu.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
