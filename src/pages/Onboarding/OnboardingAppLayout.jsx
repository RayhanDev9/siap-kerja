import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import Logo from "../../ui/Logo";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useEffect } from "react";
import Theme from "../../ui/Theme.jsx";

function OnboardingAppLayout() {
  const location = useLocation();
  useEffect(
    function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    [location.pathname],
  );
  return (
    <>
      {/* <Header /> */}
      <header className="hidden justify-center py-7 lg:flex">
        <Logo type="large" />
      </header>
      <main className=" mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4 lg:pb-12">
        <div className="absolute top-5 right-10 z-50 ">
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
