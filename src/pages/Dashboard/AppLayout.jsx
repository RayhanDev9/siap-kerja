import { Outlet } from "react-router";
import Header from "../../ui/Header";
import NavMenu from "./components/NavMenu";
import Footer from "../../ui/Footer";
import SideBar from "./components/SideBar";
function AppLayout() {
  return (
    <>
      <Header />
      <main className="lg:grid lg:grid-cols-[240px_1fr]">
        <SideBar />
        <Outlet />
      </main>
      <NavMenu />
      <Footer />
    </>
  );
}

export default AppLayout;
