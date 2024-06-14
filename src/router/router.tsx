import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";

const routes:RouteObject[]=[
    {path:'/',element:<App/>,children:[
            {path:'users',element:<UsersPage/>}
        ]}
]
const router=createBrowserRouter(routes);

export {
    router
}