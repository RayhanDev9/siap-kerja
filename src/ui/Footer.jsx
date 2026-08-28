import React from "react";
// 🚀 1. Tambahkan useLocation
import { Link, useLocation } from "react-router-dom"; 
import Text from "./Text";

function Footer() {
  const location = useLocation();
  
  // 🚀 2. Cek apakah ini di Landing Page (sesuaikan path "/landingPage" jika rute utamanya "/")
 const isLandingPage = location.pathname === "/landingPage";

  return (
    <footer 
      // 🚀 3. Gunakan template literal (backtick) untuk memasang class max-lg:mb-20 secara kondisional
      className={`flex flex-col justify-between gap-8 bg-white px-6 py-8 md:flex-row md:items-start md:px-8 md:py-10 dark:border-t dark:border-neutral-800 dark:bg-neutral-900 ${
        !isLandingPage ? "max-lg:mb-20" : ""
      }`}
    >
      {/* Bagian Kiri: Logo, Deskripsi & Versi */}
      <div className="flex max-w-sm flex-col gap-2.5 sm:gap-3">
        <h4 className="text-xl font-extrabold text-blue-800 sm:text-2xl dark:text-blue-500">
          SiapKerja
        </h4>
        <Text className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-neutral-400">
          &copy; 2026 SiapKerja. Menavigasi masa depan Anda dengan kecerdasan.
        </Text>
        <div className="pt-1">
          <Link
            to="/help/version"
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-200 sm:text-xs dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          >
            <i className="fa-solid fa-code-branch text-[10px] sm:text-xs"></i>
            Versi 2.1.0
          </Link>
        </div>
      </div>

      {/* Bagian Kanan: Grid Menu Navigasi Responsif */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 md:flex md:gap-16 lg:gap-24">
        {/* Kolom 1: Pusat Bantuan */}
        <div className="flex flex-col gap-2.5 text-xs text-gray-600 sm:gap-3 sm:text-sm dark:text-neutral-400">
          <span className="text-xs font-bold -tracking-tight text-gray-900 uppercase sm:text-sm sm:font-semibold sm:normal-case dark:text-white">
            Pusat Bantuan
          </span>
          <Link
            to="/help/faq"
            className="transition hover:text-blue-800 dark:hover:text-blue-400"
          >
            FAQ (Tanya Jawab)
          </Link>
          <Link
            to="/help/support"
            className="transition hover:text-blue-800 dark:hover:text-blue-400"
          >
            Hubungi Dukungan
          </Link>
          <Link
            to="/help/bug-report"
            className="transition hover:text-blue-800 dark:hover:text-blue-400"
          >
            Laporkan Bug / Kendala
          </Link>
        </div>

        {/* Kolom 2: Tentang */}
        <div className="flex flex-col gap-2.5 text-xs text-gray-600 sm:gap-3 sm:text-sm dark:text-neutral-400">
          <span className="text-xs font-bold -tracking-tight text-gray-900 uppercase sm:text-sm sm:font-semibold sm:normal-case dark:text-white">
            Tentang
          </span>
          <Link
            to="/help/about"
            className="transition hover:text-blue-800 dark:hover:text-blue-400"
          >
            Tentang SiapKerja
          </Link>
          <Link
            to="/help/version"
            className="transition hover:text-blue-800 dark:hover:text-blue-400"
          >
            Informasi Versi
          </Link>
        </div>

        {/* Kolom 3: Legalitas */}
        <div className="col-span-2 flex flex-col gap-2.5 text-xs text-gray-600 sm:col-span-1 sm:gap-3 sm:text-sm dark:text-neutral-400">
          <span className="text-xs font-bold -tracking-tight text-gray-900 uppercase sm:text-sm sm:font-semibold sm:normal-case dark:text-white">
            Legalitas
          </span>
          <Link
            to="/help/privacy-policy"
            className="transition hover:text-blue-800 dark:hover:text-blue-400"
          >
            Kebijakan Privasi
          </Link>
          <Link
            to="/help/terms-of-service"
            className="transition hover:text-blue-800 dark:hover:text-blue-400"
          >
            Ketentuan Layanan
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;