import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeProduct } from './cartSlice.js';
import './index.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const quantities = useSelector((state) => state.cart.quantities);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  const handleRemove = () => {
    //dispatch(removeProduct(product.id));
    alert('Remove functionality will be available soon');
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="card-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <div className="card-controls">
        <select
          value={quantities[product.id]}
          onChange={handleQuantityChange}
          className="quantity-selector"
        >
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <p className="price">
          ${(product.price * quantities[product.id]).toFixed(2)}
        </p>
        <button onClick={handleRemove} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
