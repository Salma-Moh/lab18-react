import React from 'react';
import { useNavigate } from 'react-router-dom';
import cat from './cat.jpg'
import './NotFoundPage.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };

    return (
        <div className="not-found-container">
            <div>
                <h1>Oops</h1>
                <p>We couldn't find the page you were looking for...<br /> Here's an adorable kitten instead..!</p>
                <button className="go-back-button" onClick={goBack}>Go Back</button>
            </div>
            <img
                src={cat}  // Link to an online kitten image
                alt="Cute kitten"
                className="not-found-cat"
            />
        </div>
    );
}

export default NotFoundPage;
