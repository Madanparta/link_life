import { useState } from 'react';

import signUp_img from '../stocks/LOGIN_LOGO.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import { signupValidation } from '../schema';


const initialValues = {
    name:'',
    email:"",
    phone_number:"",
    password:"",
    gender:"",
    city:"",
    district:"",
    state:"",
    blood_group:"",
    roll:"",
    terms_and_condition:false,
}

const SignUp = () => {
    const [passwordShow,setPasswordShow] = useState(false)

    const {errors,touched,handleBlur,handleChange,handleSubmit,values} = useFormik({
        initialValues:initialValues,
        validationSchema:signupValidation,
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    // console.log(errors)

  return (
    <section className='w-full h-full'>
      <section className='md:flex-row sm:flex-col lg:flex-row xl:w-7/12 lg:w-10/12 md:w-full h-[70vh] flex mx-auto text-center lg:mt-20 md:mt-16 shadow-2xl hover:translate-y-1 duration-300 ease-in-out rounded-md'>

        <div className='md:w-[40%] sm:w-full'>
            <img className='w-full h-full' src={signUp_img} alt='signUp_img'/>
        </div>

        <div className='md:w-[60%] sm:w-full py-2 px-10 text-gray-600 font-mono'>
            <h2 className='text-lg mt-8 drop-shadow-lg'>Create your account</h2>

            <form className=' mt-8 mb-4' onSubmit={handleSubmit}>

                <div className='flex gap-10 justify-between'>

                    <div className='w-[50%] text-start'>
                        <input autoComplete='off' className='w-full drop-shadow-md rounded-md outline-none  py-1 text-lg ps-2 cursor-pointer' type="text" placeholder='name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.name && touched.name ? (<p className='text-sm text-red-500 ps-2 pt-2'>{errors.name}</p>):null
                        }
                    </div>

                    <div className=' w-[50%] text-start'>
                        <input autoComplete='off' className='w-full drop-shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer' type='email' placeholder='Username   @gmail.com' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.email && touched.email ? (<p className='text-sm text-red-500 ps-2 pt-2'>{errors.email}</p>):null
                        }
                    </div>
                </div>

                <div className={`flex gap-10 justify-between ${errors.phone_number && touched.phone_number ? "mt-3" : errors.password && touched.password ? "mt-10":"mt-10" }`}>
                    <div className=' w-[50%] text-start'>
                        <input autoComplete='off' className='w-full drop-shadow-md rounded-md outline-none cursor-pointer py-1 text-lg ps-2' type='number' placeholder='Mobile number' name='phone_number' value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.phone_number && touched.phone_number ? (<p className='text-sm text-red-500 ps-2 pt-2'>{errors.phone_number}</p>):null
                        }
                    </div>

                    <div className='relative w-[50%] text-start'>
                        <input autoComplete='off' className='w-full drop-shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer' type={`${!passwordShow?"password":"text"}`} placeholder='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        <span className={`absolute top-[30%] right-3 text-gray-600 cursor-pointer ${errors.password && touched.password ?"top-[15%]":""}`}>{passwordShow ?<FaEye onClick={()=>setPasswordShow(!passwordShow)}/>:<FaEyeSlash onClick={()=>setPasswordShow(!passwordShow)}/>}</span>
                    {
                        errors.password && touched.password ? (<p className='text-sm text-red-500 ps-2 pt-2'>{errors.password}</p>):null
                    }
                    </div>
                    
                </div>

                <div className={`flex gap-10 justify-between ${errors.gender && touched.gender ? "mt-3" : errors.city && touched.city ? "mt-10":"mt-10" }`}>

                    <div className='w-full'>
                        <div className='w-full shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer'>
                            <label htmlFor="gender">Gender : </label>
                            <select id='gender' className='text-gray-600 outline-none' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    {
                        errors.gender && touched.gender ? (<p className='text-sm text-start text-red-500 ps-2 pt-2'>{errors.gender}</p>):null
                    }
                    </div>

                    <div className='w-full text-start'>
                        <input autoComplete='off' className='w-full drop-shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer' type='text' placeholder='City' name='city' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.city && touched.city ? (<p className='text-sm text-red-500 ps-2 pt-2'>{errors.city}</p>):null
                        }
                    </div>

                </div>
                <div className={`flex gap-10 justify-between ${errors.district && touched.district ? "mt-3" : errors.state && touched.state ? "mt-10":"mt-10" }`}>
                    <div className='w-full text-start'>
                        <input autoComplete='off' className='w-full drop-shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer' type='text' placeholder='District' name='district' value={values.district} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.district && touched.district ? (<p className='text-sm text-red-500 ps-2 pt-2'>{errors.district}</p>):null
                        }
                    </div>

                    <div className='w-full text-start'>
                        <input autoComplete='off' className='w-full drop-shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer' type="text" placeholder='State' name='state' value={values.state} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.state && touched.state ? (<p className='text-sm text-red-500 ps-2 pt-2'>{errors.state}</p>):null
                        }   
                    </div>
                </div>
                
                <div className={`flex gap-10 justify-between ${errors.blood_group && touched.blood_group ? "mt-3" : errors.roll && touched.roll ? "mt-10":"mt-10" }`}>

                    <div className='w-full'>
                        <div className='w-full shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer'>
                            <label htmlFor="blood_group">Blood Group : </label>
                            <select id='blood_group' className='text-gray-600 outline-none' name='blood_group' value={values.blood_group} onChange={handleChange} onBlur={handleBlur}>
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
                        errors.blood_group && touched.blood_group ? (<p className='text-sm text-start text-red-500 ps-2 pt-2'>{errors.blood_group}</p>):null
                    }
                    </div>

                    <div className='w-full'>
                        <div className='w-full shadow-md rounded-md outline-none py-1 text-lg ps-2 cursor-pointer'>
                            <label htmlFor="roll">roll : </label>
                            <select id='roll' className='text-gray-600 outline-none' name='roll' value={values.roll} onChange={handleChange} onBlur={handleBlur}>
                                <option value="null"></option>
                                <option value="donor">Donor</option>
                                <option value="receiver">Receiver</option>
                                <option value="bloodBank">Blood Bank</option>
                            </select>
                        </div>
                        {
                            errors.roll && touched.roll ? (<p className='text-sm text-start text-red-500 ps-2 pt-2'>{errors.roll}</p>):null
                        }
                    </div>

                </div>

                <div className={`flex gap-10 justify-between ${errors.terms_and_condition && touched.terms_and_condition ? "mt-3":"mt-8" }`} >
                    <div>
                        <input id='terms_and_condition cursor-pointer' type="checkbox" className='accent-red-600 cursor-pointer' name='terms_and_condition' value={values.terms_and_condition} onChange={handleChange} onBlur={handleBlur}/>
                        <label htmlFor="terms_and_condition"> I agree to the Terms and Conditons.</label>
                        {
                        errors.terms_and_condition && touched.terms_and_condition ? (<p className='text-sm text-red-500 ps-2'>{errors.terms_and_condition}</p>):null
                        }
                    </div>

                    <div className={`relative`}>
                        <p className='cursor-pointer inline-block z-10'>already have an account?</p>
                        <mark className={`cursor-pointer lg:opacity-100 md:opacity-0 sm:opacity-0 h-1 absolute text-transparent right-0 bottom-0.5 z-0 ${errors.terms_and_condition && touched.terms_and_condition ? "bottom-6 z-0":"z-0" }`}>...................</mark>
                    </div>
                </div>

                <button className='mt-8 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-red-600 rounded-md text-white hover:bg-red-700 focus::bg-red-800 active:bg-red-900 duration-300 ease-in-out' type='submit'>Submit registration</button>
            </form>
        </div>
      </section>
    </section>
  )
}

export default SignUp

