import { Link, NavLink, useNavigate } from "react-router-dom";
import { token, userData } from "../utils/credentials";
import { FaUser } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";


const Header = () => {
  const navigator = useNavigate()
  const Onclick = () => {
    if(token){
      navigator('/users')
    }
  }

  // logout function
  const onLogout = () => {
    if(token){
      localStorage.removeItem("user")
      window.location.assign('/')
    }
  }

  const [navMobile,setNavMobile]=useState(false);
  const havHandlingMoblieScreen = () => {
    setNavMobile(!navMobile)
  }

  return (
    <header className={`w-full h-fit flex justify-between items-center px-5  md:px-20 shadow-sm shadow-black bg-transparent z-50 ${token?"sticky top-0 left-0":"fixed bg-[#cccccc62] top-0 left-0"}`}>
      <h1 onClick={Onclick} className={` text-xl md:text-3xl cursor-pointer py-2 ${!token?"text-white":""}`}> Link Life</h1>

      {/* mobile sesponse */}
      <nav onClick={havHandlingMoblieScreen} className="lg:hidden relative">
        <HiMenuAlt3 className="text-3xl cursor-pointer"/>
        <div className={`absolute top-10 delay-200 ease-in-out -right-5 w-[100vw]  h-[94vh] bg-[#f3ececf5] ${navMobile?"hidden":'block'} flex justify-center items-center flex-col gap-5`}>
          {token && (<><NavLink to='about' className='capitalize border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>About</NavLink>
          <NavLink to='feedback' className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Feedback</NavLink>
          <NavLink to='/api/profile' className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Change Password</NavLink>
          <p onClick={onLogout} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Logout</p>
          <NavLink to="bloodDonationFacts" className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Blood donation facts</NavLink>
          <NavLink title={`${userData.username}`} to={'/api/profile'} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-green-600 flex justify-center items-center text-black'><FaUser/></NavLink></>)}
        </div>
      </nav>

      {/* web responsive */}
      <nav className="lg:flex flex-row gap-6 hidden">
        {!token && <Link to={'/'} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>login</Link>}

        {token && (<><NavLink to='about' className='capitalize border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>About</NavLink>
        <NavLink to='feedback' className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Feedback</NavLink>
        <NavLink to='/api/profile' className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Change Password</NavLink>
        <p onClick={onLogout} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Logout</p>
        <NavLink to="bloodDonationFacts" className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Blood donation facts</NavLink>
        <NavLink title={`${userData.username}`} to={'/api/profile'} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-green-600 flex justify-center items-center text-black'><FaUser/></NavLink></>)}
      </nav>
    </header>
  )
}

export default Header
