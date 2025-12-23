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
      style={{
        ...styles.box,
        borderColor: dragging ? "#6366f1" : "#ccc",
        background: dragging ? "#eef2ff" : "#fafafa",
      }}
    >
      {preview ? (
        <img src={preview} alt="preview" style={styles.image} />
      ) : (
        <>
          <p style={styles.text}>Drag & drop a news image</p>
          <p style={styles.subtext}>or click to upload</p>
          <input
            type="file"
            accept="image/*"
            style={styles.input}
            onChange={(e) => onFileSelect(e.target.files[0])}
          />
        </>
      )}
    </div>
  );
}

const styles = {
  box: {
    position: "relative",
    border: "2px dashed #ccc",
    borderRadius: 12,
    padding: 30,
    cursor: "pointer",
    transition: "0.2s",
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
  },
  subtext: {
    fontSize: 14,
    color: "#666",
  },
  input: {
    position: "absolute",
    inset: 0,
    opacity: 0,
    cursor: "pointer",
  },
  image: {
    maxWidth: "100%",
    borderRadius: 8,
  },
};
