import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import Dashboard from "../pages/dashboard.jsx";
import NotFound from "../pages/404notfound.jsx";

export default function Route() {
    const router = createBrowserRouter(
        [
            { path: "*", element: <NotFound /> },
            { path: "/", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/dashboard", element: <Dashboard /> },
        ]
    );
    return <RouterProvider router={router} />;
}