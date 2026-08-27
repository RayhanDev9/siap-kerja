import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";

function HelpDropdown() {
  const navigate = useNavigate();

  const helpItems = [
    {
      id: 1,
      label: "Panduan Penggunaan",
      icon: "fa-book",
      path: "/help/guide",
    },
    {
      id: 2,
      label: "FAQ (Tanya Jawab)",
      icon: "fa-comments",
      path: "/help/faq",
    },
    {
      id: 3,
      label: "Hubungi Dukungan",
      icon: "fa-headset",
      path: "/help/support",
    },
    {
      id: 4,
      label: "Laporkan Bug / Kendala",
      icon: "fa-bug",
      path: "/help/bug-report",
    },
    {
      id: 5,
      label: "Tentang SiapKerja",
      icon: "fa-info-circle",
      path: "/help/about",
    },
    {
      id: 6,
      label: "Informasi Versi",
      icon: "fa-code-branch",
      path: "/help/version",
    },
  ];

  return (
    <div className="relative z-50">
      <Popover>
        {/* Button Bantuan */}
        <PopoverButton className="cursor-pointer text-slate-700 transition-colors hover:text-blue-500 focus:outline-none dark:text-white dark:hover:text-blue-400">
          <i className="far fa-question-circle text-base sm:text-sm lg:text-xl"></i>
        </PopoverButton>

        {/* Dropdown Menu */}
        {/* HAPUS anchor="bottom end" dan TAMBAHKAN absolute right-0 top-full origin-top-right */}
        <PopoverPanel className="absolute right-0 top-full z-50 mt-2 w-max origin-top-right rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-neutral-900 dark:bg-[#181818]">
          {/* Header */}
          <div className="border-b border-slate-200 px-4 py-3 dark:border-neutral-900">
            <p className="text-xs font-semibold text-slate-600 md:text-sm lg:text-base dark:text-slate-400">
              PUSAT BANTUAN
            </p>
          </div>

          {/* Menu Items */}
          <div className="p-1.5">
            {helpItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium transition-colors md:text-base ${
                    isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-white/80 dark:hover:bg-slate-800/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <i
                      className={`fa-solid ${item.icon} w-5 text-center text-xs transition-colors md:text-base ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-500 group-hover:text-blue-500 dark:text-slate-400 dark:group-hover:text-blue-400"
                      }`}
                    ></i>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
}

export default HelpDropdown;