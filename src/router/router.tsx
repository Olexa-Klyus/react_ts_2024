import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AnotherLayout from "../layout/AnotherLayout";
import HomePage from "../pages/HomePage";


export const routerConfig = createBrowserRouter([
            {
                path: '/', element: <MainLayout/>,
                children: [    //це по факту outlet
                    {path: 'users', element: <HomePage/>},
                ]
            },


            {
                path: '/another', element:
                    <AnotherLayout/>
            }
        ]
    )
;
