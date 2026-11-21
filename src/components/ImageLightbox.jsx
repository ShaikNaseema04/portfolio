import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ExternalLink, Calendar, MapPin, Users, Award } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, image, title, caption, alt, eventDetails }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#060913]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-[#0D1326] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0F20]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight">{title}</h4>
                <p className="text-xs text-slate-400 font-mono">SkillUp Online Hackathon India 2026</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Display Area */}
          <div className="relative flex-1 bg-black/50 overflow-auto p-4 sm:p-6 flex items-center justify-center min-h-[300px]">
            <img
              src={image}
              alt={title}
              className="max-h-[62vh] w-auto max-w-full rounded-xl object-contain border border-white/10 shadow-lg"
            />
          </div>

          {/* Footer Metadata */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#0A0F20] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-slate-200">{caption}</p>
              <div className="flex flex-wrap items-center gap-4 mt-1 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" /> October 27, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" /> IBM EGL, Bengaluru
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" /> Team Health Express
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Full Resolution</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
