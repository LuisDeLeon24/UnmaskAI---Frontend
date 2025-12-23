import React from "react";

export default function Header() {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>Unmask AI</h1>
      <p style={styles.subtitle}>
        AI-powered fake news and bias detection
      </p>
    </div>
  );
}

const styles = {
  header: {
    marginBottom: 30,
  },
  title: {
    margin: 0,
    fontSize: 36,
    fontWeight: 700,
  },
  subtitle: {
    marginTop: 8,
    color: "#666",
    fontSize: 16,
  },
};
