import { useEffect } from 'react';
// import Donor from '../screen/Donor';
import {useNavigate,Outlet} from 'react-router-dom';
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
        if(role === 'donor'){
          navigation('donor')
        }else if(role === 'blodoBank'){
          navigation('bloodBanker')
        }else if(role === 'receiver'){
          navigation('/dashBord')
        }else{
          navigation('admin')
        }
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
    <Outlet/>
      {/* {
        role === "donor" && 
      } */}
    </>
  )
}

export default DashBord
