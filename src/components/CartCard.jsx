// one single thing in the cart
import QuantityCounter from "./QuantityCounter.jsx";
export default function CartCard({ product, quantity, updateCartQuantity, removeFromCart }) {
  const price = Number(product.price.replace("$", ""));
  const subtotal = (price * quantity).toFixed(2);

  return (
    <div className="CartCard">
      <img src={product.image} alt={product.productName} />
      <div className="CartCardInfo">
        <h4>{product.productName}</h4>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <p>Total: ${subtotal}</p>
      </div>

      {/* counter inside cart */}
      <QuantityCounter
        value={quantity}
        onChange={q => updateCartQuantity(product.id, q)}
        min={1}
      />

      {/* remove btn */}
      <button className="RemoveButton" onClick={() => removeFromCart(product.id)}>
        Remove
      </button>
    </div>
  );
}
