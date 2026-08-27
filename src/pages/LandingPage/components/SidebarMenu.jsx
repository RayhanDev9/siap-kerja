import React from "react";
import Logo from "../../../ui/Logo";
import H3 from "../../../ui/H3";
import Text from "../../../ui/Text";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { a } from "framer-motion/client";

export default function SidebarMenu({ hamburger, onHamburger }) {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: "Beranda", icon: "fa-home", path: "#home" },
    { id: 2, label: "About", icon: "fa-circle-info", path: "#about" },
    { id: 3, label: "Fitur", icon: "fa-star", path: "#features" },
    { id: 4, label: "Testimonial", icon: "fa-comment", path: "#testimonial" },
    { id: 5, label: "FAQ", icon: "fa-question", path: "#faq" },
  ];

  const handleNavClick = (path) => {
    onHamburger();
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAuthClick = (path) => {
    onHamburger();
    navigate(path);
  };

  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {hamburger && (
          <>
            {/* 1. BACKDROP ANIMASI (Fade In & Fade Out) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}

              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* 2. SIDEBAR ANIMASI (Slide In & Slide Out dari Kiri) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 h-full w-80 overflow-y-auto bg-white p-6 font-sans text-slate-800 shadow-xl sm:w-96 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
            >
              <div className="">
                {/* Header Sidebar & Close Button */}
                <div className="mb-6 flex items-center justify-between">
                  <Logo type="small" />
                  <button
                    onClick={onHamburger}
                    aria-label="Close menu"
                    className="flex flex-col gap-1.5 p-1 focus:outline-none"
                  >
                    <span
                      className={`inline-block h-1 w-6 bg-slate-900 transition-all duration-300 dark:bg-white ${
                        hamburger ? "translate-y-2.5 rotate-45" : ""
                      }`}
                    ></span>
                    <span
                      className={`inline-block h-1 w-6 bg-slate-900 transition-all duration-300 dark:bg-white ${
                        hamburger ? "opacity-0" : ""
                      }`}
                    ></span>
                    <span
                      className={`inline-block h-1 w-6 bg-slate-900 transition-all duration-300 dark:bg-white ${
                        hamburger ? "-translate-y-2.5 -rotate-45" : ""
                      }`}
                    ></span>
                  </button>
                </div>

                <hr className="my-4 border-slate-200 dark:border-slate-700" />

                {/* --- SECTION: NAVIGATION MENU --- */}
                <div className="mb-6">
                  <H3 className="mb-4 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    Menu
                  </H3>
                  <div className="space-y-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.path)}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                      >
                        <i className={`fa-solid ${item.icon} text-lg`}></i>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider / Garis Pemisah */}
                <hr className="my-6 border-slate-200 dark:border-slate-700" />
              </div>

              <div>
                {/* --- SECTION: AUTHENTICATION --- */}
                <div>
                  <H3 className="mb-4 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    Akun
                  </H3>
                  <div className="mt-4 space-y-3">
                    {/* Login Button */}
                    <button
                      onClick={() => handleAuthClick("/login")}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition-all hover:border-blue-400 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:border-blue-400 dark:hover:bg-slate-800"
                    >
                      <i className="fa-solid fa-sign-in-alt"></i>
                      Masuk
                    </button>

                    {/* Register Button */}
                    <button
                      onClick={() => handleAuthClick("/register")}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      <i className="fa-solid fa-user-plus"></i>
                      Daftar
                    </button>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="mt-8 rounded-lg bg-blue-50 p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    <i className="fa-solid fa-info-circle mr-2 text-blue-600 dark:text-blue-400"></i>
                    Bergabunglah dengan ribuan profesional yang sudah
                    meningkatkan karir mereka.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
