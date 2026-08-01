import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import categoryData from "./Components/dataOnboardingPage2";
import CategoryItems from "./Components/CategoryItems";
import Button from "../../../ui/Button";
import ProgresOnboarding from "../components/ProgresOnboarding";
import Email from "../../../ui/Email";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";

function OnboardingPage2() {
  // id: 6,
  // title: "Environment",
  // icon: "fa-solid fa-globe",

  return (
    <>
      <div className="md:bg-white md:pb-3">
        <Section>
          <div className="space-y-7">
            <ProgresOnboarding progresOnboarding={1} />

            <div className="rounded-2xl bg-white p-7 shadow-md">
              <div className="pb-1">
                <H2 type="secondaryBold">Apa yang menarik minat Anda?</H2>
              </div>
              <p className="">
                Pilih topik yang ingin Anda eksplorasi untuk jalur karier Anda.
              </p>
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-7">
              {categoryData.map((category) => (
                <CategoryItems
                  title={category.title}
                  icon={category.icon}
                  key={category.id}
                />
              ))}
            </div>
          </div>

          {/* Nama */}
        </Section>
        <div className="bg-white p-7 text-center lg:hidden">
          <Button type="generalPrimary" to="/onboardingPage3">
            Mulai <i className="fa-solid fa-arrow-right pl-1"></i>
          </Button>
        </div>

        <ButtonMdOnboarding
          button1="Lewati"
          button2="Selanjutnya"
          to="/onboardingPage3"
        />
      </div>
    </>
  );
}

export default OnboardingPage2;
