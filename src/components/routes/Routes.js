import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Course from "../Courses/Course";
import CourseInfo from "../Courses/CourseInfo";
import ErrorPage from "../ErrorPage/ErrorPage";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import Login from "../RegistrationInfo/Login";
import Signup from "../RegistrationInfo/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router=createBrowserRouter([
    {
    errorElement:<ErrorPage/>
    ,element:<Main/>,children:[
        {path:'/',element:<Home/>},
        {path:'/course',element:<Course/>},
        {path:'/faq',element:<FAQ/>},
        {path:'/blog',element:<Blog/>},
        {path:'/login',element:<Login/>},
        {path:'/courses/:id',element:<CourseInfo/>,loader:({params})=>fetch(`https://procode-server.vercel.app/course/${params.id}`)},
        {path:'/signup',element:<Signup/>},
        {path:'/checkout/:id',element:<PrivateRoute><Checkout/></PrivateRoute>,loader:({params})=>fetch(`https://procode-server.vercel.app/courses/${params.id}`)}
    ]
}
])