import {Link, Outlet} from 'react-router-dom';


const MyAccount = () =>{
   return (
    <div className="mt-10 flex">
      <div className="w-3/12 max-h-80 ml-16 shadow-lg p-6">
      <h6 className='my-4 font-semibold font-sans'>My Account</h6>
         <ul>
            <li className='my-3'>
             <Link to="profile"> 🦸 Profile</Link>
            </li>
            <hr className='border-gray-200'></hr>
            <li className='my-3'>
             <Link to="myorders"> 🎁 My Orders</Link>
            </li>
            <hr className='border-gray-200'></hr>
            <li className='my-3'>
             <Link to="manageaddress"> 📌 Manage Address</Link>
            </li>
            <hr className='border-gray-200'></hr>
            <li className='my-3'>
             <Link to="giftcoupon"> 🔖 Gift Coupons & Cards</Link>
            </li>
            <hr className='border-gray-200'></hr>
            <li className='my-3'>
             <Link to="sizeprofile"> ➰ Size Profile</Link>
            </li>
         </ul>
      </div>
      <div className="w-9/12 ml-10 mr-10 shadow-lg">
         <Outlet/>
      </div>
    </div>
   )
}

export default MyAccount;
