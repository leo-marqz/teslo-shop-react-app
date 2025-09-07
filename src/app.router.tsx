import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";

// Lazy load layouts
const AuthLayout = lazy(()=> import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(()=> import('./admin/layouts/AdminLayout'));

export const appRouter = createBrowserRouter([
    //Public routes
    {
        path: '/', 
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:slug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            }
        ]
    },

    //Auth routes
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                // Si alguien entra a /auth lo redirijo a /auth/login
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },
    //Dashboard routes - ADMIN
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />
            }
        ]
    },
    {
        // Si no existe la ruta, lo redirijo a /
        // A esto se le conoce como 'Comodin'
        path: '*',
        element: <Navigate to='/' />
    }
]);








