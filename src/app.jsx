import { useState, useRef } from "react";
import Header from "./components/Header";
import UploadBox from "./components/UploadBox";
import ResultCard from "./components/ResultCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";

const CyberEyeLoader = () => (
  <div className="h-full min-h-[450px] w-full border-2 border-dashed border-brand-rose/20 rounded-3xl bg-brand-dark flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-rose/5 to-transparent h-24 w-full animate-[scan_3s_linear_infinite] z-0" />
    <div className="relative z-10 flex flex-col items-center">
      <div className="relative w-32 h-20">
        <div className="absolute inset-0 border-2 border-brand-rose/40 rounded-[100%] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark z-30 animate-blink" />
          <div className="w-14 h-14 border-4 border-brand-coral rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,149,135,0.3)] animate-pulse">
            <div className="w-5 h-5 bg-brand-cream rounded-full shadow-[0_0_10px_white]" />
          </div>
        </div>
      </div>
      <h3 className="mt-10 text-brand-cream font-black uppercase tracking-[0.4em] text-[10px]">
        Analyzing Matrix
      </h3>
      <p className="mt-2 text-brand-coral/60 text-[8px] font-bold uppercase tracking-widest animate-pulse">
        Interceptando Evidencias...
      </p>
    </div>

    <style jsx>{`
      @keyframes scan {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(400%);
        }
      }
      @keyframes blink {
        0%,
        80%,
        100% {
          height: 0%;
        }
        90% {
          height: 100%;
        }
      }
      .animate-blink {
        animation: blink 4s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analysisSectionRef = useRef(null);

  const scrollToTryout = () => {
    analysisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sampleImages = [
    { id: 1, name: "Real News", url: "/src/assets/Example 3.png" },
    { id: 2, name: "Real News", url: "/src/assets/Example 1.png" },
    { id: 3, name: "Fake News", url: "/src/assets/Example 4.jpeg" },
    { id: 5, name: "Fake News", url: "/src/assets/Example 5.png" },
    { id: 4, name: "Meme News", url: "/src/assets/Example 2.png" },
  ];

  const onFileSelect = (file) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleSelectSample = async (url) => {
    setPreview(url);
    setResult(null);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], "sample.png", { type: "image/png" });
      setImage(file);
    } catch (err) {
      console.error("Error cargando el ejemplo:", err);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  const analyze = async () => {
    if (!image) return;
    setLoading(true);
    setResult(null);
    try {
      const base64Image = (await fileToBase64(image)).split(",")[1];
      const res = await fetch(
        "https://unmask-ai-backend.onrender.com/api/unmask/image/news",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: base64Image }),
        }
      );
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-cream font-sans selection:bg-brand-rose/30">
      <Navbar />

      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-72px)] px-6">
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-rose/10 blur-[120px] pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-brand-coral/5 blur-[120px] pointer-events-none" />
        <div className="text-center">
          <Header onTryoutClick={scrollToTryout} />
        </div>
      </section>

      <main
        ref={analysisSectionRef}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-8 min-h-[60vh]"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-stretch transition-all duration-500">
          <div className="flex flex-col gap-8">
            <div className="bg-white/5 border border-brand-rose/20 p-6 rounded-3xl backdrop-blur-sm shadow-2xl flex-1 flex flex-col justify-between">
              <UploadBox onFileSelect={onFileSelect} preview={preview} />

              <button
                onClick={analyze}
                disabled={!image || loading}
                className={`w-full mt-6 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all shadow-xl
                ${
                  !image || loading
                    ? "bg-brand-rose/10 text-brand-cream/20 cursor-not-allowed opacity-50"
                    : "bg-brand-cream text-brand-dark hover:bg-brand-coral hover:scale-[1.02] active:scale-95 shadow-brand-rose/20"
                }`}
              >
                {loading ? "Thinking..." : "Analyze Image"}
              </button>
            </div>

            <div className="bg-brand-rose/5 border border-brand-rose/10 rounded-2xl p-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-coral mb-4">
                Test Library
              </h3>
              <div className="flex flex-wrap gap-6">
                {sampleImages.map((img) => (
                  <div
                    key={img.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <button
                      onClick={() => handleSelectSample(img.url)}
                      disabled={loading}
                      className={`group relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all
                      ${
                        loading
                          ? "opacity-30"
                          : "border-brand-rose/20 hover:border-brand-coral hover:shadow-[0_0_15px_rgba(186,72,127,0.2)]"
                      }`}
                    >
                      <img
                        src={img.url}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={img.name}
                      />

                      <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-black text-brand-cream uppercase tracking-widest">
                          Click
                        </span>
                      </div>
                    </button>

                    <span className="text-[9px] font-bold text-brand-cream/60 uppercase tracking-widest">
                      {img.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {loading ? (
              <div className="h-full animate-in fade-in zoom-in duration-500">
                <CyberEyeLoader />
              </div>
            ) : result ? (
              <div className="h-full animate-in fade-in slide-in-from-right-8 duration-700">
                <ResultCard result={result} />
              </div>
            ) : (
              <div className="h-full border-2 border-dashed border-brand-rose/20 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-brand-rose/[0.02]">
                <div className="w-16 h-16 border border-brand-rose/10 rounded-full flex items-center justify-center mb-6 opacity-40">
                  <div className="w-2 h-2 bg-brand-coral rounded-full animate-ping" />
                </div>
                <p className="text-brand-coral/40 font-medium italic tracking-wide">
                  Scanner Offline - Waiting for Target
                </p>
                <p className="text-[10px] text-brand-rose/30 uppercase tracking-[0.3em] mt-3">
                  System Ready
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
