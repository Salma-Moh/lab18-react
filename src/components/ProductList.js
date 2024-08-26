// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="product-list-container">
            <div className="product-list-header">
                <h1>Product List</h1>
                <Link to="/help" className="help-center-button">Help Center</Link>
            </div>
            <div className="products">
                {products.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
