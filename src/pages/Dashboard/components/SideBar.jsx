import { NavLink, useNavigate } from "react-router";
import SideBarItems from "./SideBarItems";
import Button from "../../../ui/Button";
import Logo from "../../../ui/Logo";
import Text from "../../../ui/Text";

const NavLinks = [
  { path: "/", icon: "fa-table-cells-large", description: "Dashboard" },
  
  // Eksplorasi & Riset
  { path: "/careerExplorer", icon: "fa-compass", description: "Career Explorer" },
  { path: "/savedCareers", icon: "fa-bookmark", description: "Saved Careers" },
  { path: "/marketTrends", icon: "fa-chart-line", description: "Market Trends" },
  
  // Analisis Data Diri
  { path: "/analytics", icon: "fa-chart-column", description: "Analytics" },
  // {
  //   path: "/aiRecommendations",
  //   icon: "fa-magic",
  //   description: "AI Picks",
  // },
  { path: "/skillGap", icon: "fa-list-ul", description: "Skill Gap" },
  
  // Aksi / Belajar
  { path: "/learningRoadmap", icon: "fa-map", description: "Roadmap" },
  { path: "/courses", icon: "fa-book-open", description: "Courses" },
  
  // Utilitas
  // { path: "/profile", icon: "fa-user", description: "Profile" },
  { path: "/setting", icon: "fa-gear", description: "Settings" },
];

function SideBar() {
  const isTrue = true;
  const navgiate = useNavigate();
  return (
    <div className="3xl:overflow-y-auto sticky top-0 hidden w-full self-start border-r border-gray-200 lg:block dark:border dark:border-white/25 hover:dark:border-white/35">
      {/* WADAH UTAMA BOTTOM NAV */}
      <nav
        className={`} flex min-h-screen flex-col justify-between gap-5 border-t border-slate-200 bg-white transition-all duration-300 dark:bg-black`}
      >
        {/* Bagian menu */}
        <div className="flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-1 py-4 pr-5 pl-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
            <Logo type="secondaryBold" type="small">
              SiapKerja
            </Logo>
            <Text className="text-sm">Mitra Pertumbuhan Karir</Text>
          </div>
          <div className="flex flex-col gap-5 pr-5 pl-3">
            {NavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex justify-start rounded-lg font-semibold transition-all duration-200 text-2xl${
                    isActive
                      ? "rounded--2xl rounded-r-full bg-blue-600 font-bold text-white "
                      : "text-gray-500 hover:bg-gray-100 hover:dark:bg-neutral-800 "
                  }`
                }
              >
                <SideBarItems icon={link.icon} description={link.description} />
              </NavLink>
            ))}
          </div>
        </div>
        {/* Bagian Profile */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col justify-end gap-5 border-t border-slate-300 py-7 pr-5 pl-3 transition-colors dark:border-t-white/25 dark:bg-neutral-900 dark:hover:border-t-white/35 ${
              isActive
                ? "bg-slate-50 dark:bg-neutral-800"
                : "hover:bg-slate-50 dark:hover:bg-neutral-800/80"
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex gap-3">
              <i
                className={`far fa-user-circle self-center rounded-full p-3 text-3xl transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-slate-100 text-slate-500 dark:bg-neutral-900 dark:text-slate-400"
                }`}
              ></i>
              <div>
                <p className="text-xl font-medium text-slate-800 dark:text-white">
                  Budi Santoso
                </p>
                <p className="text-base font-normal text-slate-500 dark:text-slate-400">
                  Senior UI/UX
                </p>
              </div>
            </div>
          )}
        </NavLink>
      </nav>
    </div>
  );
}

export default SideBar;
