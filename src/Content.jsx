import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Store from "./pages/Store";

export const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Store/>} />
      </Routes>
    </BrowserRouter>
  );
};
