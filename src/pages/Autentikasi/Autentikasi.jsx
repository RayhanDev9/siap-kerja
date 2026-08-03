// import Header from "./components/Header";
import AuthBanner from "./components/AuthBanner";
import Login from "./Login";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { cardVariants, containerVariants } from "../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useEffect, useState } from "react";

function Autentikasi() {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* <Header /> */}
      <motion.div
        variants={containerVariants}
        key={location.pathname}
        initial="hidden"
        animate="visible"
        className="relative grid grid-cols-1 lg:grid-cols-2"
      >
        {isDesktop && <AuthBanner />}
        <Outlet />
      </motion.div>
    </>
  );
}

export default Autentikasi;
