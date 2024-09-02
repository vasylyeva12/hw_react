import React from "react";

const ProductItem = ({ product, onIncrement, onDecrement, onDelete }) => {
  return (
    <div onDoubleClick={() => onDelete(product.id)} className="product-card">
      <h3>{product.name}</h3>
      <p className="product-card__price">Price: {product.price} UAN</p>
      <p>Count: {product.count}</p>
      <button
        className="product-card__btn"
        onClick={() => onIncrement(product.id)}
      >
        +
      </button>
      <button
        className="product-card__btn"
        onClick={() => onDecrement(product.id)}
      >
        -
      </button>
    </div>
  );
};

export default ProductItem;
