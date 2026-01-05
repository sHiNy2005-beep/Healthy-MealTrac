// client/src/components/MealPot.jsx
import React from "react";

export default function MealPot({ items = [], onRemove = () => {}, isDragOver = false }) {
  return (
    <div className="meal-pot-card">
      <h2>Your Pot</h2>

      <div className="pot-visual">
        <div className={`pot-bowl ${isDragOver ? "pot-highlight" : ""}`} />

        {/* pot-contents sits visually over the bowl (chips that represent ingredients) */}
        <div className="pot-contents">
          {items.length === 0 && <div className="pot-empty">Drag or click +Add to drop ingredients here</div>}

          {items.map((it, index) => (
            <div key={it.id} className="pot-chip" role="listitem" aria-label={it.name}>
              <span className="chip-emoji">{it.emoji ?? "🥗"}</span>
              <span className="chip-name">{it.name}</span>
              <button className="chip-remove" onClick={() => onRemove(it.id)} aria-label={`Remove ${it.name}`}>
                ×
              </button>
            </div>
          ))}
        </div>

        {/* fallback textual list (keeps remove behavior accessible) */}
        <ul className="pot-items">
          {items.map((it) => (
            <li key={`list-${it.id}`} className="pot-item">
              <span className="item-name">{it.name}</span>
              <button className="btn-remove" onClick={() => onRemove(it.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
