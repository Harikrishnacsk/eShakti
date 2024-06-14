import MyAccount from "./MyAccounts/MyAccount";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./MyAccounts/Profile";
import MyOrders from "./MyAccounts/MyOrders";
import ManageAddress from "./MyAccounts/ManageAddress";
import GiftCoupon from "./MyAccounts/GiftCoupon";
import SizeProfile from "./MyAccounts/SizeProfile";

function App() {
  
 const appRouter = createBrowserRouter([
  {
    path : "/myaccount",
    element : <MyAccount/>,
    children : [
        {
          path : "profile",
          element : <Profile/>
        },
        {
          path : "myorders",
          element : <MyOrders/>
        },
        {
          path : "manageaddress",
          element : <ManageAddress/>
        },
        {
          path : "giftcoupon",
          element : <GiftCoupon/>
        },
        {
          path : "sizeprofile",
          element : <SizeProfile/>
        },
    ],
  },
  {
    path: "*",
    element : < Navigate to="/myaccount/"/>
  },
 ])

  return (
       <RouterProvider router={appRouter}>
        <MyAccount/>  
        </RouterProvider>
  );
}

export default App;
