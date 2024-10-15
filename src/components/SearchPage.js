// SearchPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './SearchPage.css';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoriesVisible, setCategoriesVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const categories = ['Electrónica', 'Ropa', 'Hogar', 'Juguetes', 'Deportes', 'Automotriz'];

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`);
            setProducts(response.data.results);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleProductClick = (id) => {
        setSelectedProduct(id);
        navigate(`/product/${id}`);
    };

    const toggleCategories = () => {
        setCategoriesVisible(!categoriesVisible);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSearchTerm(category);
        handleSearch();
    };

    const handleBackToSearch = () => {
        setSelectedCategory('');
        setSearchTerm('');
        setProducts([]);
        setSelectedProduct(null);
    };

    return (
        <div className="search-page">
            <h1>Buscar Productos</h1>
            <div className="search-controls">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar productos..."
                />
                <button onClick={handleSearch}>Buscar</button>
                <button onClick={toggleCategories}>
                    {categoriesVisible ? 'Ocultar Categorías' : 'Mostrar Categorías'}
                </button>
            </div>

            {categoriesVisible && (
                <div className="categories">
                    {categories.map((category) => (
                        <button key={category} onClick={() => handleCategorySelect(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {selectedCategory && <h2>Categoría Seleccionada: {selectedCategory}</h2>}

            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item" onClick={() => handleProductClick(product.id)}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <button onClick={handleBackToSearch} style={{ marginTop: '20px' }}>
                    Volver a la búsqueda
                </button>
            )}
        </div>
    );
};

export default SearchPage;