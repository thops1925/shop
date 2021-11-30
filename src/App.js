import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Products, Navbar } from './components';
function App() {
  return (
    <div>
      <Products />
      <Navbar />
    </div>
  );
}

export default App;
