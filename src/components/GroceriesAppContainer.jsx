// main container thing for the app
import { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar.jsx";
import ProductsContainer from "./ProductsContainer.jsx";
import CartContainer from "./CartContainer.jsx";

export default function GroceriesAppContainer() {
  // cart starts empty obv
  const [cart, setCart] = useState({});
  // fake username cause why not 
  const [user] = useState("username");

  // add stuff to the cart
  const handleAddToCart = (id, qty) => {
    if (!qty || qty <= 0) {
      alert("pls choose quantity first"); // dont add 0 at all
      return;
    }
    setCart(prev => {
      const oldQty = prev[id]?.quantity || 0;
      return { ...prev, [id]: { productId: id, quantity: oldQty + qty } };
    });
  };

  // change in the quantity
  const handleChangeQuantity = (id, qty) => {
    if (qty < 1) return; // no negative
    setCart(prev => ({ ...prev, [id]: { productId: id, quantity: qty } }));
  };

  // yeet item out of cart
  const handleRemoveFromCart = (id) => {
    const copy = { ...cart };
    delete copy[id];
    setCart(copy);
  };

  // empty the whole cart
  const handleClearCart = () => setCart({});

  // count how many items in total
  const totalItems = Object.values(cart).reduce((sum, c) => sum + c.quantity, 0);

  console.log("cart rn ->", cart); // just checking hehe

  return (
    <div>
      <NavBar username={user} cartCount={totalItems} />
      <div className="GroceriesApp-Container">
        <ProductsContainer products={products} addToCart={handleAddToCart} />
        <CartContainer
          cart={cart}
          products={products}
          updateCartQuantity={handleChangeQuantity}
          removeFromCart={handleRemoveFromCart}
          emptyCart={handleClearCart}
        />
      </div>
    </div>
  );
}
