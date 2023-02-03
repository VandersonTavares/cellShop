import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Store from "./pages/Store";
import Cart from "./pages/Cart";

import Header from "./components/Header";

export const Content = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Store />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
