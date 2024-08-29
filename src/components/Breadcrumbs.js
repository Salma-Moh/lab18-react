import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css'; // Import the CSS file with the separator styling

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/" className="text-danger">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const isLast = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return isLast ? (
                        <li key={to} className="breadcrumb-item active" aria-current="page">
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </li>
                    ) : (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to} className="text-danger">
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
