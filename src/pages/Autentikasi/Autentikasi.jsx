// import Header from "./components/Header";
import AuthBanner from "./components/AuthBanner";
import Login from "./Login";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { cardVariants, containerVariants } from "../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function Autentikasi() {
  const location = useLocation();
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
        <AuthBanner />
        <Outlet />
      </motion.div>
    </>
  );
}

export default Autentikasi;
