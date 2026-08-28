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
} from "../../../features/onBoarding/onBoardingSlice";
import { updateCourseDirectStatus } from "../../../features/dashboard/learningRoadmapSlice";
import Theme from "../../../ui/Theme";

function OnboardingPage5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedCourses } = useSelector((state) => state.learningRoadmap);
  const { data } = useSelector((state) => state.onBoarding);

  const [selectedSkills, setSelectedSkills] = useState([]);
  
  // State baru untuk mendeteksi proses loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (data === null) {
      navigate("/profile", { replace: true });
    }
  }, [data, navigate]);

  function handleSelectSkill(skillId) {
    setSelectedSkills((prevSkills) => {
      if (prevSkills.includes(skillId)) {
        return prevSkills.filter((id) => id !== skillId);
      } else {
        return [...prevSkills, skillId];
      }
    });
  }

  async function handleNext() {
    if (data && data.data) {
      // Ubah status tombol menjadi loading
      setIsSubmitting(true);

      const formattedSkillsWithValues = selectedSkills.map((skillId) => {
        const courseDetail = selectedCourses?.find(
          (course) => String(course.course_id) === String(skillId),
        );
        return {
          skill_id: skillId,
          status: "completed",
          name: courseDetail ? courseDetail.titleCourse : "Unknown Skill",
          img: courseDetail ? courseDetail.img : null,
        };
      });

      dispatch(SkillsSelection(formattedSkillsWithValues));

      const dataToSubmit = {
        ...data.data,
        completed_skills: formattedSkillsWithValues,
      };

      selectedSkills.forEach((skillId) => {
        const courseDetail = selectedCourses?.find(
          (course) => String(course.course_id) === String(skillId),
        );
        if (courseDetail) {
          dispatch(
            updateCourseDirectStatus({
              courseId: courseDetail.course_id,
              status: "completed",
            }),
          );
        }
      });

      dispatch(fetchSendOnboarding(dataToSubmit))
        .unwrap()
        .then(() => navigate("/profile"))
        .catch((error) => {
          console.error("Gagal submit onboarding:", error);
          // Kembalikan tombol ke keadaan semula jika gagal
          setIsSubmitting(false);
        });
    }
  }

  return (
    <>
      <div className="relative rounded-2xl md:bg-white md:pb-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        <div className="xs:right-0 absolute top-0 right-0 z-50 lg:hidden">
          <Theme />
        </div>
        <Section>
          <div className="space-y-7 max-xs:mt-4">
            <ProgresOnboarding progresOnboarding={5} />

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

            <div className="space-y-4 rounded-2xl p-7 shadow-md">
              <div className="xs:grid-cols-2 grid gap-4">
                {selectedCourses &&
                  selectedCourses.map((skill) => (
                    <SkillSelectionItems
                      key={skill.course_id}
                      id={skill.course_id}
                      title={skill.titleCourse}
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
          // Teks tombol berubah dinamis berdasarkan state isSubmitting
          button2={isSubmitting ? "Mengirim..." : "Selesai"}
          onFinish={handleNext}
          // Opsional: kirim props disabled agar user tidak klik 2 kali
          disabled={isSubmitting} 
        />
      </div>
    </>
  );
}

export default OnboardingPage5;