import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Dashboard/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import ContactUs from "../pages/ContactUs/ContactUs";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "order-food/:category",
                element: <Order />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: 'contact',
                element: <ContactUs />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: ([
            {
                path: "my-cart",
                element: <Cart />
            },
            {
                path: "all-users",
                element: <AllUsers />
            }
        ])
    }
])

export default router;