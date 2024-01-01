import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { BACKEND_API } from '../utils/credentials';

const DonetCompo = () => {
  const {token,_id} = JSON.parse(localStorage.getItem("user"))

    const [userRole,setUserRole]=useState('')

    useEffect(()=>{
      if(userRole !== ''){
        // console.log('Selected Role:', userRole);
        userRoleHandling()
      }
    },[userRole])


    const handleRoleChange=(e)=>{
        e.preventDefault()
        setUserRole(e.target.value);
    }

    const userRoleHandling = async()=>{
      try {
        const req = await fetch(`${BACKEND_API}/dashBord/update/${_id}`,{method: 'PUT',headers:{'Content-Type': 'application/json','x-access-token':token},body: JSON.stringify({role:userRole}),})
        const data = await req.json()
        console.log(data)
        if(data){
          toast.success('successfully selected.')
        }
      } catch (error) {
        toast.error('Error during dashbord:', error)
      }
    }

    const findingRolePath = () => {
      if(userRole === 'donor'){
        window.location.assign('/users/donor')

      }
      if(userRole === 'bloodbank'){
        window.location.assign('/users/bloodBanker')
        
      }
      if(userRole === 'receiver'){
        window.location.assign('/users')

      }
    };

    useEffect(()=>{
      setTimeout(() => {
        findingRolePath()   
      }, 500);
    })

  return (
    <>
    <label htmlFor="donet">🩸</label>
    <select id='donet' className='bg-gray-500 text-black' value={userRole} onChange={handleRoleChange}>
        <option value='' disabled hidden>--select role--</option>
        <option value='donor'>Donater</option>
        <option value='bloodbank'>Blood Banker</option>
        <option value='receiver' selected>Receiver</option>
    </select>
    </>
  )
}

export default DonetCompo
