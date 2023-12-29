import { useEffect, useState } from 'react';
import signUp_img from '../stocks/LOGIN_LOGO.jpg';
import toast from 'react-hot-toast';

import GLOBE from 'vanta/dist/vanta.globe.min';

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

const SignIn = () => {
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

            if(res.status === 200){
              localStorage.setItem("user",JSON.stringify(res.data));
              navigation('/users')
              toast.success("successfully login")
              action.resetForm()

            }
          })
        
      } catch (error) {
        toast.error('Error during login:', error);
      }
    }
  });

      // VANTA.JS

  useEffect(()=>{
    GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      size: 1.7,
    });
  },[])


  return (
    <section className='w-full h-full'>
        <div id='vanta' className='w-full h-full pt-12 md:h-screen'>

            {/* main section */}
            <section className='w-full h-full flex justify-center items-center p-10 md:p-20'>
                
                <section className='w-full sm:w-full md:w-11/12 md:flex md:justify-center md:items-center h-full lg:w-11/12 xl:w-7/12 bg-[#030303c4] hover:translate-y-1 duration-300 ease-in-out rounded-md'>
                    

                    {/* form page */}
                    <div className='w-full text-center sm:w-full md:w-1/2 md:px-10'>
                        <h2 className='text-lg mt-8 drop-shadow-lg text-white'>Log with your account</h2>

                        <form className='mt-8 mb-4 px-5 text-white' onSubmit={handleSubmit}>
                          
                            <section  className='w-full pt-5'>
                                
                                {/* email */}
                                <div className='mb-5'>
                                <input type='email' placeholder='email@gmail.com' name='email' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {
                                  errors.email && touched.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                }
                                </div>

                                {/* password */}
                                <div className='mb-5 relative'>                     
                                  <input type={`${passwordShow?"text":"password"}`} placeholder='*******' name='password' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                  <span className={`absolute top-1.5 right-3 text-gray-600 cursor-pointer ${errors.password && touched.password ?"top-[15%]":""}`}>{passwordShow ?<FaEye onClick={()=>setPasswordShow(!passwordShow)}/>:<FaEyeSlash onClick={()=>setPasswordShow(!passwordShow)}/>}</span>
                                  {
                                    errors.password && touched.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                  }  
                                </div>

                            </section>

                            {/* form footer */}

                            <section className='mb-5'>
                            <button className='mb-7 mt-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-red-600 rounded-md text-white hover:bg-red-700 focus::bg-red-800 active:bg-red-900 duration-300 ease-in-out' type='submit'>Submit login</button>
                                <div className='w-full text-end'>
                                  <Link to={'/api/signup'} className='cursor-pointer inline-block '><small>You don't have any account? <span className='text-blue-600 hover:underline'>please SignUp</span></small></Link>
                                </div>
                            </section>

                        </form>
                        
                    </div>

                    {/* img part */}
                    <div className='w-full h-full sm:w-full md:w-1/2'>
                        <img className='w-full h-fit md:h-full' src={signUp_img} alt='signUp_img'/>
                    </div>
                </section>

            </section>

        </div>
    </section>
  )
}

export default SignIn
