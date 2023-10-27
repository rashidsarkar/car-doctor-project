import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";

import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // element: <ItemList></ItemList>,
      },
      {
        path: "checkout/:idx",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <Bookings></Bookings>,
          </PrivateRoutes>
        ),
        // element: <Bookings></Bookings>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);
export default router;
