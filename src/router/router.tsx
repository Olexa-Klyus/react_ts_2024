import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AnotherLayout from "../layout/AnotherLayout";


export const routerConfig = createBrowserRouter([
        {path: '/', element: <MainLayout/>},
        {path: '/another', element: <AnotherLayout/>}
    ]
);
