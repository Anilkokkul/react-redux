import React from "react";
import { useState } from "react";

const ProductCard = ({ product, handleAddToCart, handleRemoveItem, added }) => {
  const [isAdded, setIsAdded] = useState(added || false);

  const addToCart = (item) => {
    handleAddToCart(item);
    setIsAdded(true);
  };
  const removeItem = (product) => {
    handleRemoveItem(product);
    setIsAdded(false);
  };

  return (
    <>
      <div className="card">
        <img src={product.thumbnail} alt="product" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>Price : ${product.price}</h4>
        <button
          className="button"
          onClick={() =>
            isAdded
              ? removeItem(product)
              : addToCart({ ...product, quantity: 1 })
          }
        >
          {isAdded ? "Remove from cart" : "Add to Cart"}
        </button>
      </div>
    </>
  );
};

export default ProductCard;
