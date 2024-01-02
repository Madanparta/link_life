import { useFormik } from "formik";
import { IoArrowUndo } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { bloodBankInputDataValidation } from "../schema";
import { BACKEND_API, token } from "../utils/credentials";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "./Spinner";

const initialValues = {
  bloodGroup:'',
  quantityAvailable:"",
  description:"",
}

const BloodBank = () => {

  const {errors,touched,handleBlur,handleChange,handleSubmit,values} = useFormik({
    initialValues:initialValues,
    validationSchema:bloodBankInputDataValidation,
    onSubmit: async(values,action)=>{
      // console.log(values)
      try {
        const req = await fetch(`${BACKEND_API}/dashBord/bloodBanker`,{method:'POST',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify(values),})
        const data = await req.json();
        // console.log(data);

        if(data){
          action.resetForm()
          toast.success('succesfully added')
        }
      } catch (error) {
        toast('Error during BloodBank:', error);
      }
    }
  });
  return (
    <section className="w-full h-full flex justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r">
      <section className="h-[86.3vh] w-[80%] m-auto mt-[8vh] flex justify-center relative">

        <div className='w-fit text-start absolute top-0 left-0'>
          <Link to={'/users'} className='w-full rounded-md  text-lg tracking-wider font-semibold bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 active:bg-gray-900 text-white shadow-md px-2 py-1.5'><IoArrowUndo className="inline"/> back to dashBord</Link>
        </div>

        <div className="p-10 shadow-lg shadow-black bg-white h-fit rounded-sm">
          <h2 className="text-2xl text-red-600 font-bold my-10">
            Add Blood Donor Details 🏦
          </h2>

          <form  className='w-full mx-4' onSubmit={handleSubmit}>

            <div className="w-full my-10">
              <label htmlFor="bloodGroup">
                Blood Group: <input type="text" name="bloodGroup" id="bloodGroup" className="outline-none border-b-2 w-full"
                 value={values.bloodGroup} onChange={handleChange} onBlur={handleBlur}
                 />
              </label>
              {errors.bloodGroup && touched.bloodGroup ? (
                <small className="block text-start p-1 text-red-500">
                  {errors.bloodGroup}
                </small>
              ) : (
                <small className="block text-start p-1 opacity-0">
                  console
                </small>
              )}

            </div>

            <div className="w-full my-10">
              <label htmlFor="quantityAvailable">
                Quantity Available: (ml): <input type="number" min="200" name="quantityAvailable" id="quantityAvailable" className="outline-none border-b-2 w-full"
                 value={values.quantityAvailable} onChange={handleChange} onBlur={handleBlur}
                  />
              </label>
              {errors.quantityAvailable && touched.quantityAvailable ? (
                <small className="block text-start p-1 text-red-500">
                  {errors.quantityAvailable}
                </small>
              ) : (
                <small className="block text-start p-1 opacity-0">
                  console
                </small>
              )}
            </div>

            <div className="w-full my-10">
              <label htmlFor="description">
                Description: <textarea name="description" id="description" className="outline-none border-b-2 w-full"
                 value={values.description} onChange={handleChange} onBlur={handleBlur}
                  />
              </label>
              {errors.description && touched.description ? (
                <small className="block text-start p-1 text-red-500">
                  {errors.description}
                </small>
              ) : (
                <small className="block text-start p-1 opacity-0">
                  console
                </small>
              )}
            </div>

            <button className='w-full my-5 rounded-md py-1 text-lg tracking-wider font-semibold bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-900 text-white shadow-md' type='submit'>Submit</button>
            
          </form>

        </div>
      </section>
    </section>
  );
}

export default BloodBank
