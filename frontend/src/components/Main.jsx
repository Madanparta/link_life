import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn';
import PrivateRouter from './PrivateRouter';
import Profile from '../screen/Profile';
import DashBord from './DashBord';

const Main = ({isAuthenticated, setIsAuthenticated}) => {
  return (
    <>
    <Routes>
    {/* <Route path='api/profile' element={<PrivateRouter isAuthenticated={isAuthenticated}/>}>
    </Route> */}
      <Route path='/api/profile' element={<Profile setIsAuthenticated={setIsAuthenticated}/>}/>

      <Route path='/api/signup' element={<SignUp/>}/>
      <Route path='/' element={<SignIn setIsAuthenticated={setIsAuthenticated}/>}/>

      {/* <Route path='api/recDash' element={<PrivateRouter isAuthenticated={isAuthenticated}/>}> */}
        <Route path='/dashBord' element={<DashBord />}/>
      {/* </Route> */}

    </Routes>
      
    </>
  )
}

export default Main
