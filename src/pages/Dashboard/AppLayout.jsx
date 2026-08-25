import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import Header from "../../ui/Header";
import NavMenu from "./components/NavMenu";
import Footer from "../../ui/Footer";
import SideBar from "./components/SideBar";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch.jsx";
import tes from "../../tes.js";
import {
  selectCategoryCareer,
  selectedPathName,
  selectPathCourses,
} from "../../features/dashboard/learningRoadmapSlice.js";
import Loader from "../../ui/Loader.jsx";
import { useActiveTimeTracker } from "../../hooks/useActiveTimeTracker.js";

function AppLayout() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  useFetch();
  useActiveTimeTracker();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  function CareerExplorer() {
    useEffect(() => {
      tes(); // <-- Memanggil fungsi tes saat komponen dimuat
    }, []);
  }
  const { selectedPath, selectedCourses, data } = useSelector(
    (state) => state.learningRoadmap,
  );

  const { data: dataProfile } = useSelector((state) => state.profile);

  useEffect(() => {
    if (dataProfile) {
      const { category_slug, target_role_slug } = dataProfile;
      console.info(category_slug, target_role_slug);

      dispatch(selectCategoryCareer(category_slug));
      dispatch(selectedPathName(target_role_slug));
      dispatch(selectPathCourses(target_role_slug));
    }
  }, [dataProfile, dispatch]);
  if (!dataProfile) {
    return <Loader />;
  }

  tes();

  return (
    <>
      <Header />
      <main className="max-lg:mt-20 lg:grid lg:grid-cols-[240px_1fr]">
        <SideBar />
        <motion.div
          key={location.pathname} // INI SANGAT PENTING! Agar animasi jalan saat pindah menu
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Outlet />
        </motion.div>
      </main>
      <NavMenu />
      <Footer />
    </>
  );
}

export default AppLayout;
