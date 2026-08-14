import { useState } from "react";
import Header from "../components/Header";
import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import Text from "../../../ui/Text";
import Button from "../../../ui/Button";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import ProgresOnboarding from "../components/ProgresOnboarding";
import SkillSelectionItems from "./components/SkillSelectionItems";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import skillsData from "./components/skillsData";
import { useNavigate } from "react-router";

function OnboardingPage5() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();
  const handleSelectSkill = (skillId) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skillId)
        ? prevSkills.filter((id) => id !== skillId)
        : [...prevSkills, skillId],
    );
  };

  return (
    <>
      <div className="md:rounded-2xl md:bg-white md:pb-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        <Section>
          <div className="space-y-7">
            {/* Progres */}
            <ProgresOnboarding progresOnboarding={5} />

            {/* Header */}
            <div className="rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 shadow-md">
              <motion.div variants={cardVariants} className="pb-1">
                <H2 type="secondaryBold">Apa keahlian Anda saat ini?</H2>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Text className="">
                  Bantu kami menyesuaikan jalur pembelajaran Anda dengan menilai
                  kemampuan Anda di area berikut.
                </Text>
              </motion.div>
            </div>

            {/* Skill Selection Items */}
            <div className="space-y-4 rounded-2xl p-7 shadow-md">
              <div className="grid grid-cols-2 gap-4">
                {skillsData.map((skill) => (
                  <SkillSelectionItems
                    key={skill.id}
                    id={skill.id}
                    title={skill.title}
                    isSelected={selectedSkills.includes(skill.id)}
                    onSelect={() => handleSelectSkill(skill.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

       

        <ButtonMdOnboarding
          button1="Sebelumnya"
          button2="Selesai"
          onFinish={() => navigate("/")}
        />
      </div>
    </>
  );
}

export default OnboardingPage5;
