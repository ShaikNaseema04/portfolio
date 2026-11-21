import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

// ============================================================================
// WEB3FORMS CONFIGURATION
// Configured to deliver inquiries directly to naseema04122005@gmail.com
// ============================================================================
export const YOUR_WEB3FORMS_ACCESS_KEY = "d92c8170-ef95-4903-a868-612114d8286c";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    setStatus('loading');
    setStatusMessage('Transmitting message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: YOUR_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject.trim() || 'New Portfolio Inquiry - Shaik Naseema',
          message: formData.message,
          from_name: 'Shaik Naseema Portfolio',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent directly to Shaik Naseema.');
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again or reach out directly via email.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Network error occurred. Please check your connection or email directly at naseema04122005@gmail.com.');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Available for Data Analyst, Business Intelligence, and Prompt Engineering internships or full-time graduate roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy to Clipboard */}
            <div className="p-6 rounded-2xl bg-[#0D1326] border border-white/10 hover:border-blue-500/30 transition-all shadow-xl group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email)}
                  className="p-2 rounded-lg bg-[#090E1F] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* LinkedIn Profile Card */}
            <div className="p-6 rounded-2xl bg-[#0D1326] border border-white/10 hover:border-indigo-500/30 transition-all shadow-xl group">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">LinkedIn Profile</div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#0D1326] border border-white/10 hover:border-emerald-500/30 transition-all shadow-xl group">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Location Base</div>
                  <div className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Response Commitment Box */}
            <div className="p-5 rounded-2xl bg-[#080D1D] border border-white/5 text-xs text-slate-400 font-mono leading-relaxed">
              <div className="text-slate-300 font-bold mb-1 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Response Time Guarantee</span>
              </div>
              I typically respond to inquiries within 24 hours. For urgent opportunities, please reach out directly via email or LinkedIn.
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#0D1326] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below to discuss an opportunity, request analytical deliverables, or collaborate.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080D1D] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="priya@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080D1D] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Data Analyst Internship Opportunity / Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080D1D] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello Naseema, I came across your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080D1D] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                />
              </div>

              {/* Status Banner */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-xl text-xs font-mono flex items-start gap-2.5 ${
                    status === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                      : status === 'error'
                      ? 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                      : 'bg-blue-950/60 border border-blue-500/40 text-blue-300'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
              >
                {status === 'loading' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
