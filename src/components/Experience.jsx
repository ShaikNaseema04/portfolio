import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  BadgeCheck,
  Clock,
  ArrowRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work &amp; Internship Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Practical industry exposure across remote data analytics roles, business intelligence pipelines, and data-driven product validation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#060913] border-2 border-blue-500 shadow-lg shadow-blue-500/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping opacity-75" />
                    <span className="absolute w-2 h-2 rounded-full bg-blue-500" />
                  </div>

                  {/* Spacer for two-sided alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Experience Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="bg-[#0D1326] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold">
                          {exp.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-blue-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-blue-400 flex items-center gap-1.5 mb-2">
                        <Building className="w-4 h-4 text-blue-400" />
                        <span>{exp.company}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 font-normal">{exp.department}</span>
                      </div>

                      {/* Date & Note */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#090E1D] px-3 py-1.5 rounded-lg border border-white/5 mb-5 w-fit">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.periodNote && (
                        <p className="text-[11px] font-mono text-slate-500 -mt-3 mb-4 italic">
                          * {exp.periodNote}
                        </p>
                      )}

                      {/* Responsibilities */}
                      <div className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Applied */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-2">
                          Core Tools &amp; Methods
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#090E1F] border border-white/5 text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
