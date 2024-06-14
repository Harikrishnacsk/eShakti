import { useState } from "react";

const Profile = () =>{
   const [editBtn, setEditBtn] = useState(false);
   const [animi, setAnimi] = useState(false);
   const [changePassword, setChangePassword] = useState(false)

   const handleEditInfoBtn = () =>{
         setEditBtn(!editBtn);
         setAnimi(true);
       setTimeout(() =>{
         setAnimi(false);
       }, 200)
   };

   const handleChangePassword = () =>{
      setChangePassword(true);
   }


   return(
      
    <div className="p-10">
        <h2 className="mb-14 text-xl font-bold">Personal Information</h2>
        {!editBtn ? ( 
         <div>
        <div className="flex">
        <div className="w-1/2">
        <label className="block font-thin">Email ID</label>
        <p className="font-medium">harikrishna@eshakti.com</p>
        </div>
        <div className="mb-8 w-1/2">
        <label className="block font-thin">password</label>
        <p className="font-medium">**********</p>
        </div> 
        </div>
        <div className="flex">
         <div className="w-1/2">
        <label className="block font-thin">Name</label>
        <p className="font-medium">Hari krishna</p>
        </div>
        <div className="mb-8 w-1/2">
        <label className="block font-thin">Phone Number</label>
        <p className="font-medium">7358287337</p>
        </div>
        </div>
        </div>
        ) : (
         <div>
          <div className="flex">
        <div className="w-1/3">
        <label className="block font-thin">Email ID</label>
        <p className="font-medium">harikrishna@eshakti.com</p>
        </div>
        <div className="mb-8 w-1/3">
        <label className="block font-thin">password</label>
        <p className="font-medium">**********</p>
        </div> 
        <div className="w-1/3">
          <button className="underline underline-offset-8"
          onclick={handleChangePassword}>change password</button>
        </div>
        </div>
        <hr className="border-gray-300 mb-8"></hr>
        <div className="flex">
         <div className="w-1/2">
         <label className="block font-thin">Name</label>
          <input type="text" className="mb-8 w-3/4 my-1 px-2 py-2 border border-gray-300 focus:outline-none sm:text-sm"></input>
         </div>
         <div className="w-1/2">
         <label className="block font-thin">Phone Number</label>
         <input type="Number" className="mb-8 w-3/4 my-1 px-2 py-2 border border-gray-300 focus:outline-none sm:text-sm"></input>
         </div>
        </div>
        </div>
        )}
        <div>
        <button onClick={handleEditInfoBtn}
        className={`transition-transform duration-200 ${animi ? 'transform scale-95' : ""}`}>{editBtn ? 
         <button className="p-3 w-32 bg-orange-600 text-white ">Save</button> : "Edit info" }</button>
       </div>
    </div>
    
   )
}

export default Profile;