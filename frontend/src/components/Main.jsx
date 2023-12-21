import React from 'react'
import SignUp from '../screen/SignUp';

import { Route,Routes} from 'react-router-dom';
import SignIn from '../screen/SignIn';

const Main = () => {
  return (
    <>
    <Routes>
      <Route path='/app/signup' element={<SignUp/>}/>
      <Route path='/app/signin' element={<SignIn/>}/>
    </Routes>
      
    </>
  )
}

export default Main
