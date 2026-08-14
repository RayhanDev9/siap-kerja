import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import categoryData from "./Components/dataOnboardingPage2";
import CategoryItems from "./Components/CategoryItems";
import Button from "../../../ui/Button";
import ProgresOnboarding from "../components/ProgresOnboarding";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import { useState } from "react";

function OnboardingPage2() {
  // State menampung 1 ID category yang terpilih (null jika belum ada)
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handler toggle pilih 1 item
  function handleSelect(id) {
    selectedCategory === id
      ? setSelectedCategory(null)
      : setSelectedCategory(id);
  }
  console.info(selectedCategory);

  return (
    <>
      <div className="md:rounded-2xl md:bg-white md:pb-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        <Section>
          <div className="space-y-7">
            <ProgresOnboarding progresOnboarding={3} />

            <div className="rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 shadow-md">
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
              {categoryData.map((category) => {
                const isSelected = selectedCategory === category.title;
                // Di-disable jika sudah ada 1 item terpilih DAN item ini BUKAN yang terpilih
                const isDisabled = selectedCategory !== null && !isSelected;

                return (
                  <CategoryItems
                    key={category.id}
                    id={category.title}
                    title={category.title}
                    icon={category.icon}
                    iconBgClass={category.iconBgClass}
                    iconTextClass={category.iconTextClass}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    onSelect={() => handleSelect(category.title)}
                  />
                );
              })}
            </div>
          </div>
        </Section>

   

        <ButtonMdOnboarding
          button1="Sebelumnya"
          button2="Selanjutnya"
          to="/onboardingPage4"
        />
      </div>
    </>
  );
}

export default OnboardingPage2;
