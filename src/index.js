import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

import {
    createBrowserRouter,
    RouteProvider,
    Route,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/home",
        element: <App />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
)