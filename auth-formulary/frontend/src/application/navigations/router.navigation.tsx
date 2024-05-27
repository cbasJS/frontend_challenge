import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../presentation/pages/home/home.page";
import NotFoundPage from "../../presentation/pages/not-found/not-found.page";
import LoginPage from "../../presentation/pages/login/login.page";
import RegisterPage from "../../presentation/pages/register/register.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
