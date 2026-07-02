import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";

// Cart page receives the cart state and update functions as props from App.jsx
function Cart({ cartItems, onIncrease, onDecrease, onRemove }) {
  // Local state just to show/hide the "order placed" success message
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    // Since there's no backend, we simply show a success message
    setOrderPlaced(true);
  };

  // If the cart is empty, show a friendly empty state
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="cart-page container empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/menu" className="btn-primary">
          Browse Menu
        </Link>
      </div>
    );
  }

  // If the order has just been placed, show a success message
  if (orderPlaced) {
    return (
      <div className="cart-page container empty-cart">
        <h2 className="success-message">✅ Your order has been placed successfully!</h2>
        <p>Thank you for ordering with TastyHub. Your food is on the way!</p>
        <Link to="/menu" className="btn-primary">
          Order More
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <div className="section-heading">
        <h2>Your Cart</h2>
        <p>Review your items before placing the order</p>
      </div>

      {/* List of cart items */}
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>

      {/* Order summary */}
      <div className="cart-summary">
        <div className="cart-total-row">
          <span>Total</span>
          <span className="cart-total-amount">₹{totalPrice}</span>
        </div>
        <button className="btn-primary place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
