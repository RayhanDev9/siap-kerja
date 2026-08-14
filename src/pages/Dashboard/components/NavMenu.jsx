import React, { useState } from "react";
import { NavLink } from "react-router";
import NavItems from "./NavItems";

function NavMenu() {
  const isTrue = true;

  // 1. Data utama (Tanpa item "More")
  const initialNavLinks = [
    { path: "/", icon: "fa-table-cells-large", description: "Dashboard" },
    {
      path: "/careerExplorer",
      icon: "fa-compass",
      description: "Career Explorer",
    },
    {
      path: "/marketTrends",
      icon: "fa-chart-line",
      description: "Market Trends",
    },
    // { path: "/profile", icon: "fa-user", description: "Profile" },
    { path: "/analytics", icon: "fa-chart-column", description: "Analytics" },
    // {
    //   path: "/aiRecommendations",
    //   icon: "fa-magic",
    //   description: "AI Picks",
    // },
    { path: "/skillGap", icon: "fa-list-ul", description: "Skill Gap" },
    { path: "/learningRoadmap", icon: "fa-map", description: "Roadmap" },
    {
      path: "/savedCareers",
      icon: "fa-bookmark",
      description: "Saved Careers",
    },
    { path: "/setting", icon: "fa-gear", description: "Settings" },
  ];

  const [visibleLinks, setVisibleLinks] = useState(initialNavLinks.slice(0, 3));
  const [hiddenLinks, setHiddenLinks] = useState(initialNavLinks.slice(3));

  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleSwap = (clickedLink, indexInHidden) => {
    // Ambil menu terakhir dari daftar bawah (menu ke-3)
    const linkToHide = visibleLinks[visibleLinks.length - 1];

    // Buat daftar bawah baru: buang yang terakhir, masukkan yang diklik
    const newVisible = [...visibleLinks.slice(0, -1), clickedLink];

    // Buat daftar popup baru: timpa posisi yang diklik dengan menu yang disembunyikan
    const newHidden = [...hiddenLinks];
    newHidden[indexInHidden] = linkToHide;

    // Perbarui state
    // setVisibleLinks(newVisible);
    // setHiddenLinks(newHidden);
    setIsMoreOpen(false);
  };

  return (
    <div className="relative mt-28 lg:hidden">
      {/* WADAH UTAMA BOTTOM NAV */}
      <nav
        className={`fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-slate-200 bg-white px-2 py-3 text-2xl font-semibold opacity-0 transition-all duration-300 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 ${
          isTrue ? "block opacity-100" : ""
        }`}
      >
        {/* POPUP MENU (MUNCUL KE ATAS) */}
        {isMoreOpen && (
          <div className="absolute right-4 bottom-full mb-2 flex max-h-[60vh] w-56 flex-col overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
            {hiddenLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => handleSwap(link, index)}
                className={({ isActive }) =>
                  `flex items-center gap-3 border-b border-slate-100 px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 font-bold text-blue-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-blue-500 dark:text-white"
                  }`
                }
              >
                <div className="flex gap-2">
                  <i
                    className={`fa-solid self-center ${link.icon} w-6 text-center text-lg`}
                  ></i>
                  <span className="text-lg font-medium">
                    {link.description}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        )}

        {/* RENDER MENU UTAMA (3 Item) */}
        {visibleLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-1 justify-center rounded-lg transition-all duration-200 ${
                isActive
                  ? "font-bold text-blue-600"
                  : "text-gray-500 hover:bg-gray-100 hover:text-blue-500 dark:text-white"
              }`
            }
          >
            <NavItems icon={link.icon} description={link.description} />
          </NavLink>
        ))}

        {/* TOMBOL MORE */}
        <button
          onClick={() => setIsMoreOpen(!isMoreOpen)}
          className={`flex flex-1 justify-center rounded-lg transition-all duration-200 text-white ${
            isMoreOpen
              ? "font-bold text-blue-600"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <NavItems icon="fa-ellipsis" description="More" />
        </button>
      </nav>
    </div>
  );
}

export default NavMenu;
