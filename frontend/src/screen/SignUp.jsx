import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import GLOBE from 'vanta/dist/vanta.globe.min';

import signUp_img from '../stocks/LOGIN_LOGO.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import axios from 'axios';
import { signupValidation } from '../schema';

import {BACKEND_API} from '../utils/credentials';
import toast from 'react-hot-toast';


const initialValues = {
    name:"",
    email:"",
    phone_number:"",
    password:"",
    gender:"",
    city:"",
    district:"",
    state:"",
    blood_group:"",
    username:"",
    age:"",
}

const SignUp = () => {

    const [passwordShow,setPasswordShow] = useState(false);

    const navigation = useNavigate()

    const {errors,touched,handleBlur,handleChange,handleSubmit,values} = useFormik({
        initialValues:initialValues,
        validationSchema:signupValidation,
        onSubmit: async(values,action)=>{
            console.log(values)
            try {
                const req = await axios.post(`${BACKEND_API}/api/signup`,values)

                if(req.status === 200){
                    toast.success("successfully createdd")
                    navigation('/')
                }

            } catch (error) {
                toast.error('Error during registration:', error);
            }
        }
    })

    // VANTA.JS

    useEffect(()=>{
        GLOBE({
            el: '#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            size: 1.70
        })
    },[])

  return (
    <section className='w-full h-full'>
        <div id='vanta' className='w-full h-full pt-12 md:h-screen'>

            {/* main section */}
            <section className='w-full h-full flex justify-center items-center p-10 md:p-20'>
                
                <section className='w-full sm:w-full md:w-11/12 md:flex md:justify-center md:items-center lg:w-11/12 xl:w-7/12 md:h-fit bg-[#030303c4] hover:translate-y-1 duration-300 ease-in-out rounded-md'>
                    
                    {/* img part */}
                    <div className='w-full h-full sm:w-full md:w-1/2'>
                        <img className='w-full h-full' src={signUp_img} alt='signUp_img'/>
                    </div>

                    {/* form page */}
                    <div className='w-full text-center sm:w-full md:w-1/2'>
                        <h2 className='text-lg mt-8 drop-shadow-lg text-white'>Create your account</h2>

                        <form className='mt-8 mb-4 px-5 text-white' onSubmit={handleSubmit}>

                            <section className='w-full md:pr-16'>

                                {/* name */}
                                <div className='mb-5'>
                                    <input type='text' placeholder='Name' name='name' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                                    {
                                        errors.name && touched.name ? (<small className='block text-start p-1 text-red-500'>{errors.name}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                    }
                                </div>

                                <div className='md:flex'>
                                    {/* username */}
                                    <div className='mb-5'>
                                        <input type='text' placeholder='Username' name='username' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                                        {
                                            errors.username && touched.username ? (<small className='block text-start p-1 text-red-500'>{errors.username}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                        }
                                    </div>

                                    {/* age */}
                                    <div className='mb-5'>
                                        <input  type="number" placeholder="age" min="18" max="50" name='age' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                                        {
                                            errors.age && touched.age ? (<small className='block text-start p-1 text-red-500'>{errors.age}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                        }
                                    </div>
                                </div>

                               {/* gender */}
                                <div  className='mb-5 flex'>
                                    <div className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm'>
                                        <label htmlFor="gender" className='text-white'>Gender : </label>
                                        <select id='gender' className='outline-none cursor-pointer text-black' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}>
                                            <option value=""></option>
                                            <option value="male" >Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    {
                                        errors.gender && touched.gender ? (<small className='block text-start p-1 text-red-500'>{errors.gender}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                    }
                                    </div>
                                

                                    {/* blood group */}
                                    <div className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm'>
                                        <label htmlFor="blood_group" className='text-white'>Blood Group : </label>
                                        <select id='blood_group' className='outline-none cursor-pointer text-black' name='blood_group' value={values.blood_group} onChange={handleChange} onBlur={handleBlur}>
                                            <option value=""></option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                        {
                                            errors.blood_group && touched.blood_group ? (<small className='block text-start p-1 text-red-500'>{errors.blood_group}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                        }
                                    </div>
                                </div>

                            </section>

                            {/* second container */}
                            <section  className='w-full pt-5'>
                                
                                {/* email */}
                                <div className='md:flex'>
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
                                </div>

                                <div className='md:flex'>
                                    {/* phone number */}
                                    <div className='mb-5'>
                                        <input type='number' placeholder='+91 ..........' name='phone_number' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
                                        {
                                            errors.phone_number && touched.phone_number ? (<small className='block text-start p-1 text-red-500'>{errors.phone_number}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                        }
                                    </div>

                                    {/* city */}
                                    <div className='mb-5'>
                                        <input type='text' placeholder='City' name='city' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                                        {
                                            errors.city && touched.city ? (<small className='block text-start p-1 text-red-500'>{errors.city}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                        }
                                </div>
                                </div>

                                <div className='md:flex'>
                                    {/* Distict */}
                                    <div className='mb-5'>
                                        <input type='text' placeholder='District' name='district' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.district} onChange={handleChange} onBlur={handleBlur}/>
                                        {
                                            errors.district && touched.district ? (<small className='block text-start p-1 text-red-500'>{errors.district}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                        }
                                    </div>

                                    {/* state */}
                                    <div className='mb-5'>
                                        <input type='text' placeholder='State' name='state' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.state} onChange={handleChange} onBlur={handleBlur}/>
                                        {
                                            errors.state && touched.state ? (<small className='block text-start p-1 text-red-500'>{errors.state}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                                        }
                                    </div>
                                </div>
                            </section>

                            {/* form footer */}

                            <section className='mb-5 md:pr-10'>
                                <div className='w-full text-end'>
                                    <Link to={'/'} className='cursor-pointer inline-block hover:underline text-white'>already have an account?</Link>
                                </div>
                                <button className='mt-6 mb-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-red-600 rounded-md text-white hover:bg-red-700 focus::bg-red-800 active:bg-red-900 duration-300 ease-in-out' type='submit'>Submit registration</button>
                            </section>

                        </form>
                        
                    </div>
                </section>

            </section>

        </div>
    </section>
  )
}

export default SignUp