import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CharactersPage from "./pages/CharactersPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'characters/'}/>
            },
            {
                path:'characters', element:<CharactersPage/>
            }]
    }
]);

export {
    router
};