import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../ui/Logo";
import Theme from "../../../ui/Theme";

function HeaderCourse({ humberger, onHumberger }) {
  return (
    <header className="relative z-50 lg:hidden">
      <div className="sticky top-0 right-0 left-0 border-b border-slate-200 bg-white px-3 py-2 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
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
            <div onClick={onHumberger} className="flex flex-col gap-1.5 py-7">
              <span
                className={`inline-block h-1 w-6 bg-black transition-all duration-300 dark:bg-white ${humberger ? "translate-y-2.5 rotate-45" : ""}`}
              ></span>
              <span
                className={`inline-block h-1 w-6 bg-black transition-all duration-300 dark:bg-white ${humberger ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`inline-block h-1 w-6 bg-black transition-all duration-300 dark:bg-white ${humberger ? "-translate-y-2.5 -rotate-45" : ""}`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCourse;
