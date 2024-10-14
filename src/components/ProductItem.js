// ProductItem.js
import React from 'react';

const ProductItem = ({ product, onClick }) => {
    return (
        <div className="product-item" onClick={onClick}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductItem;






