import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ProductosRoutes } from '../productos/routes/ProductosRoutes';


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>        
        <Route path="/*" element={<ProductosRoutes/>}/>
    </Routes>
  )
}
