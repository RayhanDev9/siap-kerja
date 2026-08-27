import AuthBanner from "./components/AuthBanner";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { containerVariants } from "../../util/animations";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Autentikasi() {
  const { pathname } = useLocation(); // Digabung agar tidak deklarasi 2 kali
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Force scroll saat location berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  // Jika user SUDAH login dan PUNYA token valid, lempar ke dashboard
  if (user) {
    return <Navigate to="/" replace />;
  }

  // CATATAN: if (isLoading) { return <Loader /> } DIHAPUS
  // Biarkan tombol di masing-masing page yang meng-handle efek loading-nya.

  return (
    <>
      {/* 
        Tambahkan AnimatePresence dengan mode="wait" agar Framer Motion 
        menunggu animasi halaman lama selesai sebelum merender halaman baru 
      */}
      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariants}
          key={pathname} // Key di sini sekarang aman karena ada AnimatePresence
          initial="hidden"
          animate="visible"
          exit="hidden" // Tambahkan efek saat keluar
          className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2"
        >
          {isDesktop && <AuthBanner />}

          {/* HAPUS key={pathname} pada Outlet agar tidak bentrok dengan induknya */}
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Autentikasi;
