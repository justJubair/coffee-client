import { createBrowserRouter } from "react-router-dom";
import { default as Root } from "../Root/Root";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";
import Register from "../pages/Register/Register";

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
                element: <Users/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
])

export default router