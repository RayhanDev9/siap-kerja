import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSendOnboarding,
  SkillsSelection,
  updateCourseStatus, // <-- Pastikan import-nya dari onBoardingSlice ya kalau thunk-nya lu taruh di sana
} from "../../../features/onBoarding/onBoardingSlice";

function OnboardingPage5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Ambil data course dari learningRoadmap (karena list course-nya ada di sini kan?)
  const { selectedCourses } = useSelector((state) => state.learningRoadmap);
  const { data } = useSelector((state) => state.onBoarding);

  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    if (data === null) {
      navigate("/profile", { replace: true });
    }
  }, [data, navigate]);

  // 1. PERBAIKAN FUNGSI CHECKBOX BIAR BISA DICENTANG
  function handleSelectSkill(skillId) {
    setSelectedSkills((prevSkills) => {
      // Kalau ID udah ada di dalam array, berarti di-uncheck (dihapus)
      if (prevSkills.includes(skillId)) {
        return prevSkills.filter((id) => id !== skillId);
      }
      // Kalau belum ada, tambahin ke array biar dicentang
      else {
        return [...prevSkills, skillId];
      }
    });
  }

  // 2. PERBAIKAN FUNGSI SUBMIT (NEXT)
  function handleNext() {
    if (data && data.data) {
      const dataToSubmit = { ...data.data };

      const formattedSkillsWithValues = selectedSkills.map((skillId) => {
        const courseDetail = selectedCourses.find(
          (course) => course.course_id === skillId,
        );
        return {
          skill_id: skillId,
          status: "completed",
          name: courseDetail ? courseDetail.titleCourse : "Unknown Skill",
          img: courseDetail ? courseDetail.img : null,
        };
      });

      dispatch(SkillsSelection(formattedSkillsWithValues));

      selectedSkills.forEach((skillId) => {
        dispatch(
          updateCourseStatus({ courseId: skillId, status: "completed" }),
        );
      });

      dispatch(fetchSendOnboarding(dataToSubmit))
        .unwrap()
        .then(() => navigate("/profile"))
        .catch((error) => console.error("Gagal submit:", error));
    }
  }

  return (
    <>
      <div className="md:rounded-2xl md:bg-white md:pb-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        <Section>
          <div className="space-y-7">
            {/* Progres */}
            <ProgresOnboarding progresOnboarding={5} />

            {/* Header */}
            <div className="rounded-2xl bg-white p-7 shadow-md dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
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
                {selectedCourses &&
                  selectedCourses.map((skill) => (
                    <SkillSelectionItems
                      key={skill.course_id}
                      id={skill.course_id}
                      title={skill.titleCourse}
                      // Ini yang bikin kotak jadi warna biru pas diklik
                      isSelected={selectedSkills.includes(skill.course_id)}
                      onSelect={() => handleSelectSkill(skill.course_id)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </Section>

        <ButtonMdOnboarding
          button1="Sebelumnya"
          button2="Selesai"
          onFinish={handleNext}
        />
      </div>
    </>
  );
}

export default OnboardingPage5;
