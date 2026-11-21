import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Sparkles,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  Maximize2,
  CheckCircle,
  Building2,
  Medal,
  Award,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HACKATHON_ACHIEVEMENT } from '../data/portfolioData';
import ImageLightbox from './ImageLightbox';

export default function Achievement() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const triggerCelebration = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981']
    });
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Featured National Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            National Hackathon Championship
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Outperformed over 4,000 teams and 13,000+ competitors nationwide at IBM EGL, Bengaluru.
          </p>
        </div>

        {/* Distinguished Gold/Blue-Bordered Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-[2px] bg-gradient-to-r from-amber-500/40 via-blue-500/40 to-violet-500/40 shadow-2xl shadow-amber-500/5"
        >
          <div className="bg-[#0A0F22]/95 backdrop-blur-xl rounded-[22px] p-6 sm:p-8 lg:p-10">
            
            {/* Top Bar with Badges and Event Title */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Medal className="w-4 h-4 text-amber-400" />
                  {HACKATHON_ACHIEVEMENT.title}
                </span>

                <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  {HACKATHON_ACHIEVEMENT.teamBadge}
                </span>
              </div>

              {/* Celebration Confetti Trigger */}
              <button
                onClick={triggerCelebration}
                className="self-start lg:self-auto px-4 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                title="Celebrate this achievement!"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Celebrate Win 🏆</span>
              </button>
            </div>

            {/* Event Name & Metadata Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                  National Tech Competition
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {HACKATHON_ACHIEVEMENT.event}
                </h3>
                <div className="inline-flex items-center gap-2 text-sm text-blue-300 font-medium mb-4">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span>{HACKATHON_ACHIEVEMENT.collaborator}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 mb-6">
                  <span className="flex items-center gap-1.5 bg-[#0D142A] px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {HACKATHON_ACHIEVEMENT.date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#0D142A] px-3 py-1.5 rounded-lg border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {HACKATHON_ACHIEVEMENT.venue}
                  </span>
                </div>

                {/* Team & Project Box */}
                <div className="p-4 rounded-xl bg-[#0D142B] border border-blue-500/20 mb-6">
                  <div className="text-[11px] font-mono uppercase text-blue-400 tracking-wider mb-1 font-semibold">
                    Winning Entry &amp; Team Attribution
                  </div>
                  <div className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{HACKATHON_ACHIEVEMENT.projectName}</span>
                    <span className="text-xs font-normal text-slate-400 italic">
                      ("{HACKATHON_ACHIEVEMENT.projectTagline}")
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                    <strong className="text-blue-300">{HACKATHON_ACHIEVEMENT.teamName}</strong>
                    <span>• Developed with AI dev platform IBM Bob</span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {HACKATHON_ACHIEVEMENT.description}
                </p>
                <div className="mt-3 text-xs text-amber-300/80 font-mono italic">
                  * Explicitly documented as a Team Achievement by Team Health Express.
                </div>
              </div>

              {/* Right Column: Scale & Context Badges (Exact Event Figures) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                {HACKATHON_ACHIEVEMENT.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0D1429] border border-white/10 hover:border-amber-500/30 transition-colors flex flex-col justify-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Interactive Photo Gallery Slot with Lightbox View */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Event &amp; Trophy Gallery (Click to Inspect)
                  </h4>
                </div>
                <span className="text-xs text-slate-400 font-mono">Interactive Lightbox</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HACKATHON_ACHIEVEMENT.photos.map((photo, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#060913] cursor-pointer hover:border-amber-500/50 transition-all duration-300 shadow-md"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#0A0E1D] flex items-center justify-center">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-[#060913]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                            {photo.title}
                          </div>
                          <div className="text-[11px] text-slate-300 font-mono mt-0.5">
                            {photo.description || photo.caption}
                          </div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-amber-500/20 text-slate-300 group-hover:text-amber-300 transition-colors">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Hackathon Photos */}
      {selectedPhoto && (
        <ImageLightbox
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          image={selectedPhoto.src}
          title={selectedPhoto.title}
          caption={selectedPhoto.description || selectedPhoto.caption}
          alt={selectedPhoto.alt}
        />
      )}
    </section>
  );
}
