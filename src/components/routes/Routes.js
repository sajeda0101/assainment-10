import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Course from "../Courses/Course";
import CourseInfo from "../Courses/CourseInfo";
import CourseLeftSide from "../Courses/CourseLeftSide";
import CourseRightSide from "../Courses/CourseRightSide";
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
        {path:'/course',element:<Course/>,loader:()=>fetch('http://localhost:5000/courses-categories')},
        {path:'/faq',element:<FAQ/>},
        {path:'/blog',element:<Blog/>},
        {path:'/login',element:<Login/>},
        {path:'/courses/:id',element:<CourseInfo/>,loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)},
        {path:'/signup',element:<Signup/>},
        {path:'/checkout',element:<Checkout/>}
    ]
}
])