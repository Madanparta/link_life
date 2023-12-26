import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditUser from './EditUser';
import {userData} from '../utils/credentials';


const Profile = ({setIsAuthenticated}) => {
  const navigate = useNavigate(); 
  const [isEditing,setIsEditing]=useState(false);
  const { username,email,phone_number,city,state,blood_group,role,_id } = userData;

  // console.log(_id)
   
  const onLogout = () => {
    navigate('/')
    setIsAuthenticated(false);
    localStorage.removeItem("user")
  }
  const back_to_dashbord =()=>{
    navigate('/dashBord')
  }

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  }

  return (
    <section className='h-full w-full p-10'>
      <div className='flex flex-col gap-2 mb-5'>
        <p  onClick={onLogout} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600 ${isEditing?"cursor-not-allowed":"cursor-pointer"}`}>Sign Out</p>
        <p  onClick={back_to_dashbord} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600  ${isEditing?"cursor-not-allowed":"cursor-pointer"}`}>back to dashbord</p>
      </div>

      <div className='p-5 flex justify-center'>

        <div className=''>
          <h1 className='text-2xl mb-5 font-semibold'>User <span className='capitalize'>{role}</span> Profile {isEditing && 'editing.'}</h1>

          <div className='flex flex-col'>
            {!isEditing ?
            (<> <p className='text-lg font-light mt-2'>Username : {username}</p>
            <p className='text-lg font-light mt-2'>Blood Group : {blood_group}</p>
            <p className='text-lg font-light mt-2'>Phone number : {phone_number}</p>
            <p className='text-lg font-light mt-2'>Email : {email}</p>
            <p className='text-lg font-light mt-2'>City : {city}</p>
            <p className='text-lg font-light mt-2'>State : {state}</p> 
            {!isEditing?<Link onClick={handleEditClick} to={`${_id}`} className='mt-8 text-center duration-200 ease-in-out border w-full py-1 rounded-md bg-green-400 hover:bg-green-500 focus:bg-green-600 active:bg-green-700 text-white font-semibold shadow-md'>Edit Profile</Link>:"Edit Profile"}
            </>):
            (
              <>
              <EditUser isEditing={isEditing} setIsEditing={setIsEditing}/>
              </>
              
            )}
          </div>

        </div>
      </div>

    </section>
  )
}

export default Profile
