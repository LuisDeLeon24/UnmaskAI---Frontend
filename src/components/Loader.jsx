export default function CyberEyeLoader() {
  return (
    <div className="h-[400px] w-full border-2 border-dashed border-brand-rose/20 rounded-3xl bg-brand-dark flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="relative w-32 h-20">

        <div className="absolute inset-0 border-2 border-brand-rose/40 rounded-[100%] flex items-center justify-center overflow-hidden">
          
          <div className="absolute inset-0 bg-brand-dark z-30 animate-blink" />

          <div className="w-14 h-14 border-4 border-brand-coral rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,149,135,0.3)] animate-pulse">
            <div className="w-5 h-5 bg-brand-cream rounded-full shadow-[0_0_10px_white]" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-full w-8 h-[1px] bg-brand-rose/30" />
        <div className="absolute top-1/2 right-full w-8 h-[1px] bg-brand-rose/30" />
      </div>

      <p className="mt-10 text-brand-coral font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">
        System Scan in Progress...
      </p>

      <style jsx>{`
        @keyframes blink {
          0%, 80%, 100% { height: 0%; }
          90% { height: 100%; }
        }
        .animate-blink {
          animation: blink 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}