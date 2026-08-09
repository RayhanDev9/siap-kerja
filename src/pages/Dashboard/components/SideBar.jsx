import { NavLink } from "react-router";
import SideBarItems from "./SideBarItems";
import Button from "../../../ui/Button";
import Logo from "../../../ui/Logo";
import Text from "../../../ui/Text";

const NavLinks = [
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
  { path: "/analytics", icon: "fa-chart-column", description: "Analytics" },
  {
    path: "/aiRecommendations",
    icon: "fa-magic",
    description: "AI Picks",
  },
  { path: "/skillGap", icon: "fa-list-ul", description: "Skill Gap" },
  { path: "/learningRoadmap", icon: "fa-map", description: "Roadmap" },
  {
    path: "/savedCareers",
    icon: "fa-bookmark",
    description: "Saved Careers",
  },
  { path: "/profile", icon: "fa-user", description: "Profile" },

  { path: "/setting", icon: "fa-gear", description: "Settings" },
];

function SideBar() {
  const isTrue = true;
  return (
    <div className="3xl:overflow-y-auto sticky top-0 hidden w-full self-start border-r border-gray-200 lg:block">
      {/* WADAH UTAMA BOTTOM NAV */}
      <nav
        className={`} flex flex-col justify-between gap-5 border-t border-slate-200 bg-white py-7 transition-all duration-300`}
      >
        <div className="flex flex-col gap-1 pr-5 pl-3">
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
                    : "text-gray-500 hover:bg-gray-100 hover:text-blue-500"
                }`
              }
            >
              <SideBarItems icon={link.icon} description={link.description} />
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col justify-end gap-5 border-t border-slate-300 py-7 pr-5 pl-3">
          <Button type="generalPrimary">Upgrade to Pro</Button>
          <div className="flex gap-3">
            <i class="far fa-user-circle self-center rounded-full bg-slate-100 p-3 text-3xl text-slate-500"></i>
            <div>
              <p className="slef-ce text-xl font-medium">Budi Santoso</p>
              <p className="text-base font-normal">Senior UI/UX</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
