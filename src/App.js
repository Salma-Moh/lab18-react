import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProductDetail from './components/ProductDetails';
import NotFoundPage from './components/NotFoundPage'; // Assuming you have a NotFoundPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} /> {/* This handles all undefined routes */}
      </Routes>
    </Router>
  );
}

export default App;
