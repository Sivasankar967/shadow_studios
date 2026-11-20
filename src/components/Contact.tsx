import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  MessageSquare,
  Phone,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { ContactFormData } from '../types';
import { soundFx } from '../utils/sound';
import { MagneticButton } from './MagneticButton';

interface ContactProps {
  prefillService?: string;
  onClearPrefill?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ prefillService, onClearPrefill }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: [],
    budgetTier: '$15K – $30K',
    description: '',
    needsNda: true,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmissionId, setLastSubmissionId] = useState('');

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'UI/UX Design',
    'AI Development',
    'Digital Marketing',
    'SEO Optimization',
    'Branding & Design',
    'Custom Software',
    'Other / Advisory',
  ];

  const budgetTiers = [
    '< $5,000 (MVP)',
    '$5,000 – $15,000',
    '$15,000 – $30,000',
    '$30,000 – $50,000',
    '$50,000+ (Enterprise)',
  ];

  // Pre-fill if requested from service or problem click
  useEffect(() => {
    if (prefillService) {
      setFormData(prev => ({
        ...prev,
        projectType: prev.projectType.includes(prefillService)
          ? prev.projectType
          : [...prev.projectType, prefillService],
        description: prev.description || `Inquiry regarding: ${prefillService}`,
      }));
    }
  }, [prefillService]);

  const toggleProjectType = (type: string) => {
    soundFx.playClick();
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter(t => t !== type)
        : [...prev.projectType, type],
    }));
  };

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText('matheshwaranrx7@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    soundFx.playClick();

    const submissionId = `VAL-${Math.floor(100000 + Math.random() * 900000)}`;
    setLastSubmissionId(submissionId);

    // Save real record to localStorage
    const newInquiry = {
      id: submissionId,
      ...formData,
      timestamp: new Date().toISOString(),
    };

    const inquiries = JSON.parse(localStorage.getItem('valence_project_inquiries') || '[]');
    inquiries.push(newInquiry);
    localStorage.setItem('valence_project_inquiries', JSON.stringify(inquiries));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundFx.playSuccess();
      if (onClearPrefill) onClearPrefill();
    }, 1200);
  };

  const handleWhatsAppChat = (phone: string = '916379424084') => {
    soundFx.playClick();
    const message = encodeURIComponent(
      `Hello Valence Studios team, I would like to discuss a project regarding: ${
        formData.projectType.join(', ') || 'Custom Software Development'
      }`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
          <span>// 09. Initiate Collaboration</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
        >
          HAVE AN IDEA? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
            LET'S MAKE IT HAPPEN.
          </span>
        </motion.h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Tell us about your product vision, timeline, and commercial objectives. We respond within 24 hours with an NDA and preliminary technical estimate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Agency Coordinates & Quick Connect (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Response Guarantee Box */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-lime/30 bg-gradient-to-br from-lime/[0.04] to-transparent space-y-3">
            <div className="flex items-center gap-2 text-lime font-mono text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Response Expectation SLA</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We respond to every qualified inquiry in <span className="text-lime font-mono font-bold">&lt; 24 business hours</span> with a mutual Non-Disclosure Agreement (NDA), high-level architecture thoughts, and pricing guidance.
            </p>
          </div>

          {/* Quick Channels */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">
              Direct Contact Channels:
            </span>

            {/* Email Copy Card */}
            <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:border-lime/40">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-lime">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Official Email</span>
                  <a
                    href="mailto:matheshwaranrx7@gmail.com"
                    className="text-xs sm:text-sm font-mono text-white hover:text-lime transition-colors"
                  >
                    matheshwaranrx7@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-lime hover:border-lime/40 transition-colors"
                title="Copy Email"
                data-interactive="true"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-lime" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Phone Lines & WhatsApp Hub */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-4 group hover:border-lime/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-lime/10 border border-lime/30 text-lime">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-lime uppercase tracking-wider block font-bold">
                      Direct Hotlines // Call & WhatsApp
                    </span>
                    <span className="text-xs font-mono text-zinc-300">
                      Reach Out To Our Leadership Directly
                    </span>
                  </div>
                </div>
              </div>

              {/* Number 1: +91 63794 24084 */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Hotline 01:
                  </span>
                  <a
                    href="tel:+916379424084"
                    className="text-sm font-mono font-bold text-white hover:text-lime transition-colors"
                  >
                    +91 63794 24084
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:+916379424084"
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white hover:border-lime/50 hover:text-lime transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-lime" /> Call
                  </a>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppChat('916379424084')}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3" /> WhatsApp
                  </button>
                </div>
              </div>

              {/* Number 2: +91 63694 55056 */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Hotline 02:
                  </span>
                  <a
                    href="tel:+916369455056"
                    className="text-sm font-mono font-bold text-white hover:text-cyber-cyan transition-colors"
                  >
                    +91 63694 55056
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:+916369455056"
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-cyber-cyan" /> Call
                  </a>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppChat('916369455056')}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3" /> WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Confidentiality */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
            <Lock className="w-5 h-5 text-lime shrink-0" />
            <p className="text-[11px] text-zinc-400 leading-snug">
              All discussions, repository access, and project specifications are protected by standard unilateral or mutual NDA agreements.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Project Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-lime/60 text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-lime/60 text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-lime/60 text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Company / Startup Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Acme Ventures"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-lime/60 text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Project Types (Multi-select) */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Project Type (Select all that apply) *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType.includes(type);
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => toggleProjectType(type)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                            isSelected
                              ? 'bg-lime text-black font-bold shadow-sm'
                              : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.08]'
                          }`}
                          data-interactive="true"
                        >
                          {isSelected && '✓ '}
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Tier Pills */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Estimated Budget Tier *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetTiers.map((tier) => {
                      const isSelected = formData.budgetTier === tier;
                      return (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => {
                            soundFx.playClick();
                            setFormData({ ...formData, budgetTier: tier });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                            isSelected
                              ? 'bg-cyber-cyan text-black font-bold shadow-sm'
                              : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.08]'
                          }`}
                          data-interactive="true"
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Project Details & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about the problem you are solving, core features, target launch date, and any existing design/code..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-lime/60 text-xs font-mono resize-none"
                  />
                </div>

                {/* NDA Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="nda-checkbox"
                    checked={formData.needsNda}
                    onChange={e => setFormData({ ...formData, needsNda: e.target.checked })}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-lime focus:ring-lime/50"
                  />
                  <label htmlFor="nda-checkbox" className="text-xs text-zinc-400 cursor-pointer">
                    Send me a mutual Non-Disclosure Agreement (NDA) before our discovery call.
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-zinc-500">
                    Encrypted transmission to Valence Core Dispatch
                  </span>

                  <MagneticButton
                    type="submit"
                    size="lg"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Transmitting Project Scope...' : 'Submit Project Inquiry'}
                  </MagneticButton>
                </div>
              </form>
            ) : (
              // Submitted Success State
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime/40 flex items-center justify-center mx-auto text-lime shadow-lime-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-3xl font-extrabold text-white">
                    Project Scope Transmitted!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-lime font-mono font-bold">{formData.fullName}</span>. 
                    We have recorded your inquiry and our technical partner will review your requirements and reach out to{' '}
                    <span className="text-lime font-mono">{formData.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-400 max-w-md mx-auto space-y-1">
                  <div>Reference Token: <span className="text-white font-bold">{lastSubmissionId}</span></div>
                  <div>Status: <span className="text-lime">Queued for Lead Engineer Review</span></div>
                </div>

                <MagneticButton
                  size="md"
                  variant="secondary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      companyName: '',
                      projectType: [],
                      budgetTier: '$15K – $30K',
                      description: '',
                      needsNda: true,
                    });
                  }}
                >
                  Send Another Inquiry
                </MagneticButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
