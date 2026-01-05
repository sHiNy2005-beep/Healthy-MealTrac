import React from "react";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Healthy MealTrac</h1>
        <p className="subtitle">Build a healthy-balanced meal with me!</p>
      </header>

      <main className="app-main">
        <Home />
      </main>

      <footer className="app-footer" style={{ textAlign: "center", marginTop: 18 }}>
        <small>Built with care — Healthy MealTrac</small>
      </footer>
    </div>
  );
}
