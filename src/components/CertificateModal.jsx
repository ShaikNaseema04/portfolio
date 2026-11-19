import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Award,
  Calendar,
  Building,
  CheckCircle,
  ExternalLink,
  Download,
  ShieldCheck,
  FileBadge
} from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [certificate]);

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

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#060913]/90 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-[#0D1326] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090E1E]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
                <FileBadge className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight">
                  {certificate.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Viewport */}
          <div className="relative flex-1 bg-black/60 overflow-y-auto p-4 sm:p-8 flex items-center justify-center min-h-[300px]">
            {!imageError ? (
              <img
                src={certificate.image}
                alt={certificate.title}
                onError={() => setImageError(true)}
                className="max-h-[58vh] w-auto max-w-full rounded-xl object-contain border border-white/10 shadow-2xl"
              />
            ) : (
              <div className="p-8 text-center bg-[#0D1326] border border-white/10 rounded-2xl max-w-md">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h5 className="text-lg font-bold text-white mb-1">{certificate.title}</h5>
                <p className="text-xs text-slate-400 mb-4">{certificate.issuer}</p>
                <div className="text-xs text-slate-500 font-mono bg-white/5 p-3 rounded-lg border border-white/5">
                  Drop image to: <code className="text-blue-300">public{certificate.image}</code>
                </div>
              </div>
            )}
          </div>

          {/* Footer Metadata & Skills */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#090E1E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-300 max-w-xl mb-2">
                {certificate.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121A33] border border-white/5 text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5 self-end sm:self-auto">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Full Image</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
