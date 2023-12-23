import React from 'react';
import { useFormik } from 'formik';
import { donorValidation } from '../schema';


const initialValues = {
    donationDate:"",
    donationQuantity:"",
}

const Donor = () => {

    const {errors,touched,handleBlur,handleChange,handleSubmit,values} = useFormik({
        initialValues:initialValues,
        validationSchema:donorValidation,
        onSubmit: async(values,action)=>{
            console.log(values)
            try {
                
            } catch (error) {
                console.error('Error during Donor:', error);
                alert('Error during Donor:', error);
            }
        }
    })
  return (
    <section className='w-full h-full flex justify-center items-center'>
        <section className='h-full w-[80%] m-auto mt-[8vh] flex justify-center'>

            <div className='p-10 shadow-sm hover:shadow-lg'>
                <h2 className='text-2xl text-red-600 font-bold my-10'>Blood Donation Information 🩸</h2>

                <form className='w-full mx-5' onSubmit={handleSubmit}>
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
