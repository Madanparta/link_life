import { useFormik } from 'formik';
import { userEditingValidation } from '../schema';
import {  useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { BACKEND_API } from '../utils/credentials';
import toast from 'react-hot-toast';


const initialValues = {
    username:"",
    email:"",
    phone_number:"",
    city:"",
    password:"",
    state:"",
  };

const EditUser = ({isEditing,setIsEditing}) => {
    const {id} = useParams();
    const navigation = useNavigate();
    

    const {errors,handleBlur,handleChange,handleSubmit,values} = useFormik({
        initialValues:initialValues,
        validationSchema:userEditingValidation,
        onSubmit: async(values,action)=>{
          try {
            await Axios.put(`${BACKEND_API}/api/edit/${id}`,values)
                .then((res)=>{
                    localStorage.setItem("user",JSON.stringify(res.data));  
                });
                toast.success(" User editing updated successfully");
                action.resetForm()
            
          } catch (error) {
            toast.error('Error during editing profile:', error);
          }
        }
      })

      const backProfle = () => {
        setIsEditing(!isEditing);
        navigation('/api/profile')
      }
  return (
    <>

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

              <button type='submit' className='mt-8 duration-200 ease-in-out w-full py-1 rounded-md bg-green-400 hover:bg-green-500 focus:bg-green-600 active:bg-green-700 text-white font-semibold shadow-md'>Update Edited Profile</button>
              <p  onClick={backProfle} className="transition duration-200 ease-in-out cursor-pointer text-center w-full px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600 shadow-md">Goto profile</p>
            </form>
            </>
  )
}

export default EditUser
