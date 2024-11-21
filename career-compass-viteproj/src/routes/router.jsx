import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";
import ServiceDetails from "../pages/Services/ServiceDetails";
import PrivateRoute from "../pages/Auth/PrivateRoute.jsx";
import AuthLayout from "../pages/Auth/AuthLayout.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import ExtraRoute from "../pages/ExtraRoute/ExtraRoute.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        loader: Loader,
    },
    {
        path: '/services/:id',
        element: <PrivateRoute>
            <ServiceDetails />
        </PrivateRoute>,
        loader: async ({ params }) => {
            const response = await fetch('/ServiceData.json'); // Replace with the actual path
            if (!response.ok) {
                throw new Response("Failed to load services data", { status: response.status });
            }
            const services = await response.json();
            const serviceID = services.find((service) => service.id === Number(params.id));

            if (!serviceID) {
                throw new Response("Service Not Found", { status: 404 });
            }

            return (serviceID);
        },
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
        ],
    },
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/extraRoute",
        element: <ExtraRoute/>
    }
]);

export default router;