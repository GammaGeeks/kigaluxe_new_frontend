import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token') && !!localStorage.getItem('user');

  return isAuthenticated ? element : <Navigate to="/auth/sign_in" replace />;
};

export default PrivateRoute;