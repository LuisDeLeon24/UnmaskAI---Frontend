import React from "react";

export default function EvidenceList({ evidence }) {
  if (!evidence || evidence.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-white/5 border border-brand-rose/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
        <p className="text-brand-rose/40 italic text-sm text-center">
          No external matches found in the current matrix.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white/5 border border-brand-rose/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-rose/5 blur-3xl rounded-full pointer-events-none" />

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-coral">
          Intelligence Feed
        </h3>
        <span className="px-2 py-0.5 rounded-md bg-brand-rose/20 text-brand-cream/60 text-[8px] font-bold uppercase tracking-widest border border-brand-rose/30">
          {evidence.length} Sources
        </span>
      </div>
      
      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[550px]">
        {evidence.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 bg-brand-dark/40 border border-brand-rose/20 rounded-2xl hover:border-brand-coral hover:bg-brand-dark/60 transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black text-brand-rose uppercase tracking-widest opacity-80 group-hover:text-brand-coral transition-colors">
                  {item.source || "External_Intel"}
                </span>
                <svg className="w-3 h-3 text-brand-rose/40 group-hover:text-brand-coral transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              
              <h5 className="text-sm text-brand-cream/90 font-bold leading-tight group-hover:text-brand-cream transition-colors">
                {item.title}
              </h5>
              
              <div className="mt-1 flex items-center gap-1.5">
                <div className="h-[1px] flex-1 bg-brand-rose/10 group-hover:bg-brand-coral/20 transition-colors" />
                <span className="text-[9px] font-bold text-brand-rose/40 uppercase group-hover:text-brand-coral">
                  Access File
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(186, 72, 127, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 149, 135, 0.5);
        }
      `}</style>
    </div>
  );
}