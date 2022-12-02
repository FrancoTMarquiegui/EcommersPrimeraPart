import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

  const token = localStorage.getItem("token");

    if(token){
        return <Outlet />
    } else { 
        return <Navigate to='/login' />
    }                    
};                        // al usuario si no está autenticado

export default ProtectedRoutes;