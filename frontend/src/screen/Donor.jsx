import React from 'react';
import { useFormik } from 'formik';
import { donorValidation } from '../schema';
import { IoArrowUndo } from "react-icons/io5";
import { BACKEND_API } from "../utils/credentials";
import { token } from '../utils/credentials';
import { Link, useNavigate } from 'react-router-dom';


const initialValues = {
    donationDate:"",
    donationQuantity:"",
}

const Donor = () => {
    const navigation = useNavigate()

    const {errors,touched,handleBlur,handleChange,handleSubmit,values} = useFormik({
        initialValues:initialValues,
        validationSchema:donorValidation,
        onSubmit: async(values,action)=>{
            // console.log(values)

            try {
                const req = await fetch(`${BACKEND_API}/dashBord/donor`,{method: 'POST',headers:{'Content-Type': 'application/json','x-access-token':token},body: JSON.stringify(values),})

                const data = await req.json();
                if(data){
                    alert("successfully added.")
                    navigation('/users')
                    action.resetForm()
                }

            } catch (error) {
                console.error('Error during Donor:', error);
                alert('Error during Donor:', error);
            }
        }
    });
    
  return (
    <section className='w-full h-full flex justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r'>
        <section className='h-[86.3vh] w-[80%] m-auto mt-[8vh] flex justify-center relative'>

        <div className='w-fit text-start absolute top-0 left-0'>
          <Link to={'/users'} className='w-full rounded-md  text-lg tracking-wider font-semibold bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 active:bg-gray-900 text-white shadow-md px-2 py-1.5'><IoArrowUndo className="inline"/> back to dashBord</Link>
        </div>

            <div className='p-10 shadow-lg shadow-black bg-white h-fit rounded-sm'>
                <h2 className='text-2xl text-red-600 font-bold my-10'>Online Donation Form 🩸</h2>

                <form className='w-full mx-1' onSubmit={handleSubmit}>
                    {/* donation date */}
                    <div className='w-full my-10'>
                        <label htmlFor='donationDate'>
                            Donation Date: <input type="date" name='donationDate' id='donationDate' className='outline-none border-b-2 w-full' value={values.donationDate} onChange={handleChange} onBlur={handleBlur}/>
                        </label>
                        {
                            errors.donationDate && touched.donationDate ? (<small className='block text-start p-1 text-red-500'>{errors.donationDate}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                    {/* donationQuantity */}
                    <div  className='w-full my-10'>
                        <label htmlFor='donationQuantity'>
                        Donation Quantity (ml): <input type="number" min="200" max="400" name='donationQuantity' id='donationQuantity' className='outline-none border-b-2 w-full' value={values.donationQuantity} onChange={handleChange} onBlur={handleBlur}/>
                        </label>
                        {
                            errors.donationQuantity && touched.donationQuantity ? (<small className='block text-start p-1 text-red-500'>{errors.donationQuantity}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>

                    <button className='w-full my-5 rounded-md py-1 text-lg tracking-wider font-semibold bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-900 text-white shadow-md' type='submit'>Submit</button>
                </form>
            </div>

        </section>
    </section>
  )
}

export default Donor
