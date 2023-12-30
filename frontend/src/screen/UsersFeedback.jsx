import { useFormik } from "formik";
import { LiaTelegram } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { feedbackValidation } from "../schema";
import { BACKEND_API, token } from "../utils/credentials";

import { IoSend } from "react-icons/io5";

const initialValues = {
    feedback:"",
}

const UsersFeedback = ({userProfileHandler,selectItem}) => {

    const {phone_number,username,_id} = selectItem;

    const {handleBlur,handleChange,handleSubmit,values} = useFormik({
        initialValues:initialValues,
        validationSchema:feedbackValidation,
        onSubmit: async(values,action)=>{
            console.log(values)

            try {
                // const req = await fetch(`${BACKEND_API}/api/users/feedback`,{method: 'POST',headers:{'Content-Type': 'application/json','x-access-token':token},body: JSON.stringify(values),})

                // const data = await req.json();
                // console.log(data)
                // if(data){
                //     alert("successfullyu added feedback")
                //     action.resetForm()
                // }

            } catch (error) {
                console.error('Error during feedback:', error);
                alert('Error during feedback:', error);
            }
        }
    });


    // const updateFeedback = async()=>{
    //     try {
    //       const configuration = {
    //         url : `${BACKEND_API}/api/feedback/:${selectItem._id}`,
    //         method:'PUT',
    //         data : {feedback:}
    //       }
    //       // const req = await fetch(`${BACKEND_API}/feedback/`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
    //       // const response = await req.json();
    
    //       // setUsers(response.data);
    //       // setFeedback(response.data)
    
    //     } catch (error) {
    //       console.error('Error during getting data:', error);
    //       alert('Error during getting data:', error);
    //     }
    //   }
  return (
    <>
        <div className="w-full flex justify-end text-end px-5"><RxCross2 onClick={userProfileHandler} className="text-2xl cursor-pointer font-bold"/></div>
        <section className="w-full text-center">
            <h2 className="text-2xl font-bold capitalize my-6">{username} ( "d/b")</h2>


            <div className="py-2 w-full flex justify-center items-center">
                <button className="py-1 px-2 mx-3 rounded-md text-black bg-green-500 hover:bg-green-600 focus:bg-green-700 active:bg-green-800 shadow-md hover:text-white"><a href={''}>Send text message</a></button>
                <button className="py-1 px-2 mx-3 rounded-md text-black bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-800 shadow-md hover:text-white"><a href={`tel:+${phone_number}`}>Call Us</a></button>
                <button><LiaTelegram className="text-[1.4rem] mx-3 drop-shadow-lg"/></button>
            </div>

            <section className="w-full mt-8">
                <form className="w-full px-10 flex justify-center items-center" onSubmit={handleSubmit}>
                    <label htmlFor='feedback' className="text-lg capitalize font-bold">
                    Please enter feedback: <textarea  name='feedback' id='feedback' placeholder="write here..!" className='outline-none border-b-2 w-full text-base font-normal text-gray-700 px-4 py-2' value={values.feedback} onChange={handleChange} onBlur={handleBlur}/>
                    </label>
                    <button type="submit"><IoSend className="text-2xl"/></button>
                </form>
            </section>
        </section>
      
    </>
  )
}

export default UsersFeedback
