import { Link, NavLink, useNavigate } from "react-router-dom";
import { token, userData } from "../utils/credentials";
import { FaUser } from "react-icons/fa6";


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
      navigator('/')
    }
  }

  return (
    <header className={`w-full h-auto flex justify-between items-center px-20 shadow-sm shadow-black bg-transparent z-50 ${token?"sticky top-0 left-0":"fixed bg-[#cccccc62] top-0 left-0"}`}>
      <h1 onClick={Onclick} className={`text-3xl cursor-pointer py-2 ${!token?"text-white":""}`}> Link Life</h1>

      <nav className="flex flex-row gap-6">
        {!token && <Link to={'/'} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>login</Link>}

        {token && (<><NavLink to='about' className='capitalize border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>About</NavLink>
        <NavLink to='feedback' className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Feedback</NavLink>
        <NavLink to='' className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Change Password</NavLink>
        <p onClick={onLogout} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Logout</p>
        <NavLink to="bloodDonationFacts" className='capitalize  border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Blood donation facts</NavLink>
        <NavLink title={`${userData.username}`} to={'/api/profile'} className='capitalize  border-b-2 border-transparent cursor-pointer px-2 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-green-600 flex justify-center items-center text-black'><FaUser/></NavLink></>)}
      </nav>
    </header>
  )
}

export default Header
