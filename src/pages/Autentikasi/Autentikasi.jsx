// import Header from "./components/Header";
import AuthBanner from "./components/AuthBanner";
import Login from "./Login";
import { Outlet, useNavigation } from "react-router-dom";

function Autentikasi() {


  return (
    <>
      {/* <Header /> */}
      <main className="grid grid-cols-1 lg:grid-cols-2 relative">
        <AuthBanner/>
        <Outlet />
      </main>
    </>
  );
}

export default Autentikasi;
