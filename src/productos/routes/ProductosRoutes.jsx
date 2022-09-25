import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Product } from "../pages/Product";
import { ProductosPage } from "../pages/ProductosPage";

export const ProductosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductosPage />} />
      <Route path="product/:id" element={<Product />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
