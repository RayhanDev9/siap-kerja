// import { useState } from "react";
// 1. UBAH IMPORT KE 'react-router-dom' dan gunakan 'createHashRouter'
import { createHashRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage.jsx";
// Autentikasi
import Autentikasi from "./pages/Autentikasi/Autentikasi.jsx";
import Register from "./pages/Autentikasi/Register.jsx";
import Login from "./pages/Autentikasi/Login.jsx";

// Halaman utama
import AppLayout from "./pages/Dashboard/AppLayout.jsx";
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

// Onboarding
import OnboardingAppLayout from "./pages/Onboarding/OnboardingAppLayout.jsx";
import OnboardingPage1 from "./pages/Onboarding/Page1/OnboardingPage1.jsx";
import OnboardingPage2 from "./pages/Onboarding/Page2/OnboardingPage2.jsx";
import OnboardingPage3 from "./pages/Onboarding/Page3/OnboardingPage3.jsx";
import OnboardingPage4 from "./pages/Onboarding/Page4/OnboardingPage4.jsx";
import OnboardingPage5 from "./pages/Onboarding/Page5/OnboardingPage5";

// Course
import CourseLayout from "./pages/course/CourseLayout.jsx";
import Course from "./pages/course/Course.jsx";

// Another
import Error from "./ui/Error.jsx";
import tes from "./tes.js";

// Help Components
import FAQ from "./pages/Dashboard/Help/Components/FAQ.jsx";
import Support from "./pages/Dashboard/Help/Components/Support.jsx";
import BugReport from "./pages/Dashboard/Help/Components/BugReport.jsx";
import About from "./pages/Dashboard/Help/Components/About.jsx";
import VersionInfo from "./pages/Dashboard/Help/Components/VersionInfo.jsx";
import Guide from "./pages/Dashboard/Help/Components/Guide.jsx";
import Courses from "./pages/Dashboard/Courses/Courses.jsx";
import PrivacyPolicy from "./pages/Dashboard/Help/Components/PrivacyPolicy.jsx";
import TermsOfService from "./pages/Dashboard/Help/Components/TermsOfService.jsx";

// 2. GANTI MENJADI createHashRouter
const router = createHashRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/profile", element: <Profile /> },
        { path: "/", element: <Dashboard /> },
        { path: "/skillGap", element: <SkillGap /> },
        { path: "/analytics", element: <Analytics /> },
        // { path: "/aiRecommendations", element: <AiRecommendations /> },
        { path: "/marketTrends", element: <MarketTrends /> },
        { path: "/careerExplorer", element: <CareerExplorer /> },
        { path: "/savedCareers", element: <SavedCareers /> },
        { path: "/setting", element: <Setting /> },
        { path: "/learningRoadmap", element: <LearningRoadmap /> },
        { path: "/courses", element: <Courses /> },
        // // Help Routes
        { path: "/help/guide", element: <Guide /> },
        { path: "/help/faq", element: <FAQ /> },
        { path: "/help/support", element: <Support /> },
        { path: "/help/bug-report", element: <BugReport /> },
        { path: "/help/about", element: <About /> },
        { path: "/help/version", element: <VersionInfo /> },
        { path: "/help/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/help/terms-of-service", element: <TermsOfService /> },
      ],
    },
    {
      element: <LandingPage />,
      errorElement: <Error />,
      path: "/landingPage", // Tambahkan garis miring (slash) di awal
    },
    {
      element: <OnboardingAppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/onboardingPage1",
          element: <OnboardingPage1 />,
        },
        {
          path: "/onboardingPage2",
          element: <OnboardingPage4 />,
        },
        {
          path: "/onboardingPage3",
          element: <OnboardingPage2 />,
        },
        {
          path: "/onboardingPage4",
          element: <OnboardingPage3 />,
        },
        {
          path: "/onboardingPage5",
          element: <OnboardingPage5 />,
        },
      ],
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
    {
      element: <CourseLayout />,
      errorElement: <Error />,
      children: [{ path: "course/:courseId", element: <Course /> }],
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
