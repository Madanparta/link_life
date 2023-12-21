import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className='w-full h-auto flex justify-between items-center px-20 shadow-sm bg-white z-50 sticky top-0 left-0'>
      <h1 className='text-3xl cursor-pointer py-2 '> Link Life</h1>

      <nav>
        <Link to={'/app/signin'} className='capitalize text-lg border-white border-b-2 cursor-pointer hover:border-b-2 hover:border-red-400 duration-300 ease-in-ou hover:tracking-widest'>login</Link>
      </nav>
    </header>
  )
}

export default Header
