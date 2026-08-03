import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import Logo from "../../ui/Logo";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useEffect } from "react";

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
      <Header />
      <header className="hidden justify-center py-7 lg:flex">
        <Logo type="large" />
      </header>
      <main className="mx-auto max-w-3xl lg:pb-12">
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
