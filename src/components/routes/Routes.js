import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import FAQ from "../FAQ/FAQ";

export const router=createBrowserRouter([
    {path:'/',element:<Main/>,children:[
        {path:'/courses',element:<Courses/>},
        {path:'/faq',element:<FAQ/>},
        {path:'/blog',element:<Blog/>},
        
    ]
}
])