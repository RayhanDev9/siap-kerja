import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import Header from "../../ui/Header";
import NavMenu from "./components/NavMenu";
import Footer from "../../ui/Footer";
import SideBar from "./components/SideBar";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { use, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch.jsx";
import tes from "../../tes.js";

function AppLayout() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  useFetch();

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

  return (
    <>
      <Header />
      <main className=" lg:grid lg:grid-cols-[240px_1fr] max-lg:mt-20">
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
