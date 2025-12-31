import { useState } from "react";
import React from "react";

export default function UploadBox({ onFileSelect, preview }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onFileSelect(file);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`relative group min-h-[300px] flex flex-col items-center justify-center rounded-3xl border-2 border-dashed transition-all duration-300 overflow-hidden
        ${
          dragging
            ? "border-brand-coral bg-brand-rose/10 scale-[1.02] shadow-[0_0_30px_rgba(255,149,135,0.2)]"
            : "border-brand-rose/30 bg-brand-dark/40 hover:border-brand-rose/60"
        }`}
    >
      {preview ? (
        <div className="relative w-full h-full p-2 animate-in fade-in zoom-in duration-500">
          <img
            src={preview}
            alt="preview"
            className="w-full max-h-[400px] object-contain rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-2 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl backdrop-blur-sm">
            <p className="text-brand-cream font-black text-xs uppercase tracking-widest">
              Click to change source
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center p-10 text-center">
          <div
            className={`mb-6 p-4 rounded-full transition-transform duration-500 ${
              dragging ? "scale-125 bg-brand-coral/20" : "bg-brand-rose/10"
            }`}
          >
            <svg
              className={`w-12 h-12 ${
                dragging ? "text-brand-coral" : "text-brand-rose"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-brand-cream mb-2 tracking-tight">
            {dragging ? "Release to Analyze" : "Target Acquisition"}
          </h3>
          <p className="text-brand-coral/60 text-sm font-medium mb-6">
            Drag & drop news image or{" "}
            <span className="text-brand-coral underline">browse</span>
          </p>

          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-brand-dark border border-brand-rose/20 text-[10px] text-brand-rose/50 font-bold uppercase">
              JPG
            </span>
            <span className="px-2 py-1 rounded bg-brand-dark border border-brand-rose/20 text-[10px] text-brand-rose/50 font-bold uppercase">
              PNG
            </span>
            <span className="px-2 py-1 rounded bg-brand-dark border border-brand-rose/20 text-[10px] text-brand-rose/50 font-bold uppercase">
              WEBP
            </span>
          </div>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => onFileSelect(e.target.files[0])}
        className="absolute inset-0 opacity-0 cursor-pointer z-20"
      />
    </div>
  );
}
