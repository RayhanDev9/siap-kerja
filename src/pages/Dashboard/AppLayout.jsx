import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import Header from "../../ui/Header";
import NavMenu from "./components/NavMenu";
import Footer from "../../ui/Footer";
import SideBar from "./components/SideBar";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch.jsx";
import tes from "../../tes.js";
import {
  selectCategoryCareer,
  selectedPathName,
  selectPathCourses,
} from "../../features/dashboard/learningRoadmapSlice.js";
import Loader from "../../ui/Loader.jsx";
import ServerDown from "../../ui/ServerDown.jsx";
import { useActiveTimeTracker } from "../../hooks/useActiveTimeTracker.js";
import { fetchProfile } from "../../features/dashboard/profileSlice.js";
import { fetchMarketTrends } from "../../features/dashboard/marketTrendsSlice.js";
import { fetchLearningRoadmap } from "../../features/dashboard/learningRoadmapSlice.js";
import { fetchAnalytics } from "../../features/dashboard/analyticsSlice.js";
import { fetchSkillGap } from "../../features/dashboard/skillGapSlice.js";
import { fetchDashboard } from "../../features/dashboard/dashboardSlice.js";

function AppLayout() {
  const location = useLocation();
  const token = localStorage.getItem("token") || localStorage.getItem("access_token");
  useFetch();
  useActiveTimeTracker();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  const {
    data: dataProfile,
    isLoading: isLoadingProfile,
    isServerError,
  } = useSelector((state) => state.profile);

  useEffect(() => {
    if (dataProfile) {
      const { category_slug, target_role_slug } = dataProfile;
      console.info(category_slug, target_role_slug);

      dispatch(selectCategoryCareer(category_slug));
      dispatch(selectedPathName(target_role_slug));
      dispatch(selectPathCourses(target_role_slug));
    }
  }, [dataProfile, dispatch]);

  const handleRetryServer = async () => {
    try {
      await dispatch(fetchProfile()).unwrap();
      dispatch(fetchMarketTrends());
      dispatch(fetchLearningRoadmap());
      dispatch(fetchAnalytics());
      dispatch(fetchSkillGap());
      dispatch(fetchDashboard());
    } catch (err) {
      console.error("Gagal menghubungkan ulang ke server:", err);
    }
  };

  // 1. Jika tidak ada token sama sekali, alihkan langsung ke halaman login (tanpa stuck di loader)
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. Jika server mati/offline dan profile belum ada, tampilkan halaman ServerDown
  if (isServerError && !dataProfile) {
    return (
      <ServerDown
        onRetry={handleRetryServer}
        isLoading={isLoadingProfile}
      />
    );
  }

  // 3. Jika masih proses memuat data awal, tampilkan Loader
  if (!dataProfile) {
    return <Loader />;
  }

  tes();

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="flex-1">
        <Header />
        <main className="max-lg:-mt-4 lg:grid lg:grid-cols-[240px_1fr]">
          <SideBar />
          <motion.div
            key={location.pathname} // INI SANGAT PENTING! Agar animasi jalan saat pindah menu
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-[64px] lg:mt-0"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
      <NavMenu />
      <Footer />
    </div>
  );
}

export default AppLayout;
