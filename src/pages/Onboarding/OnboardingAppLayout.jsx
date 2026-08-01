import { Outlet } from "react-router";
import OnboardingPage1 from "./Page1/OnboardingPage1";
import Header from "./components/Header";
import Logo from "../../ui/Logo";

function OnboardingAppLayout() {
  return (
    <>
      <Header />
      <header className="hidden justify-center py-7 lg:flex">
        <Logo type="large" />
      </header>
      <main className="mx-auto max-w-3xl lg:pb-12">
        <Outlet />
      </main>
    </>
  );
}

export default OnboardingAppLayout;
