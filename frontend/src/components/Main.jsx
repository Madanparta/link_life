import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn';
import Profile from '../screen/Profile';
import DashBord from './DashBord';
import EditUser from '../screen/EditUser';
import About from '../screen/About';
import Feedback from '../screen/Feedback';
import BloodDonationFacts from '../screen/BloodDonationFacts';
import Donor from '../screen/Donor';
import BloodBank from '../screen/BloodBank';
import Users from '../screen/Users';
// import PrivateRouter from './PrivateRouter';
import { token } from '../utils/credentials';
import NotFound from '../screen/NotFound';

const Main = () => {

  return (
    <>
    <Routes>

      <Route path='/api/signup' element={<SignUp/>}/>
      <Route path='/' element={<SignIn/>}/>


      <Route path='/users' element={<Users/>}/>
      <Route path='/users/nav' element={<DashBord />}/>

      <Route path='/users/donor' element={<Donor/>}/>
      <Route path='/users/bloodBanker' element={<BloodBank/>}/>


      <Route path='/about' element={<About/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      {/* change password rout */}
      <Route path='/bloodDonationFacts' element={<BloodDonationFacts/>}/>
      {/* logout rout */}
      <Route path='/api/profile' element={<Profile/>}>
        <Route path=':id' element={<EditUser/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>

    </Routes>
    </>
  )
}

export default Main
