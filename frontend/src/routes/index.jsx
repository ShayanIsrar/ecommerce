import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import ForgotPassword from "../components/pages/ForgotPassword";
import SignUp from "../components/pages/SignUp";
import AdminPanel from "../components/pages/AdminPanel";
import AllUsers from "../components/pages/AllUsers";
import AllProducts from "../components/pages/AllProducts";

  const router = createBrowserRouter([
    {
        path: "/",
        element:(
            <App/>
        ),
        children:[
            {
              path: "",
              element: <Home/>
            },
            {
              path: "login",
              element: <Login/>
            },
            {
              path: "forgot-password",
              element: <ForgotPassword/>
            },
            {
              path: "sign-up",
              element: <SignUp/>
            },
            {
              path: "admin-panel",
              element: <AdminPanel/>,
              children:[
                {
                  path: "all-users",
                  element: <AllUsers/>
                },
                {
                  path: "all-products",
                  element: <AllProducts/>
                }
              ]
            },
            
        ]
    }
  ])

  export default router