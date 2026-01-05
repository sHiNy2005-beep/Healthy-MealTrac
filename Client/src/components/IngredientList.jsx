import React from "react";
import IngredientCard from "./IngredientCard";

export default function IngredientList({ items = [], onAdd = () => {} }) {
  return (
    <div className="ingredient-list">
      {items.map((item) => (
        <IngredientCard key={item.id} item={item} onAdd={() => onAdd(item)} />
      ))}
    </div>
  );
}
