import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {ReactNode} from "react";



const router = createBrowserRouter([
    {
        path: '', element: `<MainLayout/>`, children:[
            {
                index:true, element: Navigate to/>
            }

        ]
    }
])



export {
    router
}