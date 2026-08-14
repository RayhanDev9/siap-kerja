// import Header from "./components/Header";
import { useState } from "react";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Main from "./components/Main";
import Theme from "./../../ui/Theme";
import HeaderDash from "./components/HeaderDash";
import SidebarMenu from "./components/SidebarMenu";
function LandingPage() {
  const [humberger, setHumberger] = useState(false);
  function handleHumberger() {
    setHumberger(!humberger);
  }
  return (
    <>
      <HeaderDash condition={false} onHamburger={handleHumberger} hamburger={humberger} />
      <SidebarMenu
        hamburger={humberger}
        onHamburger={handleHumberger}
      />
      <Main />
      <Footer />
    </>
  );
}

export default LandingPage;
