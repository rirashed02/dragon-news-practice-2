import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
// import Header from "../pages/shared/header/Header";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/news/News";
import LogRegisLayout from "../layouts/LogRegisLayout";
import Login from "../pages/logReg/login/Login";
import Register from "../pages/logReg/register/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Terms from "../pages/shared/terms/Terms";
// import { FaHome } from "react-icons/fa";
// import Home from "../pages/home/home/Home";

const router = createBrowserRouter([
    {
        path:'/', 
        element:<LogRegisLayout></LogRegisLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            
            {
                path:':id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router;