import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Theme from "./Theme";
import HelpDropdown from "./HelpDropdown";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const { foto_profile } = useSelector((state) => state.profile.data);

  return (
    <header className="fixed top-0 z-[9999] w-full overflow-visible border-b border-slate-200 bg-white/90 backdrop-blur-md lg:hidden dark:border-white/10 dark:bg-neutral-900/90">
      <div className="flex h-16 w-full items-center justify-between overflow-visible px-4">
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

        <div className="flex items-center gap-3 overflow-visible">
         

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="group relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200 focus:outline-none dark:bg-slate-800"
          >
            <img
              src={foto_profile}
              alt="Foto Profil"
              className="h-full w-full object-cover transition-all group-hover:opacity-80"
            />
          </button>

          {/* Indikator Online */}
          <div className="absolute top-10 right-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-neutral-900" />
        </div>
      </div>
    </header>
  );
}

export default Header;
