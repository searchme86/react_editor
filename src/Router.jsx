import React from 'react';

import { Routes, Route } from 'react-router';

import Layout from './Layout';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Document from './Pages/Document/Document';
import Product from './Pages/Product/Product';
import Template from './Pages/Template/Template';
import Organization from './Pages/Organization/Organization';
import User from './Pages/User/User';
import Settings from './Pages/Settings/Settings';
import Missing from './Pages/Missing';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<Document />} />
        <Route path="/product" element={<Product />} />
        <Route path="/template" element={<Template />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/user" element={<User />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default Router;
