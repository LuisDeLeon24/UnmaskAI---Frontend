import React, { useState } from "react";

export default function ResultCard({ result }) {
  const [activeTab, setActiveTab] = useState("report");

  if (!result?.success) return null;

  const { text, analysis, verification } = result.data;
  const fakePercent = Math.round(analysis.fake_probability * 100);
  const confidencePercent = Math.round(analysis.confidence * 100);
  const evidence = verification?.evidence || [];

  return (
    <div className="bg-white/5 border border-brand-rose/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-rose/10 blur-3xl rounded-full pointer-events-none" />

      <div className="flex justify-between items-center mb-8">
        <div className="flex bg-brand-dark/50 p-1 rounded-xl border border-brand-rose/20">
          <button
            onClick={() => setActiveTab("report")}
            className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              activeTab === "report"
                ? "bg-brand-rose text-brand-cream shadow-lg"
                : "text-brand-cream/40 hover:text-brand-cream"
            }`}
          >
            Report
          </button>
          <button
            onClick={() => setActiveTab("source")}
            className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              activeTab === "source"
                ? "bg-brand-rose text-brand-cream shadow-lg"
                : "text-brand-cream/40 hover:text-brand-cream"
            }`}
          >
            Sources
          </button>
        </div>

        <span className="px-3 py-1 rounded-md bg-brand-rose/10 text-brand-cream/60 text-[9px] font-bold uppercase tracking-widest border border-brand-rose/20 hidden sm:block">
          {activeTab === "report"
            ? "Neural Analysis"
            : `${evidence.length} Matches Found`}
        </span>
      </div>

      <div className="flex-1 animate-in fade-in duration-500">
        {activeTab === "report" ? (
          <div className="space-y-8">
            <div className="text-center">
              <h4 className="text-sm font-bold text-brand-cream/60 uppercase mb-2">
                Fake News Probability
              </h4>
              <div className="text-6xl font-black italic tracking-tighter text-brand-cream mb-4">
                {fakePercent}
                <span className="text-brand-rose text-3xl">%</span>
              </div>
              <ProgressBar value={fakePercent} color="#BA487F" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-coral/60">
                  Detected Bias
                </h4>
                <div className="inline-block px-4 py-2 rounded-xl bg-brand-dark border border-brand-rose/30 text-brand-cream font-bold text-xs capitalize">
                  {analysis.bias}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-coral/60">
                  Confidence
                </h4>
                <div className="text-xl font-bold text-brand-cream italic">
                  {confidencePercent}%
                </div>
                <ProgressBar
                  value={confidencePercent}
                  color="#FF9587"
                  height={4}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-rose mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-rose animate-pulse" />
                  Neural Reasoning
                </h4>
                <div className="text-sm text-brand-cream/70 leading-relaxed bg-brand-rose/5 p-4 rounded-2xl border-l-2 border-brand-rose">
                  {analysis.reasoning}
                </div>
              </div>
              <div className="bg-brand-dark/30 rounded-2xl p-4 border border-white/5 opacity-50">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-rose/60 mb-2">
                  OCR Raw Data
                </h4>
                <p className="text-[11px] text-brand-cream/80 leading-tight italic line-clamp-2 uppercase font-mono">
                  "{text}"
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col">
            {evidence.length === 0 ? (
              <div className="flex-1 flex items-center justify-center italic text-brand-rose/40 text-sm">
                No external matches found in database.
              </div>
            ) : (
              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[480px]">
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
                          {item.source || "Intel_Archive"}
                        </span>
                        <svg
                          className="w-3 h-3 text-brand-rose/40 group-hover:text-brand-coral transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      <h5 className="text-sm text-brand-cream/90 font-bold leading-tight group-hover:text-brand-cream transition-colors">
                        {item.title}
                      </h5>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(186, 72, 127, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

function ProgressBar({ value, color, height = 8 }) {
  return (
    <div
      className="w-full bg-brand-dark rounded-full overflow-hidden border border-white/5"
      style={{ height: `${height}px` }}
    >
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(186,72,127,0.4)]"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
}
