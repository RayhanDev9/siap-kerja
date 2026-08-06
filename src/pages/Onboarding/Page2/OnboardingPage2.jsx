import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import categoryData from "./Components/dataOnboardingPage2";
import CategoryItems from "./Components/CategoryItems";
import Button from "../../../ui/Button";
import ProgresOnboarding from "../components/ProgresOnboarding";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import Text from "../../../ui/Text";
import { containerVariants, cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

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
              <motion.div variants={cardVariants} className="pb-1">
                <H2 type="secondaryBold">Apa yang menarik minat Anda?</H2>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Text className="">
                  Pilih topik yang ingin Anda eksplorasi untuk jalur karier
                  Anda.
                </Text>
              </motion.div>
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
        <motion.div variants={cardVariants} className="bg-white p-7 text-center md:hidden">
          <Button type="generalPrimary" to="/onboardingPage3">
            Mulai <i className="fa-solid fa-arrow-right pl-1"></i>
          </Button>
        </motion.div>

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
