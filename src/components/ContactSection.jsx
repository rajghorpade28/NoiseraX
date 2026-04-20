import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:sparemail101.11@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-alabaster border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold-600 mb-4 block">Secure Channel</span>
          <h2 className="text-4xl md:text-6xl font-bold text-onyx-900 tracking-tighter">Initialize <span className="text-gradient-gold italic font-serif">Contact.</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div className="lg:col-span-4 flex flex-col gap-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="premium-card p-8 bg-white flex flex-col justify-between">
              <div>
                <MapPin className="w-6 h-6 text-gold-600 mb-6" />
                <h3 className="text-xl font-bold text-onyx-900 mb-2">Global Nodes</h3>
                <p className="text-sm text-slate-500 font-light">Distributed architecture. Virtual sovereignty.</p>
              </div>
            </div>
            <div className="premium-card p-8 bg-white flex flex-col justify-between">
              <div>
                <Mail className="w-6 h-6 text-gold-600 mb-6" />
                <h3 className="text-xl font-bold text-onyx-900 mb-2">Direct Uplink</h3>
                <p className="text-sm text-slate-500 font-light break-all">sparemail101.11@gmail.com</p>
              </div>
              <button onClick={() => window.location.href='mailto:sparemail101.11@gmail.com'} className="mt-8 text-[10px] font-bold uppercase tracking-widest text-gold-600 flex items-center gap-2 hover:gap-3 transition-all">Direct Protocol <ArrowRight className="w-3 h-3" /></button>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-8 premium-card p-10 bg-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            {!isSent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Identity</label>
                    <input required type="text" placeholder="Full Name" className="luxury-input" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Return Path</label>
                    <input required type="email" placeholder="email@protocol.com" className="luxury-input" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Transmission</label>
                  <textarea required rows="5" placeholder="Encrypt your message here..." className="luxury-input resize-none" value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-gold w-full py-5 justify-center text-sm">
                  {isSubmitting ? 'Processing...' : 'Execute Transmission'} <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-100">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-onyx-900 mb-4">Uplink Success.</h3>
                <p className="text-slate-500 font-light max-w-sm mb-8">Your message has been processed. Our response node will initialize shortly.</p>
                <button onClick={() => setIsSent(false)} className="text-[10px] font-bold uppercase tracking-widest text-gold-600">Send Another</button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
