import { FcApproval } from "react-icons/fc";
import pending from '../stocks/icons8-pending-16.png';

const IsAdminDashbord = ({info,index}) => {
    const {district,state,name,role,approved,city } = info;
    
    if(role === 'admin') return;
  return (
    <>
      <td className="border py-2 px-0.5 overflow-x-hidden w-0.5/12 text-center cursor-pointer">{index}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{name}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-0.5/12 text-center cursor-pointer">{role || "N/A"}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1/12 text-center cursor-pointer">null</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">null</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1/12 text-center cursor-pointer">{city}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{district}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{state}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1/12 text-center cursor-pointer flex justify-center items-center h-full w-full">{approved?<FcApproval title="approval"/> : <img title="pending" src={pending} alt="pending"/>}</td>
    </>
  )
}

export default IsAdminDashbord
