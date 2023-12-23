import { useState } from 'react';
import Axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

import signUp_img from '../stocks/LOGIN_LOGO.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import { signupValidation } from '../schema';

import {BACKEND_API} from '../utils/credentials';


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
    role:"",
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
            // console.log(values)
            try {
                
                await Axios.post(`${BACKEND_API}/api/signup`,values);

                // if(response.status === 201){
                //     console.log('User registered successfully');
                //     alert(" User registered successfully")
                // }else{
                //     console.log('Registration failed');
                //     alert("Registration failed")
                // }

                alert(" User registered successfully")
                action.resetForm()
                navigation('/')

            } catch (error) {
                console.error('Error during registration:', error);
                alert('Error during registration:', error);
            }
        }
    })

  return (
    <section className='w-full h-full'>
      <section className='md:flex-row sm:flex-col lg:flex-row xl:w-7/12 lg:w-10/12 md:w-full h-[70vh] flex mx-auto text-center lg:mt-20 md:mt-16 shadow-2xl hover:translate-y-1 duration-300 ease-in-out rounded-md'>

        <div className='md:w-[40%] sm:w-full h-full'>
            <img className='w-full h-full' src={signUp_img} alt='signUp_img'/>
        </div>

        <div className='md:w-[60%] sm:w-full h-full py-2 px-10 text-gray-600 font-mono'>
            <h2 className='text-lg mt-8 drop-shadow-lg'>Create your account</h2>

            <form className='mt-8 mb-4 h-[80%] w-full p-4 flex flex-row gap-10 justify-between relative' onSubmit={handleSubmit}>

                {/* left sections */}
                <section className=' w-1/2'>
                    
                    {/* Name */}
                    <div className='mb-1'>
                        <input type='text' placeholder='Name' name='name' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.name && touched.name ? (<small className='block text-start p-1 text-red-500'>{errors.name}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* user name */}
                    <div className='mb-1'>
                        <input type='text' placeholder='Username' name='username' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.username && touched.username ? (<small className='block text-start p-1 text-red-500'>{errors.username}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* age */}
                    <div className='mb-1'>
                        <input type="number" placeholder="age" min="18" max="50" name='age' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.age && touched.age ? (<small className='block text-start p-1 text-red-500'>{errors.age}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* gender */}
                    <div className='mb-1'>
                        <div className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm'>
                            <label htmlFor="gender">Gender : </label>
                            <select id='gender' className='outline-none' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}>
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {
                            errors.gender && touched.gender ? (<small className='block text-start p-1 text-red-500'>{errors.gender}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* bload group */}
                    <div className='mb-1'>
                        <div className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm'>
                            <label htmlFor="blood_group">Blood Group : </label>
                            <select id='blood_group' className='outline-none' name='blood_group' value={values.blood_group} onChange={handleChange} onBlur={handleBlur}>
                                <option value="null"></option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        {
                            errors.blood_group && touched.blood_group ? (<small className='block text-start p-1 text-red-500'>{errors.blood_group}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* rolls */}
                    <div className='mb-1'>
                        <div className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm'>
                            <label htmlFor="role">Role : </label>
                            <select id='role' className='outline-none' name='role' value={values.role} onChange={handleChange} onBlur={handleBlur}>
                                <option value="null"></option>
                                <option value="donor">Donor</option>
                                <option value="blodoBank">Blood Bnaker</option>
                                <option value="receiver">Receiver</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        {
                            errors.role && touched.role ? (<small className='block text-start p-1 text-red-500'>{errors.role}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* term and condition */}
                    <div className='mb-1'>
                        {/* <input id='terms_and_condition' type="checkbox" className='accent-red-600 cursor-pointer' name='terms_and_condition' value={values.terms_and_condition} onChange={handleChange} onBlur={handleBlur}/> */}
                        <label htmlFor="terms_and_condition"><small> I agree to the Terms and Conditons.</small></label>
                    </div>

                </section>

                {/* right section */}
                <section className='w-1/2'>
                    
                    {/* email */}
                    <div className='mb-1'>
                        <input type='email' placeholder='email@gmail.com' name='email' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.email && touched.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* password */}
                    <div className='mb-1 relative'>
                        <input type={`${passwordShow?"text":"password"}`} placeholder='*******' name='password' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        <span className={`absolute top-1.5 right-3 text-gray-600 cursor-pointer ${errors.password && touched.password ?"top-[15%]":""}`}>{passwordShow ?<FaEye onClick={()=>setPasswordShow(!passwordShow)}/>:<FaEyeSlash onClick={()=>setPasswordShow(!passwordShow)}/>}</span>
                        {
                            errors.password && touched.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* phone number */}
                    <div className='mb-1'>
                        <input type='number' placeholder='+91 ..........' name='phone_number' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.phone_number && touched.phone_number ? (<small className='block text-start p-1 text-red-500'>{errors.phone_number}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* city */}
                    <div className='mb-1'>
                        <input type='text' placeholder='City' name='city' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.city && touched.city ? (<small className='block text-start p-1 text-red-500'>{errors.city}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* Distict */}
                    <div className='mb-1'>
                        <input type='text' placeholder='District' name='district' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.district} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.district && touched.district ? (<small className='block text-start p-1 text-red-500'>{errors.district}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* state */}
                    <div className='mb-1'>
                        <input type='text' placeholder='State' name='state' autoComplete='off' className='w-full border-b-2 px-2 py-1 outline-none rounded-md shadow-sm' value={values.state} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.state && touched.state ? (<small className='block text-start p-1 text-red-500'>{errors.state}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                </section> 

                {/* form footer box */}

                <section className='absolute bottom-0 left-0 w-full h-auto'>
                    <div className='w-full text-end'>
                        <Link to={'/'} className='cursor-pointer inline-block hover:underline'>already have an account?</Link>
                    </div>
                    <button className='mt-7 mb-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-red-600 rounded-md text-white hover:bg-red-700 focus::bg-red-800 active:bg-red-900 duration-300 ease-in-out' type='submit'>Submit registration</button>
                </section>
                
            </form>
        </div>
      </section>
    </section>
  )
}

export default SignUp