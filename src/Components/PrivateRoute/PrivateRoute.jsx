import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export  function PrivateRoute({ component: Component, redirectTo = '/' }) {
    const { isLoggedIn, isRefreshing } = useAuth();
    const nuNaher = !isLoggedIn && !isRefreshing;

    return nuNaher ? <Navigate to={redirectTo} /> : Component;
}