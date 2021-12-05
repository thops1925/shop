import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';
function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Products products={products} />
      <Navbar />
    </div>
  );
}

export default App;
