// loops thru all products
import ProductCard from "./ProductCard.jsx";

export default function ProductsContainer({ products, addToCart }) {
  return (
    <div className="ProductsContainer">
      {products.map(prod => (
        <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
      ))}
    </div>
  );
}
