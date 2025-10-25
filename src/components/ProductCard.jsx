// single product card box thing
import { useState } from "react";
import QuantityCounter from "./QuantityCounter.jsx";

export default function ProductCard({ product, addToCart }) {
  const [qty, setQty] = useState(0); // start with zero lol

  return (
    <div className="ProductCard">
      {/* product pic */}
      <img src={product.image} alt={product.productName} />
      <h4>{product.productName}</h4>
      <p>{product.brand}</p>
      <p>{product.quantity}</p>
      <p>{product.price}</p>

      {/* counter for qty */}
      <QuantityCounter value={qty} onChange={setQty} min={0} />

      {/* add btn */}
      <button
        onClick={() => {
          addToCart(product.id, qty);
          setQty(0); // reset back to zero cuz looks nicer
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
