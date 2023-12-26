import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SignUp from '../screen/SignUp';
import SignIn from '../screen/SignIn';
import PrivateRouter from './PrivateRouter';
import Profile from '../screen/Profile';
import DashBord from './DashBord';
import EditUser from '../screen/EditUser';
import About from '../screen/About';
import Feedback from '../screen/Feedback';
import BloodDonationFacts from '../screen/BloodDonationFacts';
import Donor from '../screen/Donor';
import BloodBank from '../screen/BloodBank';

const Main = ({isAuthenticated, setIsAuthenticated}) => {
  return (
    <>
    <Routes>
    {/* <Route path='api/profile' element={<PrivateRouter isAuthenticated={isAuthenticated}/>}>
    </Route> */}
      <Route path='/api/profile' element={<Profile setIsAuthenticated={setIsAuthenticated}/>}>
        <Route path=':id' element={<EditUser/>}/>
      </Route>

      <Route path='/api/signup' element={<SignUp/>}/>
      <Route path='/' element={<SignIn setIsAuthenticated={setIsAuthenticated}/>}/>

      {/* <Route path='api/recDash' element={<PrivateRouter isAuthenticated={isAuthenticated}/>}> */}
        <Route path='/dashBord' element={<DashBord />}>
          <Route path='donor' element={<Donor/>}/>
          <Route path='bloodBanker' element={<BloodBank/>}/>
        </Route>
      {/* </Route> */}

      <Route path='/about' element={<About/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/bloodDonationFacts' element={<BloodDonationFacts/>}/>

    </Routes>
      
    </>
  )
}

export default Main
