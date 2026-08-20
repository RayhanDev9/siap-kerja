import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import Logo from "../../ui/Logo";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useEffect } from "react";
import Theme from "../../ui/Theme.jsx";
import tes from "../../tes.js";
import { fetchLearningRoadmap } from "../../features/dashboard/learningRoadmapSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../ui/Loader.jsx";
import Error from "../../ui/Error.jsx";

function OnboardingAppLayout() {
  const dispatch = useDispatch();
  const location = useLocation();

  // 3. Masukkan fungsi fetch ke dalam useEffect
  useEffect(() => {
    dispatch(fetchLearningRoadmap());
  }, [dispatch]);

  useEffect(
    function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    [location.pathname],
  );

  const { data, isLoading, error } = useSelector(
    (state) => state.learningRoadmap,
  );

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <>
      {/* <Header /> */}
      <header className="hidden justify-center py-7 lg:flex">
        <Logo type="large" />
      </header>
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4 lg:pb-12">
        <div className="absolute top-5 right-10 z-50">
          <Theme />
        </div>
        <motion.div
          variants={containerVariants}
          key={location.pathname}
          initial="hidden"
          animate="visible"
        >
          <Outlet />
        </motion.div>
      </main>
    </>
  );
}

export default OnboardingAppLayout;
