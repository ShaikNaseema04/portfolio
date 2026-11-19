import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060913] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-sm shadow-blue-500/20">
                <div className="w-full h-full bg-[#080D1D] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono font-bold text-sm bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    SN
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-slate-400 font-mono">Aspiring Data Analyst</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              Turning raw data into meaningful insights with analytics and modern AI workflows. National Champion at SkillUp Online Hackathon India 2026.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D1326] border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D1326] border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-[#0D1326] border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                About Me
              </a>
              <a
                href="#achievements"
                onClick={(e) => scrollToSection(e, '#achievements')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Achievements
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, '#skills')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Technical Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Projects &amp; Dashboards
              </a>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, '#experience')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#certifications"
                onClick={(e) => scrollToSection(e, '#certifications')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Certifications
              </a>
              <a
                href="#education"
                onClick={(e) => scrollToSection(e, '#education')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Back to top & Academic verification */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-xl bg-[#0D1326] border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-md mb-4 md:mb-0"
              aria-label="Back to Top"
            >
              <span className="text-xs font-mono">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="text-left md:text-right text-[11px] font-mono text-slate-500">
              <div>B.Tech CSE (2023–2027)</div>
              <div>Academic CGPA: 8.5</div>
              <div className="text-slate-400 mt-1">Andhra Pradesh, India</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; 2026 Shaik Naseema. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
