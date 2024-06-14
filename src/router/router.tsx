import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";
import PostPage from "../pages/PostsPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostPage/>},
            {path: 'users/:id', element: <UserPage/>}
        ]
    }
]

const router = createBrowserRouter(routes);

export {
    router
}