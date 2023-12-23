import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({isAuthenticated}) => {
  return isAuthenticated ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter
