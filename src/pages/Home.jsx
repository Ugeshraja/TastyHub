import { Link } from "react-router-dom";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";
import "./Home.css";

// Home receives onAddToCart as a prop so the "Featured" section
// can also let users add items to the cart directly.
function Home({ onAddToCart }) {
  // Show only the first 4 items from foods.js as "Featured Food"
  const featuredFoods = foods.slice(0, 4);

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="hero-eyebrow">Welcome to</span>
            <h1>
              Tasty<span className="logo-highlight">Hub</span>
            </h1>
            <p>
              Delicious meals, made fresh and delivered fast. From cheesy
              pizzas to comforting biryani — order your favorite food in
              just a few clicks.
            </p>
            <Link to="/menu" className="btn-primary hero-btn">
              Order Now
            </Link>
          </div>

          <div className="hero-image">
            <img src="/images/hero.svg" alt="Delicious food illustration" />
          </div>
        </div>
      </section>

      {/* ===== FEATURED FOOD SECTION ===== */}
      <section className="featured container">
        <div className="section-heading">
          <h2>Featured Dishes</h2>
          <p>Some of our most loved dishes, picked just for you</p>
        </div>

        <div className="food-grid">
          {featuredFoods.map((food) => (
            <FoodCard key={food.id} food={food} onAddToCart={onAddToCart} />
          ))}
        </div>

        <div className="featured-cta">
          <Link to="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
