import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ShowSummary from "../pages/ShowSummary";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element: <Home/>,
                loader: ()=> fetch("https://api.tvmaze.com/search/shows?q=all")
            },
            {
                path:"/shows/:id",
                element: <ShowSummary/>,
                loader: ({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`)
            },
            
        ]

    },
    // {
    //     path:"/login",
    //     element: <Login/>
    // },
    // {
    //     path:"/register",
    //     element: <Register/>
    // },
])