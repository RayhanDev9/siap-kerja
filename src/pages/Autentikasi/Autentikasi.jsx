import Header from "./components/Header";
import Login from "./Login";
import { Outlet, useNavigation } from "react-router-dom";

function Autentikasi() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Autentikasi;
