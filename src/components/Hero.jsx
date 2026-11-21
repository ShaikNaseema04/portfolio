import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Trophy,
  Database,
  BarChart2,
  CheckCircle2,
  FileText,
  AlertCircle
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { PERSONAL_INFO, HACKATHON_ACHIEVEMENT } from '../data/portfolioData';

export default function Hero() {
  const [downloadFeedback, setDownloadFeedback] = useState(false);
  const [resumeError, setResumeError] = useState(null);

  const handleResumeDownload = async (e) => {
    const resumePath = PERSONAL_INFO.resumePdf || '/assets/Shaik_Naseema_Resume.pdf';
    setResumeError(null);

    try {
      const response = await fetch(resumePath, { method: 'HEAD' });
      const contentType = response.headers.get('content-type') || '';
      const isRealPdf = response.ok && !contentType.includes('text/html');

      if (!isRealPdf) {
        e.preventDefault();
        setResumeError(`Resume file not found at ${resumePath}`);
        setTimeout(() => setResumeError(null), 5000);
      } else {
        setDownloadFeedback(true);
        setTimeout(() => setDownloadFeedback(false), 3000);
      }
    } catch (err) {
      // In case of network check failure, let native download proceed
      setDownloadFeedback(true);
      setTimeout(() => setDownloadFeedback(false), 3000);
    }
  };

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background radial glow & subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1326] border border-blue-500/30 text-blue-300 text-xs font-mono mb-6 shadow-sm shadow-blue-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.badge}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
              <span className="block font-mono text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold">
                Portfolio &amp; Work Archive
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {PERSONAL_INFO.headline}
              </span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent mb-4">
              {PERSONAL_INFO.subheadline}
            </h2>

            {/* Tagline & Bio Preview */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium italic border-l-2 border-blue-500/80 pl-4 py-0.5 mb-5 max-w-2xl bg-blue-950/20 rounded-r-lg">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
              Computer Science &amp; Engineering student (2023–2027) with a proven track record in extracting meaningful business intelligence from complex datasets. First Place National Champion at SkillUp Online Hackathon India 2026.
            </p>

            {/* CTAs Button Group */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* Primary CTA: View Projects */}
              <button
                onClick={() => scrollTo('#projects')}
                className="group px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: Download Resume */}
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Shaik_Naseema_Resume.pdf"
                onClick={handleResumeDownload}
                className="group px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-[#0D1326] border border-white/10 hover:border-blue-500/40 hover:bg-[#121A33] hover:text-white transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Tertiary CTA: Contact Me */}
              <button
                onClick={() => scrollTo('#contact')}
                className="px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Resume Error Notification */}
            {resumeError && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-950/60 border border-amber-500/40 px-3.5 py-2 rounded-lg mb-6 shadow-lg"
              >
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{resumeError}</span>
              </motion.div>
            )}

            {/* Resume Toast Confirmation Feedback */}
            {downloadFeedback && !resumeError && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-2 rounded-lg mb-6 shadow-lg"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Resume download initiated (Shaik_Naseema_Resume.pdf)</span>
              </motion.div>
            )}

            {/* Social Links & Metadata Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full">
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0D1326] border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all duration-200 shadow-sm"
                  aria-label="Shaik Naseema on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0D1326] border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all duration-200 shadow-sm"
                  aria-label="Shaik Naseema on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:naseema04122005@gmail.com?subject=Message%20for%20Shaik%20Naseema"
                  title="Email: naseema04122005@gmail.com"
                  aria-label="Send Email to Shaik Naseema"
                  className="p-2.5 rounded-xl bg-[#0D1326] border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all duration-200 shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:block h-4 w-[1px] bg-white/10" />

              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-[#0D1326] border border-white/5 text-slate-300">
                  CGPA: <strong className="text-white">{PERSONAL_INFO.cgpa}</strong>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#0D1326] border border-white/5 text-slate-300">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Framed Portrait with Subtle Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient Multi-layer Glow */}
            <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-violet-600/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/5 border border-white/15 shadow-2xl backdrop-blur-xl">
              
              {/* Inner Frame */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#0A0F21] aspect-[4/5] flex items-center justify-center border border-blue-500/30 ring-1 ring-blue-500/20 shadow-inner">
                
                {/* Official Portrait Photo */}
                <img
                  src={PERSONAL_INFO.profileImage || "/assets/profile.jpg"}
                  alt="Shaik Naseema – Aspiring Data Analyst"
                  className="w-full h-full object-cover object-top rounded-[19px] transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060913]/90 via-[#060913]/40 to-transparent pointer-events-none" />

                {/* Bottom Frame Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0D1326]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Data Analytics &amp; AI</div>
                      <div className="text-[10px] text-slate-400 font-mono">Python • SQL • Power BI</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      CGPA 8.5
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top-Left: National Hackathon */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-3 -left-3 sm:-left-5 bg-[#0D1326]/95 border border-amber-500/40 rounded-xl px-3.5 py-2 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-mono">
                    1st Place National
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium">
                    SkillUp Online 2026
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge Bottom-Right: Prompt Engineering */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-3 -right-3 sm:-right-4 bg-[#0D1326]/95 border border-indigo-500/40 rounded-xl px-3.5 py-2 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-indigo-300">Prompt Engineering</div>
                  <div className="text-[10px] text-slate-400 font-mono">AI Solutions &amp; Tools</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
