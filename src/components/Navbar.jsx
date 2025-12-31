import React from "react";
import UnmaskAILogo from "../assets/UnmaskAI_logo_V2.2.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-brand-rose/20 bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        
        <div className="flex items-center gap-3 cursor-pointer">
          <img 
            src={UnmaskAILogo}
            alt="Unmask AI" 
            className="h-10 w-auto object-contain" 
          />
          
          <span className="text-xl font-black tracking-tight uppercase">
            Unmask <span className="text-brand-rose">AI</span>
          </span>
        </div>

        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-brand-coral/60">
          <a href="#" className="hover:text-brand-cream transition-colors">Docs</a>
          <a 
            href="https://github.com/LuisDeLeon24/Unmask-AI---Backend" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-cream transition-colors"
          >
            Github
          </a>
        </div>

      </div>
    </nav>
  );
}