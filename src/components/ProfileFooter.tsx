"use client";

import { motion } from "framer-motion";

export function ProfileFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white border-t border-slate-200 mt-12 py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif text-slate-900 mb-3">BE GREAT</h2>
            <p className="text-[10px] text-[#B08D28] tracking-[0.2em] uppercase font-medium">Offline / Online Editor</p>
          </div>

          <div className="md:col-span-1 flex flex-col gap-6 text-[13px] font-light text-slate-600 leading-relaxed">
            <p>
              Specializing in dynamic music videos, rhythmic commercial cuts, and seamless visual storytelling.
            </p>
          </div>

          <div className="md:col-span-1 flex flex-col gap-4 text-[12px] font-light">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-slate-400 uppercase tracking-[0.1em] text-[10px] font-medium">Location</span>
              <span className="text-slate-700">Bangkok, TH</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-slate-400 uppercase tracking-[0.1em] text-[10px] font-medium">Software</span>
              <span className="text-slate-700">Premiere / Resolve</span>
            </div>
            <div className="flex justify-between items-center pb-3">
              <span className="text-slate-400 uppercase tracking-[0.1em] text-[10px] font-medium">Email</span>
              <a href="mailto:greatwutikorn@gmail.com" className="text-slate-700 hover:text-[#B08D28] transition-colors">greatwutikorn@gmail.com</a>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col items-start md:items-end justify-between">
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] flex items-center gap-3 group relative cursor-help font-medium">
              <span className="absolute -top-8 left-0 md:left-auto md:right-0 bg-slate-800 text-white px-3 py-1.5 rounded text-[9px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Memory usage: 144 MB</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              System Status
            </div>
            
            <a href="#" className="mt-12 md:mt-0 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#B08D28] hover:text-slate-900 transition-colors group font-medium">
              Download CV
              <span className="transform group-hover:translate-x-1 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </motion.footer>
  );
}
