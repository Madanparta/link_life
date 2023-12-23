import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';import { userEditingValidation } from '../schema';
;

const initialValues = {
  username:"",
  email:"",
  phone_number:"",
  city:"",
  password:"",
  state:"",
};

const Profile = ({setIsAuthenticated}) => {
  const navigate = useNavigate(); 
  const [isEditing,setIsEditing]=useState(false);
  const { username,gmail,phone_number,city,state,blood_group,role } = JSON.parse(localStorage.getItem("user"));
   
  const onLogout = () => {
    navigate('/')
    setIsAuthenticated(false);
    localStorage.removeItem("user")
  }
  const back_to_dashbord =()=>{
    navigate('/dashBord')
  }

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  }

  // handling error using formika..

  const {errors,handleBlur,handleChange,handleSubmit,values} = useFormik({
    initialValues:initialValues,
    validationSchema:userEditingValidation,
    onSubmit: async(value,action)=>{
      try {
        
      } catch (error) {
        console.error('Error during editing profile:', error);
        alert('Error during editing profile:', error);
      }
    }
  })
  
  useEffect(()=>{

  })


  return (
    <section className='h-full w-full p-10'>
      <div className='flex flex-col gap-2 mb-5'>
        <p  onClick={onLogout} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600 ${isEditing?"cursor-not-allowed":"cursor-pointer"}`}>Sign Out</p>
        <p  onClick={back_to_dashbord} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600  ${isEditing?"cursor-not-allowed":"cursor-pointer"}`}>back to dashbord</p>
      </div>

      <div className='p-5 flex justify-center'>

        <div className=''>
          <h1 className='text-2xl mb-5 font-semibold'>User <span className='capitalize'>{role}</span> Profile {isEditing && 'editing.'}</h1>

          <div className='flex flex-col'>
            {!isEditing ?
            (<> <p className='text-lg font-light mt-2'>Username : {username}</p>
            <p className='text-lg font-light mt-2'>Blood Group : {blood_group}</p>
            <p className='text-lg font-light mt-2'>Phone number : {phone_number}</p>
            <p className='text-lg font-light mt-2'>Email : {gmail}</p>
            <p className='text-lg font-light mt-2'>City : {city}</p>
            <p className='text-lg font-light mt-2'>State : {state}</p> </>)
             :
            (<>

            <form className='flex flex-col gap-2' onSubmit={handleSubmit}>

              <label htmlFor="username">
                Username : <input type='text' id='username' name='username' placeholder='Username' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.username} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.username ? (<small className='block text-start p-1 text-red-500'>{errors.username}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="email">
                Email : <input type='email' id='email' name='email' placeholder='updatemail@gmail.com' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="phone_number">
                Phone Number : <input type='number' id='phone_number' name='phone_number' placeholder='+91 ..........' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.phone_number ? (<small className='block text-start p-1 text-red-500'>{errors.phone_number}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="password">
                Password : <input type='password' id='password' name='password' placeholder='password' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="city">
                City : <input type='text' id='city' name='city' placeholder='City' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.city ? (<small className='block text-start p-1 text-red-500'>{errors.city}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="state">
                State : <input type='text' id='state' name='state' placeholder='State' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.state} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.state ? (<small className='block text-start p-1 text-red-500'>{errors.state}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

            </form>
            </>)}
          </div>

          <button onClick={handleEditClick} className='mt-8 duration-200 ease-in-out border w-full py-1 rounded-md bg-green-400 hover:bg-green-500 focus:bg-green-600 active:bg-green-700 text-white font-semibold shadow-md'>Edit Profile</button>
        </div>
      </div>

    </section>
  )
}

export default Profile
