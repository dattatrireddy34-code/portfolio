import React from 'react';
import { Home, Bot, Moon } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full flex justify-center py-6 px-4 absolute top-0 z-50">
      <nav className="flex items-center justify-between px-3 py-2.5 w-full max-w-5xl bg-[#0a0a0a] border border-white/5 rounded-full shadow-2xl backdrop-blur-md">
        
        {/* Left Section - Logo */}
        <div className="flex items-center gap-6 pl-4">
          <a href="/" className="text-cyan-400 font-bold text-lg tracking-wide" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }}>
            Dattatri Reddy
          </a>
          
          <div className="flex items-center gap-5">
            {/* Home Icon */}
            <a href="/" className="flex items-center justify-center bg-cyan-950/40 text-cyan-400 p-2.5 rounded-2xl transition-colors hover:bg-cyan-900/50">
              <Home size={18} strokeWidth={2.5} />
            </a>
            {/* Divider */}
            <div className="w-px h-6 bg-gray-800"></div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <ul className="flex items-center gap-8 px-2">
          <li><a href="#projects" className="text-gray-300 hover:text-white text-[11px] font-semibold tracking-[0.15em] transition-colors">PROJECTS</a></li>
          <li><a href="#credentials" className="text-gray-300 hover:text-white text-[11px] font-semibold tracking-[0.15em] transition-colors">CREDENTIALS</a></li>
          <li><a href="#forge" className="text-gray-300 hover:text-white text-[11px] font-semibold tracking-[0.15em] transition-colors">FORGE</a></li>
          <li><a href="#persona" className="text-gray-300 hover:text-white text-[11px] font-semibold tracking-[0.15em] transition-colors">PERSONA</a></li>
        </ul>

        {/* Right Section - Buttons */}
        <div className="flex items-center gap-4 pr-1">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-900/60 text-cyan-400 text-[11px] font-semibold tracking-wider hover:bg-cyan-950/40 transition-colors">
            <Bot size={16} />
            KIRO
          </button>
          
          <button className="flex items-center justify-center p-2.5 rounded-full bg-[#111111] text-gray-400 border border-white/5 hover:text-gray-200 transition-colors">
            <Moon size={16} />
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;
