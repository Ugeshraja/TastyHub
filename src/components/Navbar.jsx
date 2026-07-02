import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// Navbar receives cartCount as a prop from App.jsx
// so it can show how many items are currently in the cart.
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo + Restaurant name */}
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.svg" alt="Tasty Hub logo" />
          <span>
            Tasty<span className="logo-highlight">Hub</span>
          </span>
        </Link>

        {/* Navigation links. NavLink automatically adds
            an "active" class to the link matching the current page. */}
        <ul className="navbar-links">
          <li>
            <NavLink to="/" className="nav-link" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="nav-link">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-link">
              Cart
              {/* Show cart count badge only if there are items */}
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
