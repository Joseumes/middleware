import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

const isAuthenticated = (): boolean => {
  return localStorage.getItem('token') !== null;
};

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;