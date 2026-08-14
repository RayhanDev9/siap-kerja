import { Outlet } from "react-router";
import Course from "./Course";
import Header from "./components/HeaderCourse";
import { useState } from "react";
import FooterCourse from "./components/FooterCourse";
import HeaderCourse from "./components/HeaderCourse";
import SideBarMenuLg from "./components/SideBarMenuLg";
import dataCourse from "./components/dataCourse";
import Empty from "./components/Empty";
import { containerVariants, cardVariants } from "../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
function CourseLayout() {
  const [humberger, setHumberger] = useState(false);
  function handleHumberger() {
    setHumberger(() => !humberger);
  }

  const contextValue = {
    humberger,
    handleHumberger,
  };

  return (
    <>
      <HeaderCourse humberger={humberger} onHumberger={handleHumberger} />
      <main>
        <motion.div
          key={location.pathname} // INI SANGAT PENTING! Agar animasi jalan saat pindah menu
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:grid lg:grid-cols-[150px_1fr_420px]"
        >
          <Empty />
          <Outlet context={contextValue} />
          <SideBarMenuLg />
        </motion.div>
      </main>

      <footer className="lg:hidden">
        <FooterCourse />
      </footer>
    </>
  );
}

export default CourseLayout;
