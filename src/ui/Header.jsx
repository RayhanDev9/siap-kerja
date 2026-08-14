import { use, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Thame from "./Theme";
import Theme from "./Theme";

function Header() {
  const [humberger, setHumberger] = useState(false);

  const navigate = useNavigate();
  return (
    <header className=" fixed inset-0 z-50 lg:hidden">
      <div className=" border-b border-slate-200 bg-white px-3 py-2 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        <div className="flex flex-wrap justify-between px-2">
          {/* Logo */}
          <div className="flex gap-2.5">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="border-none outline-0"
                fill="blue"

                viewBox="0 0 24 24"
                strokeWidth={0}
                stroke="currentColor"
                className="size-12"
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
            <Logo type={"small"} />
          </div>

          <div className="flex items-center gap-5">
            {/* Humberger */}
            <Theme />
            <div onClick={() => navigate('/profile')} className="group relative cursor-pointer self-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                alt="Foto Profil"
                className="h-11 w-11 rounded-full border-2 border-gray-700 object-cover transition-colors hover:border-blue-500"
              />
              {/* Indikator Online Status */}
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-[#181818] bg-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
