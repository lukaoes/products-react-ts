import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Main from './components/pages/main';
import Products from './components/pages/products';
import SingleProduct from './components/singleProduct';
import Transactions from './components/pages/transactions';
import About from './components/pages/about';
import Cart from './components/pages/cart';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<SingleProduct />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
