// import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import HeaderDash from "./components/HeaderDash";
import SidebarMenu from "./components/SidebarMenu";
function LandingPage() {
  const [humberger, setHumberger] = useState(false);
  function handleHumberger() {
    setHumberger(!humberger);
  }
  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-20 bg-white dark:bg-neutral-900">
      <HeaderDash
        condition={false}
        onHamburger={handleHumberger}
        hamburger={humberger}
      />
      <SidebarMenu hamburger={humberger} onHamburger={handleHumberger} />
      <div className="flex-1">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
