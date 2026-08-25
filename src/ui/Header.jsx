import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Theme from "./Theme";
import HelpDropdown from "./HelpDropdown";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md lg:hidden dark:border-white/10 dark:bg-neutral-900/90">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Sisi Kiri: Logo Brand */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
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
          </div>
          <Logo type="small" />
        </div>

        {/* Sisi Kanan: Action Buttons & Profil Avatar */}
        <div className="flex items-center gap-3">
          {/* Quick Tools Capsule */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 bg-white px-3 py-1.5 dark:border-white/25 dark:bg-black hover:dark:border-white/35">
            <Theme />
            <button
              type="button"
              className="text-slate-600 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-white"
            >
              <i className="far fa-bell text-base"></i>
            </button>
            <HelpDropdown />
          </div>

          {/* User Profile Avatar */}
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="group relative flex items-center focus:outline-none"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
              alt="Foto Profil"
              className="h-9 w-9 rounded-full border-2 border-slate-200 object-cover ring-2 ring-transparent transition-all group-hover:ring-blue-500 dark:border-white/20"
            />
            {/* Status Online */}
            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-neutral-900" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
