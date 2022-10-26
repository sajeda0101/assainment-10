import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage/ErrorPage";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import Login from "../RegistrationInfo/Login";
import Signup from "../RegistrationInfo/Signup";

export const router=createBrowserRouter([
    {path:'/',
    errorElement:<ErrorPage/>
    ,element:<Main/>,children:[
        {path:'/home',element:<Home/>},
        {path:'/courses',element:<Courses/>,
    loader:()=>fetch('http://localhost:5000/course')},
        {path:'/faq',element:<FAQ/>},
        {path:'/blog',element:<Blog/>},
        {path:''},
        {path:'/login',element:<Login/>},
        {path:'/signup',element:<Signup/>}
    ]
}
])