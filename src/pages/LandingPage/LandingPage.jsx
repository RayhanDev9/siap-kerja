// import Header from "./components/Header";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Main from "./components/Main";
import Tes from "./../../services/Tes"

function LandingPage() {
  return (
    <>
      <Header condition={false} />
      <Main />
      <Footer />
      <Tes/>
    </>
  );
}

export default LandingPage;
