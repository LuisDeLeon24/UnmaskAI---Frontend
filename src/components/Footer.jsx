import React from "react";
// Importamos los iconos de lucide-react (asegúrate de tenerlo instalado: npm install lucide-react)
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-rose/10 py-12 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-brand-coral/40 text-sm font-medium">
            © 2025 UnmaskAI
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-rose/60">
            Developed by <span className="text-brand-cream">Luis De León</span>
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/LuisDeLeon24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-rose/60 hover:text-brand-coral transition-all duration-300"
          >
            <Github size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(255,149,135,0.6)]" />
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">GitHub</span>
          </a>

          <div className="h-4 w-[1px] bg-brand-rose/10" /> {/* Separador visual */}

          <a 
            href="https://www.linkedin.com/in/luis-de-león" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-rose/60 hover:text-brand-coral transition-all duration-300"
          >
            <Linkedin size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(255,149,135,0.6)]" />
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">LinkedIn</span>
          </a>

          <div className="h-4 w-[1px] bg-brand-rose/10" />

          <a 
            href="https://luisdeleon.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-rose/60 hover:text-brand-coral transition-all duration-300"
          >
            <ExternalLink size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(255,149,135,0.6)]" />
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Portfolio</span>
          </a>
        </div>

      </div>
    </footer>
  );
}