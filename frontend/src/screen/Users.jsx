import { useEffect, useState } from "react";
import UserDetailsBord from "./UserDetailsBord";
import { BACKEND_API, token } from "../utils/credentials";
import { LiaTelegram } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const Users = () => {
  const messageBody = "Blood needed sir.";
  const [users,setUsers]=useState([]);
  const [userProfileHandling,setUserProfileHandling]=useState(true);
  const [selectItem,setSelectItem]=useState(null);

  useEffect(()=>{
    if(token){
      fetchUserData()
    }
  },[token]);

  const fetchUserData = async()=>{
    try {
      const req = await fetch(`${BACKEND_API}/api/users`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
      const response = await req.json();
      setUsers(response.data);

    } catch (error) {
      console.error('Error during BloodBank:', error);
      alert('Error during BloodBank:', error);
    }
  }

  const sectionItems = (info) => {
    setSelectItem(info)
  }

  const userProfileHandler = () => {
    setUserProfileHandling(!userProfileHandling)
  }

  // console.log(users)
  return (
    <>
      <section className="w-full h-fit bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r sticky top-[3.3rem] left-0">
        <section className="w-full h-fit pt-20">
          {/* searching section */}
          <div className="w-full h-full px-2 py-3  flex justify-center pb-20">
            <div className="w-5/12 h-fit flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 outline-none rounded-l-lg border-r-2 border-gray-600 px-5 py-1 bg-gray-50 shadow-sm"
              />
              <button
                className="bg-gray-200 px-3 rounded-r-lg shadow-inherit font-bold hover:bg-gray-300 active:bg-gray-400 duration-100 ease-in-out"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </section>
      </section>


      {/* user section */}
      <div className="w-full h-full border bg-white relative">
        <table className="w-full h-full">
          <thead>
            <tr className="w-full h-full sticky top-[16.5rem] left-0 bg-white shadow">
              <th className="border py-2 w-1/12">SL NO</th>
              <th className="border py-2 w-2/12">Username</th>
              <th className="border py-2 w-2/12">Blood Group</th>
              <th className="border py-2 w-2/12">City</th>
              <th className="border py-2 w-2/12">State</th>
              <th className="border py-2  w-3/12">View</th>
            </tr>
          </thead>

          <tbody className="w-full h-full">
            {
              users && users.map((info,index)=>(
                <tr onClick={()=>{userProfileHandler();sectionItems(info);}} key={info._id} className="w-full h-full hover:bg-gray-50 active:bg-gray-100">
                  <UserDetailsBord index={index} info={info}/>
                </tr>
              ))
            }
            {/* <tr className="w-full h-full">
              <UserDetailsBord />
            </tr> */}
          </tbody>
        </table>


        {/* profile box */}
        { userProfileHandling && selectItem ? (
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-fit border  rounded-sm bg-[#d4d1d1d7] shadow-lg px-2 py-5">
          <div className="w-full flex justify-end text-end px-5">
            <RxCross2 onClick={userProfileHandler} className="text-2xl cursor-pointer font-bold"/>
          </div>
          <section className="w-full text-center">
            <h2 className="text-2xl font-bold capitalize my-6">{selectItem.name}</h2>


          <div className="py-2 w-full flex justify-center items-center">
            <button className="py-1 px-2 mx-3 rounded-md text-black bg-green-500 hover:bg-green-600 focus:bg-green-700 active:bg-green-800 shadow-md hover:text-white"><a href={`sms:${''}?body=${encodeURIComponent(messageBody)}`}>Send text message</a></button>
            <button className="py-1 px-2 mx-3 rounded-md text-black bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-800 shadow-md hover:text-white"><a href={`tel:+${''}`}>Call Us</a></button>
            <button><LiaTelegram className="text-[1.4rem] mx-3 drop-shadow-lg"/></button>
          </div>

          <section className="w-full mt-8">
              <form className="w-full px-10">
                <label htmlFor='feedback' className="text-lg capitalize font-bold">
                  Please enter feedback: <textarea  name='feedback' id='feedback' placeholder="write here..!" className='outline-none border-b-2 w-full text-base font-normal text-gray-700 px-4 py-2'/>
                </label>
              </form>
          </section>
          </section>
        </section>
        ) : ""}
      </div>
    </>
  );
}

export default Users
