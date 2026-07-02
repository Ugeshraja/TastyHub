import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import "./App.css";

// App.jsx is the root component.
// It holds the cart state and passes data + functions down to pages
// via props. This is called "lifting state up" - a common React pattern.
function App() {
  // cartItems is an array of food objects, each with an extra "quantity" field
  const [cartItems, setCartItems] = useState([]);

  // ADD an item to the cart.
  // If the item already exists, just increase its quantity by 1.
  // Otherwise, add it as a new item with quantity 1.
  const handleAddToCart = (food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === food.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevItems, { ...food, quantity: 1 }];
    });
  };

  // INCREASE quantity of a specific cart item
  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // DECREASE quantity of a specific cart item.
  // If quantity reaches 0, remove the item from the cart.
  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE an item completely from the cart
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Total number of items in the cart (used for the navbar badge)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />

      <main>
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route
            path="/menu"
            element={<Menu onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} TastyHub. Made with ❤️ for food lovers.</p>
      </footer>
    </div>
  );
}

export default App;
