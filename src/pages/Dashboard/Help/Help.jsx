import React, { useState } from "react";
import { Link } from "react-router-dom";
import HelpDropdown from "./HelpDropdown";
import About from "./About";
import FAQ from "./FAQ";
import Support from "./Support";
import BugReport from "./BugReport";
import VersionInfo from "./VersionInfo";

const Help = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="flex flex-col">
      <div className="my-4 flex justify-center">
        <h1 className="text-2xl font-bold">Help</h1>
      </div>
      <div className="flex justify-center">
        <HelpDropdown onMenuClick={handleMenuClick} activeMenu={activeMenu} />
      </div>
      <div className="flex flex-grow">
        {activeMenu === "about" && <About />}
        {activeMenu === "faq" && <FAQ />}
        {activeMenu === "support" && <Support />}
        {activeMenu === "bug-report" && <BugReport />}
        {activeMenu === "version-info" && <VersionInfo />}
      </div>
    </div>
  );
};

export default Help;
