import React from 'react';
import { Activity, Image as ImageIcon, Monitor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 py-8 px-6 relative z-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
          <p className="text-gray-500 font-mono text-xs tracking-[0.2em] uppercase">
            &copy; 2026 DATTATRI REDDY
          </p>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex items-center gap-4">
          
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-900/50 text-cyan-400 font-bold text-[11px] tracking-widest uppercase bg-gradient-to-r from-cyan-950/40 via-blue-900/30 to-cyan-950/40 bg-[length:200%_200%] hover:animate-wave transition-all shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Activity size={14} strokeWidth={2.5} />
            Visitors
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-900/50 text-yellow-500 font-bold text-[11px] tracking-widest uppercase bg-gradient-to-r from-yellow-950/40 via-orange-900/30 to-yellow-950/40 bg-[length:200%_200%] hover:animate-wave transition-all shadow-[0_0_15px_rgba(234,179,8,0.05)] hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]">
            <ImageIcon size={14} strokeWidth={2.5} />
            Gallery
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-900/50 text-cyan-400 font-bold text-[11px] tracking-widest uppercase bg-gradient-to-r from-cyan-950/40 via-blue-900/30 to-cyan-950/40 bg-[length:200%_200%] hover:animate-wave transition-all shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Monitor size={14} strokeWidth={2.5} />
            Monitor
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
