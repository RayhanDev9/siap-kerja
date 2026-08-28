import { useState, useEffect } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

function Theme() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // 1. Ambil theme saat pertama mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  // 2. Update DOM & LocalStorage
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    const applyTheme = (targetTheme) => {
      if (targetTheme === "dark") {
        root.classList.add("dark");
      } else if (targetTheme === "light") {
        root.classList.remove("dark");
      } else if (targetTheme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        if (systemPrefersDark) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const themeOptions = [
    { id: "light", name: "Light", icon: "fa-sun" },
    { id: "dark", name: "Dark", icon: "fa-moon" },
    { id: "system", name: "System", icon: "fa-circle-half-stroke" },
  ];

  const currentTheme =
    themeOptions.find((t) => t.id === theme) || themeOptions[0];

  return (
    <div className="relative z-50">
      <Listbox value={theme} onChange={setTheme}>
        {/* 
          RESPONSIVE CONTAINER:
          - Mobile: w-auto (hanya pas seukuran ikon)
          - Tablet/Desktop (sm:): w-32 atau w-36 (menampilkan teks)
        */}
        <div className="relative w-auto sm:w-36">
          {/* Button Pemicu - Menggunakan render props {({ open }) => ...} agar panah dinamis */}
          <ListboxButton className="relative flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white p-2 text-left text-slate-900 shadow-sm transition-all hover:border-blue-400 focus:outline-none sm:justify-between sm:px-3.5 sm:py-2 dark:border-slate-800 dark:bg-black dark:text-white">
            {({ open }) => (
              <>
                <div className="flex items-center gap-2">
                  <i
                    className={`fa-solid ${currentTheme?.icon} max-xs:pr-3 text-sm text-blue-500 sm:text-base lg:text-lg`}
                  ></i>
                  {/* Teks disembunyikan di layar sangat kecil (mobile), muncul di sm: */}
                  <span className="hidden text-xs font-semibold xs:inline md:text-sm lg:text-base">
                    {currentTheme?.name}
                  </span>
                </div>
                {/* Panah chevron bereaksi terhadap status 'open' dari Listbox */}
                <i
                  className={`fa-solid ${open ? "fa-chevron-up" : "fa-chevron-down"} transition-all duration-500 hidden text-[10px] text-slate-400 sm:inline`}
                ></i>
              </>
            )}
          </ListboxButton>

          {/* 
            DROPDOWN OPTIONS:
            - Mobile: right-0 min-w-[130px] (melayang rata kanan agar tidak offside)
            - Tablet/Desktop (sm:): w-full left-0 right-0 (pas selebar tombol)
          */}
          <ListboxOptions className="absolute top-full right-0 z-50 mt-2 min-w-[130px] overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md focus:outline-none sm:w-full dark:border-slate-800 dark:bg-[#181818]/95 transition-all duration-500">
            {themeOptions.map((option) => (
              <ListboxOption
                key={option.id}
                value={option.id}
                className="group relative flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium transition-colors hover:bg-slate-100 sm:py-2 dark:hover:bg-slate-800/60"
              >
                <div className="flex items-center gap-2.5">
                  <i
                    className={`fa-solid ${option.icon} text-sm text-slate-500 not-last:group-hover:text-blue-500 lg:text-lg dark:text-slate-400 dark:group-hover:text-blue-400`}
                  ></i>
                  <span className="text-slate-700 lg:text-base dark:text-slate-200">
                    {option.name}
                  </span>
                </div>
                {theme === option.id && (
                  <i className="fa-solid fa-check text-xs text-blue-600 dark:text-blue-400"></i>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}

export default Theme;