import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import categoryData from "./Components/DataOnboardingPage2";
import CategoryItems from "./Components/CategoryItems";
import Button from "../../../ui/Button";
import ProgresOnboarding from "../components/ProgresOnboarding";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { fillOffset, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { explorasiCareer } from "../../../features/onBoarding/onBoardingSlice";
import { useNavigate } from "react-router";
import categoryDataUI from "./Components/DataOnboardingPage2";
import { selectCategoryCareer } from "../../../features/dashboard/learningRoadmapSlice";
import Theme from "../../../ui/Theme";

function OnboardingPage2() {
  // State menampung 1 ID category yang terpilih (null jika belum ada)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data } = useSelector((state) => state.onBoarding);

  // Handler toggle pilih 1 item
  function handleSelect(id) {
    selectedCategory === id
      ? setSelectedCategory(null)
      : setSelectedCategory(id);
  }
  console.info(selectedCategory);
  useEffect(() => {
    if (data === null) {
      navigate("/onboardingPage1", { replace: true });
    }
  }, [data, navigate]);

  function handleNext() {
    if (selectedCategory) {
      dispatch(selectCategoryCareer(selectedCategory));
      dispatch(explorasiCareer(selectedCategory));
      navigate("/onboardingPage4"); // Navigasi ke halaman onboarding selanjutnya
    }
  }

  const { data: dataLearningRoadmap } = useSelector(
    (state) => state.learningRoadmap,
  );
  const dataLR = Object.keys(dataLearningRoadmap.data);
  console.info();

  return (
    <>
      <div className=" max-xs:pt-4 rounded-2xl md:bg-white md:pb-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 relative">
        <div className="xs:right-0 absolute top-0 right-0 z-50 lg:hidden">
          <Theme />
        </div>
        <Section>
          <div className="space-y-7">
            <ProgresOnboarding progresOnboarding={3} />

            <div className="rounded-2xl bg-white p-7 shadow-md dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
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

            <div className="grid grid-cols-2 justify-items-center gap-7 sm:grid-cols-2">
              {categoryData.map((category, i) => {
                const isSelected = selectedCategory === category.title;
                // Di-disable jika sudah ada 1 item terpilih DAN item ini BUKAN yang terpilih
                const isDisabled = selectedCategory !== null && !isSelected;

                return (
                  <CategoryItems
                    key={category.id}
                    id={category.title}
                    title={dataLR[i]}
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
          onFinish={handleNext}
          button1="Sebelumnya"
          button2="Selanjutnya"
        />
      </div>
    </>
  );
}

export default OnboardingPage2;
