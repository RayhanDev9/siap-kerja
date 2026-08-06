// import Header from "./components/Header";
import AuthBanner from "./components/AuthBanner";
import Login from "./Login";
import { Navigate, Outlet, useLocation, useNavigation } from "react-router-dom";
import { cardVariants, containerVariants } from "../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../ui/Loader";

function Autentikasi() {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const { isLoading, error } = useSelector((state) => state.auth);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (user) {
    console.info("ok");
    return <Navigate to="/" replace />;
  }

 
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
