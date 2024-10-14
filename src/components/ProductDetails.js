// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';
import ThumbnailGallery from './ThumbnailGallery';
import AttributesTable from './AttributesTable';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
                setProduct(response.data);
                setSelectedImage(response.data.pictures[0].url);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setLoading(false);
            }
        };
        fetchProductDetails();
    }, [id]);

    const handleImageClick = (url) => {
        setSelectedImage(url);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!product) {
        return <div>No se encontraron detalles del producto.</div>;
    }

    return (
        <div className="product-details">
            <div className="main-image">
                <img src={selectedImage} alt={product.title} />
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <div className="price">${product.price}</div>
                    <div className="description">{product.description}</div>
                </div>
            </div>

            <ThumbnailGallery pictures={product.pictures} onImageClick={handleImageClick} selectedImage={selectedImage} />

            <h2>Atributos del Producto</h2>
            {product.attributes && <AttributesTable attributes={product.attributes} />}

            <button className="back-button" onClick={() => navigate('/')}>Volver a la búsqueda</button>
        </div>
    );
};

export default ProductDetails;










