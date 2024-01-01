import React, { useEffect, useState } from 'react'
import IsAdminDashbord from './IsAdminDashbord'
import { BACKEND_API, token } from '../utils/credentials';
import AdminPop from './AdminPop';

const IsAdmin = ({users,filter}) => {
  const [donor,setDoner]=useState([]);
  const [bloodbanker,setBloodbanker]=useState([]);
  const [popshow,setPopshow]=useState(false)
  const [userInfo,setUserInfo]=useState(null);


  const donerEndPoin = `${BACKEND_API}/api/donor`
  const bloodbankerEndPoint = `${BACKEND_API}/api/bloodBanker`

  const fetchDatas = async (url) => {
    try {
      const response = await fetch(url,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'x-access-token':token
        },
      })
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    const fetchBothDatas = async()=>{
      try {
        const [donorResult,bloodbankerResult] = await Promise.all([
          fetchDatas(donerEndPoin),
          fetchDatas(bloodbankerEndPoint)
        ]);

        setDoner(donorResult.data);
        setBloodbanker(bloodbankerResult.data);
      } catch (error) {
        console.error('Error fetching both data:', error);
      }
    }

    fetchBothDatas();
  },[token]);

  // console.log(donor)
  // console.log(bloodbanker)

  return (
    <div className='w-full h-full border bg-white relative'>
      <table className='w-full h-full'>
        <thead>
            <tr className="w-full h-full sticky md:top-[16.5rem] left-0 bg-white shadow">
                <th className="border py-0.5 w-0.5/12 text-center">SL NO</th>
                <th className="border py-0.5 w-2/12">Username</th>
                <th className="border py-0.5 w-0.5/12">Role</th>
                <th className="border py-0.5 w-1/12">Donet Blood(ml)</th>
                <th className="border py-0.5 w-2/12">Donet Date</th>
                <th className="border py-0.5 w-1/12">City</th>
                <th className="border py-0.5 w-2/12">District</th>
                <th className="border py-0.5 w-2/12">State</th>
                <th className="border py-0.5 w-1/12">Status</th>
            </tr>
        </thead>

        <tbody className='w-full h-full'>
            {
                users && users.length > 0 ? (filter.map((info,index)=>(
                    <tr onClick={()=>{setUserInfo(info);setPopshow(true);}} key={info._id} className="w-full h-full hover:bg-gray-50 active:bg-gray-100">
                        <IsAdminDashbord index={index} info={info}/>
                    </tr>
                ))):(null)
            }
        </tbody>
      </table>


      {/* pops */}
      {popshow && <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit rounded-sm bg-white shadow-lg px-5 py-5">
        <AdminPop setPopshow={setPopshow} userInfo={userInfo} donor={donor} bloodbanker={bloodbanker}/>
      </section>}
    </div>
  )
}

export default IsAdmin
