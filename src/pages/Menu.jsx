import { useState } from "react";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";
import "./Menu.css";

// Menu page shows all 12 food items.
// It receives onAddToCart from App.jsx as a prop.
function Menu({ onAddToCart }) {
  // Local state to keep track of which category filter is selected
  const [activeCategory, setActiveCategory] = useState("All");

  // Build a unique list of categories from the foods data,
  // and add "All" at the beginning
  const categories = ["All", ...new Set(foods.map((food) => food.category))];

  // Filter the foods list based on the selected category
  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  return (
    <div className="menu-page container">
      <div className="section-heading">
        <h2>Our Menu</h2>
        <p>Choose from our wide range of delicious meals</p>
      </div>

      {/* Category filter buttons */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of food cards */}
      <div className="food-grid">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
