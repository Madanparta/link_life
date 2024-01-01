import { FcApproval } from "react-icons/fc";
import pending from '../stocks/icons8-pending-16.png';
import { useEffect, useState } from "react";

const IsAdminDashbord = ({info,index,donor,bloodbanker}) => {
    const {district,state,name,role,approved,city} = info;

    const [donorData,setDonorData]=useState('');
    const [bankerData,setBankerData]=useState('');

    const {donationQuantity,donationDate} = donorData;
    const {description,quantityAvailable,updatedAt,bloodGroup} = bankerData;

    // donordata handling ...
  const DonorHandler = () => {
    if (info && info._id) {
      donor.find((don) => {
        if (don.user === info._id) {
          setDonorData(don);
        }
      });
    }
  };

//   handling banker data..
  const BankerHandler = () => {
    if (info && info._id) {
        bloodbanker.find((bank)=>{
            if(bank.user === info._id){
                setBankerData(bank);
            }
        })
    }
  }

  useEffect(() => {
    if (info && info._id) {
      DonorHandler();
    }
    if(info && info.role === 'bloodbank'){
        BankerHandler();
    }
  }, [info && info._id],donor,bloodbanker);


  // data formating..
  const dateString = updatedAt || donationDate;
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = dateObject.getDate().toString().padStart(2, '0');

  const formattedDate = `${day}-${month}-${year}`;


    if(role === 'admin') return;
  return (
    <>
      <td className="border py-2 px-0.5 overflow-x-hidden w-0.5/12 text-center cursor-pointer">{index}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{name}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-0.5/12 text-center cursor-pointer">{role || "N/A"}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1/12 text-center cursor-pointer">{donationQuantity || quantityAvailable}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{formattedDate}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1/12 text-center cursor-pointer">{city}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{district}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-2/12 text-center cursor-pointer">{state}</td>
      <td className="border py-2 px-0.5 overflow-x-hidden w-1/12 text-center cursor-pointer flex justify-center items-center h-full w-full">{approved ? <FcApproval/> : <img src={pending} alt="pending."/>}</td>
    </>
  )
}

export default IsAdminDashbord
