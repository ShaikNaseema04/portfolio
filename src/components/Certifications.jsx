import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Eye,
  Building,
  CheckCircle2,
  FileBadge
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

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
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-[#0D1326] border border-white/10 hover:border-blue-500/40 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10"
            >
              <div>
                {/* Thumbnail Preview Banner */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[16/10] bg-[#080D1D] overflow-hidden border-b border-white/10 cursor-pointer flex items-center justify-center group-hover:opacity-95 transition-opacity"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#060913]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                    <span className="px-3 py-1.5 rounded-xl bg-blue-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Credential</span>
                    </span>
                  </div>

                  {/* Issuer pill top-right */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#060913]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 font-medium">
                      {cert.issuer}
                    </span>
                  </div>
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
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#090E1F] hover:bg-blue-600/15 border border-white/10 hover:border-blue-500/40 text-xs font-semibold text-slate-200 hover:text-blue-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-screen Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
