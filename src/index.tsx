import React from 'react';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.css';
import {router} from "./router";
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

