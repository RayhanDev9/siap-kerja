import { useState } from "react";
// 1. UBAH IMPORT KE 'react-router-dom' dan gunakan 'createHashRouter'
import { createHashRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AppLayout from "./pages/Dashboard/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Login from "./pages/Autentikasi/Login.jsx";
import Autentikasi from "./pages/Autentikasi/Autentikasi.jsx";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard.jsx";
import CareerExplorer from "./pages/Dashboard/CareerExplorer/CareerExplorer.jsx";
import AiRecommendations from "./pages/Dashboard/AlRecommendations/AiRecommendations.jsx";
import SkillGap from "./pages/Dashboard/SkillGap/SkillGap.jsx";
import Analytics from "./pages/Dashboard/Analytis/Analytics.jsx";
import MarketTrends from "./pages/Dashboard/MarketTrends/MarketTrends.jsx";
import SavedCareers from "./pages/Dashboard/SavedCareers/SavedCareers.jsx";
import Profile from "./pages/Dashboard/Profile/Profile.jsx";
import Setting from "./pages/Dashboard/Setting/Setting.jsx";
import LearningRoadmap from "./pages/Dashboard/LearningRoadmap/LearningRoadmap.jsx";
import Register from "./pages/Autentikasi/Register.jsx";

// 2. GANTI MENJADI createHashRouter
const router = createHashRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/skillGap", element: <SkillGap /> },
        { path: "/analytics", element: <Analytics /> },
        { path: "/profile", element: <Profile /> },
        { path: "/aiRecommendations", element: <AiRecommendations /> },
        { path: "/marketTrends", element: <MarketTrends /> },
        { path: "/careerExplorer", element: <CareerExplorer /> },
        { path: "/savedCareers", element: <SavedCareers /> },
        { path: "/setting", element: <Setting /> },
        { path: "/learningRoadmap", element: <LearningRoadmap /> },
      ],
    },
    {
      element: <LandingPage />,
      errorElement: <Error />,
      path: "/landingPage", // Tambahkan garis miring (slash) di awal
    },
    {
      element: <Autentikasi />,
      errorElement: <Error />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ],
  {
    // Tambahkan basename ini agar sinkron dengan vite.config.js
    // basename: "/siap-kerja",
  },
  // CATATAN: Dengan HashRouter, Anda seringkali tidak membutuhkan 'basename' lagi.
  // Tapi jika masih bermasalah, Anda bisa biarkan kosong atau hapus baris opsi basename.
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
