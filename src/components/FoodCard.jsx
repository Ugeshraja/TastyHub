import "./FoodCard.css";

// FoodCard displays a single food item.
// It receives the food object and an onAddToCart function as props.
function FoodCard({ food, onAddToCart }) {
  const { name, category, price, rating, image } = food;

  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={image} alt={name} />
        <span className="food-category">{category}</span>
      </div>

      <div className="food-card-body">
        <div className="food-card-top">
          <h3>{name}</h3>
          <span className="food-rating">⭐ {rating}</span>
        </div>

        <div className="food-card-bottom">
          <span className="food-price">₹{price}</span>
          <button
            className="btn-add-cart"
            onClick={() => onAddToCart(food)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
