import { useEffect, useState } from "react";
import UserDetailsBord from "./UserDetailsBord";
import { BACKEND_API, token } from "../utils/credentials";

import UsersFeedback from './UsersFeedback.jsx';
import DonetCompo from "../components/DonetCompo.jsx";

import { userData } from "../utils/credentials";
import IsAdmin from "./IsAdmin.jsx";
import toast from "react-hot-toast";
import Spinner from "./Spinner.jsx";


const Users = () => {
  const [users,setUsers]=useState([]);
  const [userProfileHandling,setUserProfileHandling]=useState(true);
  const [selectItem,setSelectItem]=useState(null);

  // search state variables.
  const [search,setSearch]=useState('');

  useEffect(()=>{
    if(token){
      fetchUserData()
      findingApprovalOrNot()
    }else{
      localStorage.removeItem(token);
      window.location.assign('/')
    }
  },[token]);

  const fetchUserData = async()=>{
    try {
      const req = await fetch(`${BACKEND_API}/api/users`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
      const response = await req.json();

      setUsers(response.data);
      if(response.data){
        toast.success("succesfully landing dashBord.")
      }else{
        window.location.assign('/')
        localStorage.removeItem("user")
      }
    } catch (error) {
      toast.error('Error during getting data:', error);
    }
  }

  const sectionItems = (info) => {
    setSelectItem(info)

  }


  const userProfileHandler = () => {
    setUserProfileHandling(!userProfileHandling)
  }

  // search submit..
  let filter = users.filter((ser)=>ser.blood_group.toLowerCase().includes(search.toLowerCase()) || ser.district.includes(search.toLowerCase()) || ser.city.toLowerCase().includes(search.toLowerCase()) || ser.state.toLowerCase().includes(search.toLowerCase()));


  // sending user your account approval or not like..
  const findingApprovalOrNot = () => {
    users.find((info)=>{
      if(info._id === userData._id){
        info.approved ? toast.success('your account approved..🚀') : toast.error("your account still pending hop's approved soon.!! 🤞 ")
      }
    })
  }

  return (
    <>
    {!users && <Spinner/>}
      <section className="w-full overflow-hidden h-fit bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r sticky md:top-[3.3rem] left-0">
        <section className="w-full h-fit pt-20 relative">

          {/* donate tag */}
          {userData.role !== 'admin' && (<div className="w-fit h-fit absolute top-10 -right-[6rem] hover:right-0 duration-200 ease-in-out " title="please select carefully!!">
            {/* <NavLink to='nav' className='text-white rounded-l-full px-2 flex justify-center bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-bold hover:text-black shadow-lg shadow-red-300'><span className="drop-shadow-md">🩸</span> Donate</NavLink> */}
            <div className='cursor-pointer text-white rounded-l-full px-2 flex justify-center items-center bg-gray-500 hover:bg-gray-600 active:bg-gray-700 font-bold hover:text-black shadow-lg shadow-red-300'>
              <DonetCompo/>
            </div>
          </div>)}


          {/* searching section */}
          <div className="w-full h-full px-2 py-3  flex justify-center pb-20">
            <div className="w-9/12 md:w-5/12 h-fit flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 outline-none rounded-l-lg border-r-2 border-gray-600 px-5 py-1 bg-gray-50 shadow-sm"
                name="search"
                id="search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
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
      {userData.role !== 'admin' ?(
        <>
          <div className="w-full h-full border bg-white relative">
            <table className="w-full h-full">
              <thead>
                <tr className="w-full h-full sticky md:top-[16.5rem] left-0 bg-white shadow">
                  <th className="border py-2 w-1/12">SL NO</th>
                  <th className="border py-2 w-2/12">Username</th>
                  <th className="border py-2 w-2/12">Blood Group</th>
                  <th className="border py-2 w-2/12">City</th>
                  <th className="border py-2 w-2/12">district</th>
                  <th className="border py-2 w-2/12">State</th>
                  <th className="border py-2  w-3/12">Feedback</th>
                </tr>
              </thead>

              <tbody className="w-full h-full">
                {
                  users && users.length > 0 ? (filter.map((info,index)=>(
                    info.approved ? (
                      <tr onClick={()=>{userProfileHandler();sectionItems(info);}} key={info._id} className="w-full h-full hover:bg-gray-50 active:bg-gray-100">
                        <UserDetailsBord index={index} info={info} />
                      </tr>
                    ):(null)
                  ))):(null)
                }
                {/* <tr className="w-full h-full">
                  <UserDetailsBord />
                </tr> */}
              </tbody>
            </table>


            {/* user feedback profile box */}
            { userProfileHandling && selectItem ? (
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit border  rounded-sm bg-white shadow-lg px-2 py-5">
              <UsersFeedback selectItem={selectItem} userProfileHandler={userProfileHandler}/>
            </section>
            ) : ""}
          </div>
        </>
      ):
      (<IsAdmin users={users} filter={filter}/>)}
    </>
  );
}

export default Users
