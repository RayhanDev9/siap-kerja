import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import Logo from "../../../ui/Logo";
import Button from "../../../ui/Button";
import ProgresOnboarding from "../components/ProgresOnboarding";

function OnboardingPage1() {
  return (
    <>
      <div className="md:bg-white md:pb-7">
        <Section>
          <div className="space-y-7">
            {/* <ProgresOnboarding progresOnboarding={0} /> */}

            <div className="rounded-2xl bg-white p-7 shadow-md">
              <p className="pb-1 text-center">Onboarding</p>
              <div className="text-center">
                <H2 type="secondaryBold">Selamat Datang</H2>
              </div>
              <img
                src="https://www.shutterstock.com/image-illustration/abstract-glass-arrow-pointing-upwards-600w-2631659811.jpg"
                alt=""
                className="rounded-2xl object-cover p-3"
              />
              <div className="flex justify-center">
                <Logo type="small">Siap Kerja</Logo>
              </div>
            </div>
            <div>
              <div className="space-y-7 text-center">
                <H2 type="secondry">Temukan Potensi Sejati Anda</H2>
                <p>
                  168 Mitra Anda yang didukung AI dalam pengembangan karier.
                  Mari temukan peluang yang sangat sesuai dengan keterampilan
                  dan ambisi unik Anda.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <div className="bg-white p-7 text-center md:hidden">
          <Button type="generalPrimary" to="/onboardingPage2">
            Mulai <i className="fa-solid fa-arrow-right pl-1"></i>
          </Button>
        </div>
        <div className="hidden justify-between bg-white p-7 text-center md:flex">
          {/* <div className="inline-block">
            <Button type="secondry" to="/onboardingPage2">
              Lewati 
            </Button>
          </div> */}
          <div className="flex w-full justify-end self-end">
            <div className="inline-block">
              <Button type="generalPrimary" to="/onboardingPage2">
                Mulai
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnboardingPage1;
