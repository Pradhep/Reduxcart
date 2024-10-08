import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const AppContent = () => {
  const { products, quantities } = useSelector((state) => state.cart);

  const subtotal = products.reduce(
    (total, product) => total + product.price * quantities[product.id],
    0
  );

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="cart-summary">
        <div className="summary-item">
          <span className="label">SUBTOTAL:</span>
          <span className="value">${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span className="label">SHIPPING:</span>
          <span className="value">FREE</span>
        </div>
        <div className="summary-item total">
          <span className="label">TOTAL:</span>
          <span className="value">${subtotal.toFixed(2)}</span>
        </div>
        <div className="promo">
          <a href="#" className="promo-link">
            Get Daily Cash With Nespola Card
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
