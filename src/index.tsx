import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const routerConfig = createBrowserRouter([
    {path: '/', element: '<h2>hello Router</h2>'},
    {path: '/contacts', element: '<h3>contacts</h3>'}
]);

root.render(<RouterProvider router={routerConfig}></RouterProvider>);
