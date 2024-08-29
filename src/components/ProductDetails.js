import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from './useFetch';
import NotFoundPage from './NotFoundPage';
import Breadcrumbs from './Breadcrumbs';

const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL parameters
    const { data: products, loading, error } = useFetch('http://localhost:5000/products');

    if (loading) return <div className="text-center mt-5">Loading...</div>; // Show loading indicator while fetching data
    if (error) return <NotFoundPage message="Failed to load product details. Please try again later." />; // Show error if fetching fails

    const product = products.find(p => p.id === id); // Find the product by matching ID from params

    if (!product) {
        return <NotFoundPage message="Invalid product ID. Product not found." />; // Show 404 page if product not found
    }

    return (
        <div className="container mt-5">
            <h1 className="text-danger">{product.product_name}</h1>
            <Breadcrumbs />
            <p>{product.product_desc}</p>
        </div>
    );
};

export default ProductDetail;



// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useFetch } from './useFetch';
// import Error from './NotFoundPage';
// import Breadcrumbs from './Breadcrumbs';  // Import Breadcrumbs

// const ProductDetail = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const { data: products, loading, error } = useFetch('http://localhost:5000/products');

//     if (loading) return <div className="text-center mt-5">Loading...</div>;
//     if (error) return <Error message="Failed to load product details. Please try again later." />;

//     const product = products.find(p => p.id === parseInt(id));

//     if (!product) {
//         return <Error message="Invalid product ID. Product not found." />;
//     }

//     return (
//         <div className="container mt-5">
//             <Breadcrumbs />  {/* Add Breadcrumbs here */}
//             <h1 className="text-danger">{product.product_name}</h1>
//             <p>{product.product_desc}</p>
//             <button onClick={() => navigate('/')} className="btn btn-danger">Go Back to Home</button>
//         </div>
//     );
// };

// export default ProductDetail;

