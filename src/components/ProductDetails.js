// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details-container">
            <div className="navigation-buttons">
                <Link to="/" className="nav-button left-button">Home</Link>
                <Link to="/help" className="nav-button right-button">Help Center</Link>
            </div>
            <div className="product-details">
                <img src={product.imageUrl} alt={product.name} className="product-img" />
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="product-price">Price: {product.price}</p>
                    <p className="product-description">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
