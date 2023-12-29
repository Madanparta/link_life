import React from 'react'
import { token } from '../utils/credentials'
import { Navigate, Outlet, Route } from 'react-router-dom'

const PrivateRouter = ({component: Component,...rest}) => {
  return(
    <Route {...rest} element={token ? (<Outlet/>) : (<Navigate to={'/'}/>)}/>
  )
}

export default PrivateRouter
