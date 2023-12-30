
import { LiaTelegram } from "react-icons/lia";

const UserDetailsBord = ({info,index}) => {
  const {blood_group,city,name,state,district,} = info;
  return (
    <>
      <td className="border py-2 px-0.5 overflow-x-hidden w-0.5/12 text-center cursor-pointer">{index}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{name}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1/12 text-center cursor-pointer">{blood_group}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{city}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{district}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1.5/12 text-center cursor-pointer">{state}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-3/12 text-center" onClick={(e)=>e.stopPropagation()}>
        {/* <button className="cursor-pointer py-1 px-2 mx-3 rounded-md text-black bg-green-500 hover:bg-green-600 focus:bg-green-700 active:bg-green-800 shadow-md hover:text-white"><a href={`sms:${phone_number}?body=${encodeURIComponent(messageBody)}`}>Send text message</a></button>
        <button className="cursor-pointer py-1 px-2 mx-3 rounded-md text-black bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-800 shadow-md hover:text-white"><a href={`tel:+${phone_number}`}>Call Us</a></button>
        <button><LiaTelegram className="cursor-pointer text-[1.4rem] mx-3 drop-shadow-lg"/></button> */}

        {

        }
      </td>
    </>
  )
}
// <AiFillMessage className="text-xl text-green-600 mx-3 border rounded-full hover:border-blue-400"/>

export default UserDetailsBord
