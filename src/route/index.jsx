import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardUser from "@/pages/dashboard/dashboarUser/dashboardUser";
import NotFound from "@/pages/404notfound";
import Login from "@/pages/login";
import Register from "@/pages/register";
import AddUser from "@/pages/dashboard/dashboarUser/addUser";



export default function Route() {
    const router = createBrowserRouter(
        [
            { path: "/", element: <Login /> },
            { path: "*", element: <NotFound /> },
            { path: "/register", element: <Register /> },
            { path: "/dashboard/user", element: <DashboardUser /> },
            { path: "/dashboard/user/add", element: <AddUser /> },
            // { path: "/dashboard/product", element: <DashboardProduct /> },
        ]
    );
    return <RouterProvider router={router} />;
}