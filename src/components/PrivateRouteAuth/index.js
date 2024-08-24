import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = (!localStorage.getItem('token') && !localStorage.getItem('user')) || (!!localStorage.getItem('user') ? !JSON.parse(localStorage.getItem('user')).isVerified : null)
  // console.log('isVerified', JSON.parse(localStorage.getItem('user')).isVerified);
  // console.log(!localStorage.getItem('token') && !localStorage.getItem('user'));
  return isAuthenticated ? element : <Navigate to="/" replace />
};

export default PrivateRoute
