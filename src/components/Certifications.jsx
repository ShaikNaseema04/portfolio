import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Eye,
  Building,
  CheckCircle2,
  FileBadge,
  FileText,
  FileCheck,
  AlertCircle,
  X,
  Loader2,
  ZoomIn,
  Image as ImageIcon
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [loadingCertId, setLoadingCertId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 5000);
  };

  const handleOpenCertificate = async (cert) => {
    const targetUrl = cert.fileUrl || cert.image;

    // Auto-detect extension: Image (.jpg, .jpeg, .png, .webp, .svg)
    if (/\.(jpg|jpeg|png|webp|svg)$/i.test(targetUrl)) {
      setSelectedCert(cert);
      return;
    }

    // Auto-detect extension: PDF (.pdf) -> perform lightweight HEAD pre-check and open in new tab
    setLoadingCertId(cert.id);
    try {
      const response = await fetch(targetUrl, { method: 'HEAD' });
      const contentType = response.headers.get('content-type') || '';
      // If the file is missing in Vite SPA, it returns 200 with text/html fallback
      const isRealPdf = response.ok && !contentType.includes('text/html');

      if (isRealPdf) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      } else {
        // Fallback check: check if an image version exists for this certificate
        const imageFallbackUrl = targetUrl.replace(/\.pdf$/i, '.png');
        const imgCheck = await fetch(imageFallbackUrl, { method: 'HEAD' });
        if (imgCheck.ok && !imgCheck.headers.get('content-type')?.includes('text/html')) {
          setSelectedCert({ ...cert, fileUrl: imageFallbackUrl });
        } else {
          showToast(`Certificate file not found at ${targetUrl}. Please ensure the file is in public/certificates/.`);
        }
      }
    } catch (err) {
      showToast(`Unable to locate certificate file at ${targetUrl}. Please ensure it is placed in public/certificates/.`);
    } finally {
      setLoadingCertId(null);
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Certifications &amp; Training
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            9 verified credentials spanning enterprise job simulations, Python programming, Power BI, networking, and project management.
          </p>
        </div>

        {/* Certifications 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const isLoading = loadingCertId === cert.id;
            const currentUrl = cert.fileUrl || cert.image;
            const isImage = /\.(jpg|jpeg|png|webp|svg)$/i.test(currentUrl);

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#0D1326] border border-white/10 hover:border-blue-500/40 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10"
              >
                <div>
                  {/* Sleek Dark-Navy Credential Preview Banner */}
                  <div
                    onClick={() => handleOpenCertificate(cert)}
                    className="relative aspect-[16/10] bg-gradient-to-br from-[#0C142B] via-[#080D1F] to-[#050916] overflow-hidden border-b border-white/10 cursor-pointer flex flex-col justify-between p-4 group-hover:border-blue-500/30 transition-all select-none"
                  >
                    {/* Background subtle geometric grid & radial glow */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Top Row: Verification indicator & Issuer Badge */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Verified</span>
                      </span>

                      <span className="px-2.5 py-1 rounded-md bg-[#060913]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 font-medium">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Center Icon Badge with subtle glowing ring */}
                    <div className="relative z-10 flex items-center justify-center my-auto">
                      <div className="w-13 h-13 rounded-2xl bg-[#0F1B3D]/80 border border-blue-500/30 group-hover:border-blue-400/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/15">
                        {isImage ? <FileBadge className="w-6 h-6" /> : <FileCheck className="w-6 h-6" />}
                      </div>
                    </div>

                    {/* Bottom Row: Credential Format Label & Inspect prompt */}
                    <div className="relative z-10 flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-blue-300/90 font-medium bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        {isImage ? (
                          <>
                            <ImageIcon className="w-3 h-3 text-violet-400" />
                            <span>Image Credential</span>
                          </>
                        ) : (
                          <>
                            <FileText className="w-3 h-3 text-blue-400" />
                            <span>PDF Credential</span>
                          </>
                        )}
                      </span>

                      <span className="text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
                        <span>{isImage ? 'Open Lightbox' : 'Open Document'}</span>
                        <span className="text-xs">↗</span>
                      </span>
                    </div>

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{cert.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#090E1F] border border-white/5 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* View Certificate Action Button */}
                <div className="px-5 pb-5">
                  <button
                    onClick={() => handleOpenCertificate(cert)}
                    disabled={isLoading}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#090E1F] hover:bg-blue-600/15 border border-white/10 hover:border-blue-500/40 text-xs font-semibold text-slate-200 hover:text-blue-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98 disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
                        <span>Verifying {isImage ? 'Image' : 'PDF'}...</span>
                      </>
                    ) : isImage ? (
                      <>
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Floating Toast Notification for Missing Files */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0D1326] border border-amber-500/40 text-slate-200 p-4 rounded-2xl shadow-2xl backdrop-blur-xl flex items-start gap-3"
          >
            <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div className="flex-1 text-xs leading-relaxed font-mono">
              <div className="font-bold text-amber-300 mb-0.5">File Notice</div>
              <div>{toastMessage}</div>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Lightbox Modal (for image files) */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
