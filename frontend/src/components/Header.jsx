import { Link, NavLink } from "react-router-dom";


const Header = ({isAuthenticated}) => {
 
  return (
    <header className='w-full h-auto flex justify-between items-center px-20 shadow-sm bg-white z-50 sticky top-0 left-0'>
      <h1 className='text-3xl cursor-pointer py-2 '> Link Life</h1>

      <nav className="flex flex-row gap-6">
        {!isAuthenticated && <Link to={'/'} className='capitalize text-lg border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>login</Link>}

        {isAuthenticated && (<><NavLink to='about' className='capitalize text-lg border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>About</NavLink>
        <NavLink to='feedback' className='capitalize text-lg border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Feedback</NavLink>
        <NavLink to="bloodDonationFacts" className='capitalize text-lg border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>Blood donation facts</NavLink>
        <NavLink to={'/api/profile'} className='capitalize text-lg border-b-2 border-transparent cursor-pointer px-2 text-red-400 font-semibold ease-in-out duration-200 hover:text-red-500 active:text-red-600'>user Profile</NavLink></>)}
      </nav>
    </header>
  )
}

export default Header
