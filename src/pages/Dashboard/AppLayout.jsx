import { Outlet, useLocation } from "react-router";
import Header from "../../ui/Header";
import NavMenu from "./components/NavMenu";
import Footer from "../../ui/Footer";
import SideBar from "./components/SideBar";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useEffect } from "react";

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main className="lg:grid lg:grid-cols-[240px_1fr]">
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
