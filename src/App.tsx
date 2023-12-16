import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Main from './components/pages/main';
import Products from './components/pages/products';
import SingleProduct from './components/singleProduct';
import Categories from './components/pages/categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='categories' element={<Categories />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
