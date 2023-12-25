import { useCallback, useEffect } from 'react';
import Donor from '../screen/Donor';
import {useNavigate,Outlet} from 'react-router-dom';
import axios from 'axios';
import { BACKEND_API } from "../utils/credentials";

const DashBord = () => {
  const navigation = useNavigate();
  const {role,token} = JSON.parse(localStorage.getItem("user"))
  // console.log(token)


  const OpenDashBord = async()=>{
    try {
      const req = await fetch(`${BACKEND_API}/dashBord`,{method: 'GET',headers:{'Content-Type': 'application/json','x-access-token':token}})
      const data = await req.json();
      if(data){
        alert(" successfully to dashbord")
        navigation('donor')
      }

    } catch (error) {
      console.error('Error during dashbord:', error);
      alert('Error during dashbord:', error)
    }
  }

  useEffect(()=>{
    if(!token){
      localStorage.removeItem(token);
      navigation('/')
    }else{
      OpenDashBord();
    }
  },[])

  return (
    <>
      {
        role === "donor" && <Outlet/>
      }
    </>
  )
}

export default DashBord
