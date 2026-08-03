// import Header from "./components/Header";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Main from "./components/Main";
import tes from "./../../tes";

function LandingPage() {
  tes();
  return (
    <>
      <Header condition={false} />
      <Main />
      <Footer />
    </>
  );
}

export default LandingPage;
