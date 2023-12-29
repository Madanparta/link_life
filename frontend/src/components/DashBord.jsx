import { useEffect } from 'react';
// import Donor from '../screen/Donor';
import toast from 'react-hot-toast';
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
      toast.error('Error during dashbord:', error)
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
      <section className="w-full h-full flex justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r">
        <section className="h-[86.3vh] w-[80%] m-auto mt-[8vh] flex justify-center flex-col items-center">
          <h2 className='font-light text-lg text-white mb-5'>Please select here</h2>
          <div className='flex flex-col gap-2 mb-5'>
            <NavLink to='/users/donor'  className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-red-400 text-white font-bold hover:bg-red-500 active:bg-red-600`}>Blood Donor</NavLink>
            <NavLink to={'/users/bloodBanker'} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600`}>Blood Banker</NavLink>
            {
              role === 'admin' ? (<NavLink to={'/'} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600`}>Go to dashbord</NavLink>) : ""
            }
          </div>
        </section>
      </section>
    </>
  );
}

export default DashBord
