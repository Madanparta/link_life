
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { BACKEND_API, token } from "../utils/credentials";
import Spinner from "./Spinner";

const AdminPop = ({setPopshow,userInfo,donor,bloodbanker}) => {
    const [donorData,setDonorData]=useState('');
    const [bankerData,setBankerData]=useState('');
    const [approval,setApproval]=useState(false);

    const {name,age,blood_group,city,district,email,state,phone_number,role,_id,approved} = userInfo;
    const {donationQuantity,donationDate} = donorData;
    const {description,quantityAvailable,updatedAt,bloodGroup} = bankerData;

    // donordata handling ...
  const DonorHandler = () => {
    if (userInfo && userInfo._id) {
      donor.find((don) => {
        if (don.user === userInfo._id) {
          setDonorData(don);
        }
      });
    }
  };

//   handling banker data..
  const BankerHandler = () => {
    if (userInfo && userInfo._id) {
        bloodbanker.find((bank)=>{
            if(bank.user === userInfo._id){
                setBankerData(bank);
            }
        })
    }
  }

  useEffect(() => {
    if (userInfo && userInfo._id) {
      DonorHandler();
    }
    if(userInfo && userInfo.role === 'bloodbank'){
        BankerHandler();
    }
  }, [userInfo && userInfo._id],donor,bloodbanker);


//   user approval or reject handling..

    const userApprovalHandling = async() => {
        try {
            const req = await fetch(`${BACKEND_API}/dashBord/approval/${_id}`,{method:'PUT',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify({approved:approval}),})
            const data = await req.json();
            // console.log(data)
            if(data){
                toast.success('succesfully updated..')
                setTimeout(() => {
                    window.location.assign('/users')
                }, 1000);
            }
        } catch (error) {
            toast.error('somthing went to wrong in approval:', error);
        }
    }
  return (
    <>
      <div className="w-full flex justify-end text-end px-5"><RxCross2 onClick={()=>setPopshow(false)} className="text-2xl cursor-pointer font-bold"/></div>

      <div className="capitalize">
        <div className="flex flex-col gap-1 overflow-hidden">
            <p>name : <span>{name}</span></p>
            <p>Role : <mark>{role}</mark></p>
            <p>age  : <span>{age}</span></p>
            <p>phone number : <span>{phone_number}</span></p>
            <p>email : <span>{email}</span></p>
            <p>blood group : <mark>{bloodGroup} {role === 'donor' && blood_group}</mark></p>
            <p>Quantity : <mark>{donationQuantity || quantityAvailable}<span className="lowercase font-bold text-sm">(ml)</span></mark></p>
            <p>address : <span># {city}, {district}, {state}.</span></p>
            <p>updated at : <mark>{donationDate || updatedAt}</mark></p>
            {description && <p>discription : <span>{description && description }</span></p>}
        </div> 
        <div className="flex justify-around items-center mt-5">
            <button title="double click here" onClick={()=>{userApprovalHandling();setApproval(true)}} className={`bg-green-400 text-white px-2 py-1 rounded-md hover:bg-green-500 active:bg-green-600 shadow-md ${approved ? 'cursor-not-allowed opacity-50 pointer-events-none' : 'cursor-pointer'}`}>approve</button>
            <button onClick={()=>{userApprovalHandling();setApproval(false)}} className={`bg-red-400 text-white px-2 py-1 rounded-md hover:bg-red-500 active:bg-red-600 shadow-md ${!approved ? 'cursor-not-allowed opacity-50 pointer-events-none' : 'cursor-pointer'}`}>reject</button>
        </div>
      </div>
    </>
  )
}

export default AdminPop
