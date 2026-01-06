import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import GlobalLoader from '../GlobalLoader';

export default function PublicRoute() {
  const { user, isLoading } = useAuth();

  console.log(user);

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
