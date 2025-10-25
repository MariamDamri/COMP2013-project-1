// container for cart items
import CartCard from "./CartCard.jsx";

export default function CartContainer({ cart, products, updateCartQuantity, removeFromCart, emptyCart }) {
  const lookup = Object.fromEntries(products.map(p => [p.id, p]));
  const items = Object.values(cart);

  // if cart empty
  if (items.length === 0) {
    return (
      <div className="CartContainer">
        <p>cart empty lol</p>
      </div>
    );
  }

  // total price thing
  const total = items.reduce((sum, item) => {
    const prod = lookup[item.productId];
    const price = Number(prod.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="CartContainer">
      {items.map(it => (
        <CartCard
          key={it.productId}
          product={lookup[it.productId]}
          quantity={it.quantity}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="CartListBtns">
        <button className="RemoveButton" onClick={emptyCart}>Empty Cart</button>
        <button id="BuyButton">Checkout (${total.toFixed(2)})</button>
      </div>
    </div>
  );
}
