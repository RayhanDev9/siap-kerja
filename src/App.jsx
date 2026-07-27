import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Login from "./pages/Autentikasi/Login.jsx";
import Autentikasi from "./pages/Autentikasi/Autentikasi.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
  {
    element: <LandingPage />,
    errorElement: <Error />,
    path: "landingPage",
  },
  {
    element: <Autentikasi />,
    errorElement: <Error />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
