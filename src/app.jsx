import { useState } from "react";
import Header from "./components/Header";
import UploadBox from "./components/UploadBox";
import ResultCard from "./components/ResultCard";
import logo from "./assets/Unmask AI.png";
import React from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFileSelect = (file) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
}


  const analyze = async () => {
  if (!image) return;

  setLoading(true);

  try {
    const base64Image = (await fileToBase64(image)).split(",")[1];

    const res = await fetch("https://unmask-ai-backend.onrender.com/api/unmask/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageBase64: base64Image,
      }),
    });

    setResult(await res.json());
  } catch (err) {
    console.error(err);
    alert("Analysis failed");
  } finally {
    setLoading(false);
  }
};


  return (
  <div style={styles.container}>


    <Header />

    <div style={styles.main}>
      <div style={styles.left}>
        <UploadBox onFileSelect={onFileSelect} preview={preview} />

        <button
          onClick={analyze}
          disabled={!image || loading}
          style={{
            ...styles.button,
            opacity: !image || loading ? 0.6 : 1,
          }}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      <div style={styles.right}>
        {result ? (
          <ResultCard result={result} />
        ) : (
          <div style={styles.placeholder}>
            Analysis results will appear here
          </div>
        )}
      </div>
    </div>
  </div>
);


}

const styles = {
  container: {
    maxWidth: 1000,
    margin: "60px auto",
    fontFamily: "Inter, Arial, sans-serif",
    position: "relative", // 🔥 CLAVE
  },

  logo: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 80,
    opacity: 0.9,
  },

  main: {
    display: "flex",
    gap: 30,
    marginTop: 40,
    alignItems: "flex-start",
  },

  left: {
    flex: 1,
    minWidth: 280,
    textAlign: "center",
  },

  right: {
    flex: 1,
    minWidth: 280,
  },

  placeholder: {
    padding: 40,
    border: "2px dashed #e5e7eb",
    borderRadius: 12,
    color: "#9ca3af",
    textAlign: "center",
    fontSize: 14,
  },

  button: {
    marginTop: 20,
    padding: "12px 24px",
    fontSize: 16,
    fontWeight: 600,
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};



