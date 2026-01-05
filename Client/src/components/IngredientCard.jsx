import React from "react";

export default function IngredientCard({ item, onAdd = () => {} }) {
  function handleDragStart(e) {
    e.dataTransfer.setData("application/json", JSON.stringify({ id: item.id }));
    e.dataTransfer.effectAllowed = "copy";
  }

  return (
    <div
      className={"ingredient-card type-" + item.type.toLowerCase()}
      draggable
      onDragStart={handleDragStart}
      role="button"
      aria-label={`Drag ${item.name}`}
    >
      <div className="card-left">
        <div className="emoji">{item.emoji ?? "🥗"}</div>
      </div>

      <div className="card-main">
        <div className="name">{item.name}</div>
        <div className="type">{item.type}</div>
      </div>

      <div className="card-actions">
        <button className="btn-add" onClick={onAdd} aria-label={`Add ${item.name}`}>
          + Add
        </button>
      </div>
    </div>
  );
}
