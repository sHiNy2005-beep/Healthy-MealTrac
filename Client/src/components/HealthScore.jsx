import React from "react";

export default function HealthScore({ items = [] }) {
  const types = new Set(items.map((i) => i.type));
  let score = 0;
  if (types.has("Protein")) score += 3;
  if (types.has("Veggie")) score += 2;
  if (types.has("Fiber")) score += 1;
  if (types.has("Carb")) score += 1;
  score = Math.min(score + (items.length > 0 ? 2 : 0), 10);

  return (
    <div className="health-card">
      <h2>Health Score</h2>
      <div className="score-circle">{score}</div>
      <p className="score-desc">Based on variety and balance</p>
    </div>
  );
}
