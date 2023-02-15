import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import { LayoutMainPage } from './pages/layout-main-page/layout-main-page';
import { Layout } from './pages/layout/layout-page';
import { MainPage } from './pages/main';
import { BookPage } from './pages/book';
import { ContractPage } from './components/contract-page/contract-page';
import { OfertaPage } from './components/oferta-page/oferta-page';
import { store } from './store/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<LayoutMainPage />}>
              <Route path='/' element={<Navigate to='/books/all' />} />
              <Route path='/books/:category' element={<MainPage />} />
              <Route path='/books/oferta' element={<OfertaPage />} />
              <Route path='/books/contract' element={<ContractPage />} />
            </Route>
            <Route path='/books/:category/:id' element={<BookPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
