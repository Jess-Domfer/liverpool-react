import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductosPage } from '../pages/ProductosPage';


export const ProductosRoutes = () => {
  return (

    <Routes>
        <Route path="/" element={ <ProductosPage /> }/>
       

        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
