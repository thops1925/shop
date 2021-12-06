import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Products, Navbar, Cart } from './components';
import { commerce } from './lib/commerce';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} addToCart={handleAddToCart} />
      <Cart item={cart} />
    </div>
  );
}

export default App;
