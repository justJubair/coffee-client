import { createBrowserRouter } from "react-router-dom";
import { default as Root } from "../Root/Root";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UpdateUser from "../pages/UpdateUser/UpdateUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("http://localhost:5000/coffees"),
                element: <Home/>
            },
            {
                path: "/addCoffee",
                element: <AddCoffee/>
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee/>,
                loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: "/users",
                loader: ()=> fetch("http://localhost:5000/users"),
                element: <Users/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/updateUser/:id",
                loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`),
                element: <UpdateUser/>
            }
        ]
    }
])

export default router