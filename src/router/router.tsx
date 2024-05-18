import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";


export const routerConfig = createBrowserRouter([
            {
                path: '/', element: <MainLayout/>,
                children: [    //це по факту outlet
                    {index: true, element: <HomePage/>},
                    // {path: 'users/:id', element: <UsersPage/>}, тоді сторінка user буде підміняти users
                    // або робити в окремому outleti через вкладення
                    {
                        path: 'users', element: <UsersPage/>,
                        children: [{path: ':id', element: <PostsPage/>}]
                    },
                ]
            },
        ]
    )
;
