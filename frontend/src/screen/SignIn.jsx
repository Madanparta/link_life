import { useState } from 'react';
import signUp_img from '../stocks/LOGIN_LOGO.jpg';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInValidation } from '../schema';
import { BACKEND_API } from '../utils/credentials';
import Axios from 'axios';


const initialValues = {
  email:"",
  password:"",
}

const SignIn = ({setIsAuthenticated}) => {
  const [passwordShow,setPasswordShow] = useState(false);

  const navigation = useNavigate();

  const {errors,touched,handleBlur,handleChange,handleSubmit,values} = useFormik({
    initialValues:initialValues,
    validationSchema:signInValidation,
    onSubmit: async(values,action)=>{
      // console.log(values)
      try {

        await Axios.post(`${BACKEND_API}/api/signin`,values)
          .then((res)=>{
            // console.log(res.data);
            localStorage.setItem("user",JSON.stringify(res.data));
            // localStorage.setItem("user",res.data);
            setIsAuthenticated(true)
            alert(" User Login successfully")
            navigation('/dashBord')
            // action.resetForm()
          })

        // localStorage.setItem('users',res.data)
        
      } catch (error) {
        console.error('Error during login:', error);
        alert('Error during login:', error);
      }
    }
  });


  return (
    <section className='w-full h-full'>
    <section className='md:flex-row sm:flex-col lg:flex-row xl:w-7/12 lg:w-10/12 md:w-full h-[70vh] flex mx-auto text-center lg:mt-20 md:mt-16 shadow-2xl hover:translate-y-1 duration-300 ease-in-out rounded-md'>

      <div className='md:w-[50%] sm:w-full h-full sm:mb-40 py-2 px-10 text-gray-600 font-mono'>
          <h2 className='text-lg mt-8 drop-shadow-lg'>Log with your account</h2>

          <form className='mt-8 mb-4 md:h-[80%] sm:h-full w-full p-10 flex flex-row' onSubmit={handleSubmit} >
              
              <section className='w-full py-10 relative'>
                <div className='flex flex-col gap-4'>
                  {/* email */}
                  <div>
                    <input type='email' placeholder='email@gmail.com' name='email' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-lg' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    {
                      errors.email && touched.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                  </div>

                  {/* password */}
                  <div className='mb-1 relative'>
                    <input type={`${passwordShow?"text":"password"}`} placeholder='*******' name='password' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-lg' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    <span className={`absolute top-3 right-5 text-gray-600 cursor-pointer`}>{passwordShow ?<FaEye onClick={()=>setPasswordShow(!passwordShow)}/>:<FaEyeSlash onClick={()=>setPasswordShow(!passwordShow)}/>}</span>
                    {
                      errors.password && touched.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                  </div>
                </div>

                <section className='md:w-full sm:w-full  h-auto absolute md:bottom-28 sm:bottom-0 left-0'>
                  <button className='mb-7 mt-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-red-600 rounded-md text-white hover:bg-red-700 focus::bg-red-800 active:bg-red-900 duration-300 ease-in-out' type='submit'>Submit login</button>
                  <div className='w-full text-end'>
                    <Link to={'/api/signup'} className='cursor-pointer inline-block '><small>You don't have any account? <span className='text-blue-600 hover:underline'>please SignUp</span></small></Link>
                  </div>
                </section>

              </section>

          </form>
      </div>

      <div className='md:w-[50%] sm:w-full h-full'>
          <img className='w-full h-full' src={signUp_img} alt='signUp_img'/>
      </div>

    </section>
  </section>
  )
}

export default SignIn
