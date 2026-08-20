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
import skillsData from "./components/skillsData";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSendOnboarding,
  SkillsSelection,
} from "../../../features/onBoarding/onBoardingSlice";
import { updateCourseStatus } from "../../../features/dashboard/learningRoadmapSlice";

function OnboardingPage5() {
  const dipathch = useDispatch();
  const { selectedCourses } = useSelector((state) => state.learningRoadmap);
  const { data: dataOnBoarding } = useSelector((state) => state.onBoarding);
  const { data } = useSelector((state) => state.onBoarding);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSelectSkill(skillId) {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skillId)
        ? prevSkills.filter((id) => id !== skillId)
        : [...prevSkills, skillId],
    );
  }
  useEffect(() => {
    if (data === null) {
      navigate("/profile", { replace: true });
    }
  }, [data, navigate]);
  function handleNext() {
    console.info("HandleNext dipanggil, selectedSkills (IDs):", selectedSkills);

    if (selectedSkills.length > 0 && data && data.data) {
      // 1. Format skill jadi array of objects (butuh id & level sesuai Request Laravel)
      const formattedSkills = selectedSkills.map((skillId) => ({
        id: skillId,
        level: 0, // Default level
      }));

      // 2. Gabungin data lama dengan skill baru di variabel lokal
      const dataToSubmit = {
        ...data.data,
        skills: formattedSkills,
      };

      // 3. Update state di Redux (Opsional buat UI)
      dispatch(SkillsSelection(formattedSkills));

      // 4. Tandai course sebagai completed
      selectedSkills.forEach((skillId) => {
        dispatch(updateCourseStatus({ stepId: skillId, status: "completed" }));
      });

      // 5. Kirim data yang UDAH LENGKAP ke backend dan TUNGGU sampai beres
      dispatch(fetchSendOnboarding(dataToSubmit))
        .unwrap() // Buka bungkus hasil dari thunk
        .then((response) => {
          // Kalau masuk sini, berarti Laravel bilang sukses!
          console.log("Sukses simpan data onboarding!", response);
          navigate("/profile");
        })
        .catch((error) => {
          // Kalau masuk sini, berarti ada yang ditolak sama backend
          console.error("Waduh, gagal simpan data bro:", error);
          alert("Gagal menyimpan keahlian! Cek pesan error di console.");
        });
    } else {
      console.warn(
        "Pilih skill terlebih dahulu atau data onboarding belum siap",
      );
      alert("Tolong pilih minimal satu keahlian ya!");
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
                {selectedCourses.map((skill) => (
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
          button2="Selesai"
          onFinish={handleNext}
        />
      </div>
    </>
  );
}

export default OnboardingPage5;
