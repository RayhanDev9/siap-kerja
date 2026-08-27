import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./../../../ui/Logo";
import Theme from "./../../../ui/Theme";
import { motion } from "framer-motion";

function HeaderDash({ onHamburger, hamburger }) {
  const navigate = useNavigate();
  const [hoveredPath, setHoveredPath] = useState(null);

  const navLinks = [
    { label: "Beranda", path: "#home" },
    { label: "About", icon: "fa-circle-info", path: "#about" },

    { label: "Fitur", path: "#features" },
    { label: "Testimonial", path: "#testimonial" },
    { label: "FAQ", path: "#faq" },
  ];

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-neutral-900">
      <div className="px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="h-8 w-8 text-blue-600 dark:text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            <Logo type="small" />
          </div>

          {/* Right Section - Theme & Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Navigation - Hidden on Mobile */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.path)}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {/* Label Menu */}
                  <span className="relative z-10">{link.label}</span>

                  {/* Efek Garis Bawah Meluncur - Hapus layoutId */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-full bg-blue-600 dark:bg-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredPath === link.path ? "100%" : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Hamburger Button - Only Mobile */}
            {!hamburger && (
              <>
                <Theme />
                <button
                  onClick={onHamburger}
                  className="flex flex-col gap-1.5 p-1 focus:outline-none md:hidden"
                  aria-label="Toggle menu"
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
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDash;
