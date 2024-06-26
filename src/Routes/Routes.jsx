import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails/ServiceDetails'
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/services/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://car-doctor-server-nine-lac.vercel.app/services/${params.id}`)
        },
        {
          path:'/checkout/:id',
          element:<Checkout></Checkout>,
          loader: ({params})=>fetch(`https://car-doctor-server-nine-lac.vercel.app/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
      ]
    },
  ]);

  export default router