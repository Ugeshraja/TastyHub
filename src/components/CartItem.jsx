import "./CartItem.css";

// CartItem displays a single item inside the Cart page.
// It receives the item data plus functions to update quantity or remove it.
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const { id, name, price, quantity, image } = item;

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />

      <div className="cart-item-info">
        <h4>{name}</h4>
        <span className="cart-item-price">₹{price} each</span>
      </div>

      {/* Quantity controls */}
      <div className="cart-item-quantity">
        <button onClick={() => onDecrease(id)}>−</button>
        <span>{quantity}</span>
        <button onClick={() => onIncrease(id)}>+</button>
      </div>

      {/* Subtotal for this item */}
      <div className="cart-item-subtotal">₹{price * quantity}</div>

      <button className="cart-item-remove" onClick={() => onRemove(id)}>
        ✕
      </button>
    </div>
  );
}

export default CartItem;
