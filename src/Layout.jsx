import React from 'react';

import { Outlet } from 'react-router';

import Header from './Components/Header';
import Navbar from './Components/Navbar/Navbar';

function Layout() {
  return (
    <div className="main_body">
      <Header />
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
