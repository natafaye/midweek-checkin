import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  const numberOfItems = useSelector(state => state.cart.entities.length)

  return (
    <div>
      <nav className="navbar bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
              Shopping Site
          </Link>
          <div className="float-right"><Link to="/cart" className="text-white">{ numberOfItems } items in cart</Link></div>
        </div>
      </nav>
      <Routes>
        <Route path="cart" element={<ShoppingCartPage/>} />
        <Route path="/" element={<ProductsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
