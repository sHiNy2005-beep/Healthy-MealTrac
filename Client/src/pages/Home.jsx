// client/src/pages/Home.jsx
import React, { useState, useRef } from "react";
import IngredientList from "../components/IngredientList";
import MealPot from "../components/MealPot";
import HealthScore from "../components/HealthScore";
import ingredientsData from "../data/ingredients";

export default function Home() {
  const [potItems, setPotItems] = useState([]);
  const dragCounterRef = useRef(0); // prevents flicker when dragging child elements
  const [isDragOver, setIsDragOver] = useState(false);

  function addToPot(item) {
    if (!potItems.some((it) => it.id === item.id)) {
      setPotItems((prev) => [...prev, item]);
    }
  }

  function removeFromPot(id) {
    setPotItems((prev) => prev.filter((it) => it.id !== id));
  }

  // Drag handlers (use a counter to avoid flicker)
  function handleDragEnter(e) {
    e.preventDefault();
    dragCounterRef.current += 1;
    if (dragCounterRef.current > 0) setIsDragOver(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    dragCounterRef.current -= 1;
    if (dragCounterRef.current <= 0) {
      dragCounterRef.current = 0;
      setIsDragOver(false);
    }
  }

  function handleDragOver(e) {
    e.preventDefault(); // required to allow drop
  }

  function handleDrop(e) {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDragOver(false);

    try {
      const payload = e.dataTransfer.getData("application/json");
      if (!payload) return;
      const { id } = JSON.parse(payload);
      const item = ingredientsData.find((it) => it.id === Number(id));
      if (item) addToPot(item);
    } catch (err) {
      console.warn("drop parse error", err);
    }
  }

  return (
    <section className="home-grid">
      <div className="left-col">
        <h2>Available Ingredients</h2>
        <IngredientList items={ingredientsData} onAdd={addToPot} />
      </div>

      <div
        className={`center-col ${isDragOver ? "drag-over" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <MealPot items={potItems} onRemove={removeFromPot} isDragOver={isDragOver} />
      </div>

      <div className="right-col">
        <HealthScore items={potItems} />
      </div>
    </section>
  );
}
