import React from "react";

export default function ResultCard({ result }) {
  if (!result?.success) return null;

  const { text, analysis } = result.data;
  const fakePercent = Math.round(analysis.fake_probability * 100);
  const confidencePercent = Math.round(analysis.confidence * 100);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Analysis Result</h3>

      {/* Extracted text */}
      <div style={styles.section}>
        <h4>Extracted Text</h4>
        <p style={styles.text}>{text}</p>
      </div>

      {/* Fake probability */}
      <div style={styles.section}>
        <h4>Fake News Probability</h4>
        <ProgressBar value={fakePercent} color="#ef4444" />
        <span>{fakePercent}%</span>
      </div>

      {/* Bias */}
      <div style={styles.section}>
        <h4>Detected Bias</h4>
        <span style={styles.badge}>{analysis.bias}</span>
      </div>

      {/* Confidence */}
      <div style={styles.section}>
        <h4>Model Confidence</h4>
        <ProgressBar value={confidencePercent} color="#6366f1" />
        <span>{confidencePercent}%</span>
      </div>

      {/* Reasoning */}
      <div style={styles.section}>
        <h4>AI Reasoning</h4>
        <p style={styles.reasoning}>{analysis.reasoning}</p>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function ProgressBar({ value, color }) {
  return (
    <div style={styles.progressBg}>
      <div
        style={{
          ...styles.progressFill,
          width: `${value}%`,
          background: color,
        }}
      />
    </div>
  );
}

/* ---------- Styles ---------- */

const styles = {
  card: {
    marginTop: 30,
    padding: 24,
    background: "#ffffff",
    borderRadius: 14,
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    textAlign: "left",
  },
  title: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  text: {
    background: "#f9fafb",
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
  },
  reasoning: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 1.5,
  },
  badge: {
    display: "inline-block",
    padding: "6px 12px",
    background: "#e0e7ff",
    color: "#3730a3",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
  },
  progressBg: {
    width: "100%",
    height: 10,
    background: "#e5e7eb",
    borderRadius: 999,
    overflow: "hidden",
    margin: "6px 0",
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
    transition: "width 0.3s ease",
  },
};
