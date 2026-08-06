import Button from "../../../ui/Button";
import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import Text from "../../../ui/Text";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import ProgresOnboarding from "../components/ProgresOnboarding";
import dataSkill from "./components/dataSkill";
import SkillItems from "./components/SkillItems";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function OnboardingPage3() {
  return (
    <>
      <div className="md:bg-white md:pb-3">
        <Section>
          <div className="space-y-7">
            {/* Progres */}
            <ProgresOnboarding progresOnboarding={2} />

            {/*Header*/}
            <div className="rounded-2xl bg-white p-7 shadow-md">
              <motion.div variants={cardVariants} className="pb-1">
                <H2 type="secondaryBold">Nilai Keterampilan Anda</H2>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Text className="">
                  Beri nilai kemampuan Anda di bidang-bidang utama ini untuk
                  membantu AI kami menyesuaikan jalur karier Anda. Jujurlah!
                </Text>
              </motion.div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 justify-items-center gap-7">
              {dataSkill.map((item) => (
                <SkillItems
                  lavel={item.level}
                  title={item.title}
                  progres={item.progress}
                  tools={item.tools}
                  key={item.id}
                />
              ))}
            </div>
            <motion.div variants={cardVariants}>
              <Button type="generalSecondary">
                <i className="fa-solid fa-plus pr-1"></i>
                Add Another Skill
              </Button>
            </motion.div>
          </div>{" "}
        </Section>{" "}
        <motion.div
          variants={cardVariants}
          className="bg-white p-7 text-center md:hidden"
        >
          <Button type="generalPrimary" to="/onboardingPage4">
            Selanjutnya <i className="fa-solid fa-arrow-right pl-1"></i>
          </Button>
        </motion.div>
        <ButtonMdOnboarding
          button1="Lewati"
          button2="Selanjutnya"
          to="/onboardingPage4"
        />
      </div>
    </>
  );
}

export default OnboardingPage3;
