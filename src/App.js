// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ProductDetails from './components/ProductDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
};

export default App;