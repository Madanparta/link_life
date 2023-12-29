import { useEffect } from 'react';
// import Donor from '../screen/Donor';
import {useNavigate,Outlet, NavLink} from 'react-router-dom';
import { BACKEND_API } from "../utils/credentials";

const DashBord = () => {
  const navigation = useNavigate();
  const {role,token} = JSON.parse(localStorage.getItem("user"))
  // console.log(token)


  const OpenDashBord = async()=>{
    try {
      const req = await fetch(`${BACKEND_API}/dashBord`,{method: 'GET',headers:{'Content-Type': 'application/json','x-access-token':token}})
      const data = await req.json();
      // if(data){
      //   alert(" successfully to dashbord")
      //   if(role === 'donor'){
      //     navigation('donor')
      //   }else if(role === 'blodoBank'){
      //     navigation('bloodBanker')
      //   }else if(role === 'receiver'){
      //     navigation('/users')
      //   }else{
      //     navigation('admin')
      //   }
      // }

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
    <div className='flex flex-col gap-2 mb-5'>
      <NavLink to='/users/donor'  className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-red-400 text-white font-bold hover:bg-red-500 active:bg-red-600`}>Blood Donor</NavLink>
      <NavLink to={'/users/bloodBanker'} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600`}>Blood Banker</NavLink>
    </div>
    </>
  )
}

export default DashBord
