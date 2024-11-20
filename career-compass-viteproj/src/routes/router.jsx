import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
    },
    {
        path: '/services/:id',
        // element: <PrivateRoute>
        //     <NewsDetails />
        // </PrivateRoute>,
        // loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path: '/auth',
        // element: <AuthLayout />,
        // children: [
        //     {
        //         path: '/auth/login',
        //         element: <Login />
        //     },
        //     {
        //         path: '/auth/register',
        //         element: <Register />
        //     },
        // ],
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },
]);

export default router;