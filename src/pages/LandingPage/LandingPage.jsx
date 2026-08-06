// import Header from "./components/Header";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Main from "./components/Main";

function LandingPage() {
  return (
    <>
      <Header condition={false} />
      <Main />
      <Footer />
    </>
  );
}

export default LandingPage;
