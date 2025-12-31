import React from "react";

export default function Header({ onTryoutClick }) {
  return (
    <div className="relative space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-rose/10 border border-brand-rose/20 text-brand-coral text-xs font-black uppercase tracking-[0.2em]">
          Next-Gen Analysis
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
          <span className="bg-gradient-to-r from-brand-cream via-brand-coral to-brand-rose bg-clip-text text-transparent">
            Unmask AI
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-brand-cream/60 font-medium leading-relaxed">
          AI-powered <span className="text-brand-coral">fake news</span> and{" "}
          <span className="text-brand-coral">bias detection</span>. Unmasking reality in a world of synthetic media
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={onTryoutClick}
          className="px-8 py-4 bg-brand-cream text-brand-dark rounded-full font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-rose/10"
        >
          Get started
        </button>

        <a
          href="https://github.com/LuisDeLeon24/Unmask-AI---Backend"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-brand-rose/30 text-brand-cream rounded-full font-black uppercase tracking-widest hover:bg-brand-rose/10 transition-all group"
        >
          <svg
            className="w-5 h-5 fill-current text-brand-rose group-hover:text-brand-coral transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
      <div className="flex justify-center pt-8">
        <div className="w-12 h-1 bg-gradient-to-r from-brand-rose to-transparent rounded-full animate-pulse" />
      </div>
    </div>
  );
}
