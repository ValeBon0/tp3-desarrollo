// ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2> {/* Asegúrate de que el nombre del producto se muestre */}
            <p className="price">{formatPrice(product.price)}</p> {/* Asegúrate de que el precio se formatee correctamente */}
        </div>
    );
};

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(".", ",");
};

export default ProductItem;