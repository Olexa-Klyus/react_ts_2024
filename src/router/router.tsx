import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AnotherLayout from "../layout/AnotherLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";


export const routerConfig = createBrowserRouter([
            {
                path: '/', element: <MainLayout/>,
                children: [    //це по факту outlet
                    {index: true, element: <HomePage/>},
                    {path: 'users', element: <UsersComponent/>},
                ]
            },

            {
                path: '/another', element:
                    <AnotherLayout/>
            }
        ]
    )
;
