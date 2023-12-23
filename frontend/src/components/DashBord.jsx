import React from 'react'
import { useNavigate } from 'react-router-dom';
import Donor from '../screen/Donor';

const DashBord = () => {
  const storedData = JSON.parse(localStorage.getItem("user"));
  const navigation = useNavigate()
 
  return (
    <>
      {
        storedData.role === "donor" && <Donor/> 
      }
    </>
  )
}

export default DashBord
