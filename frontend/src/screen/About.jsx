import { NavLink } from "react-router-dom"

const About = () => {
  return (
    <section className="w-full h-full flex justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r">
      <section className="h-[86.3vh] w-[80%] m-auto mt-[8vh] flex justify-center flex-col gap-4 text-white">
         <h1 className='text-2xl font-bold'>About page</h1>
         <p>working cool</p>
         <p>version 1.0.0</p>

         <NavLink to='/users' className="hover:underline hover:text-blue-600 duration-200 ease-in-out">--back to dashbord--</NavLink>
      </section>
    </section>
  )
}

export default About
