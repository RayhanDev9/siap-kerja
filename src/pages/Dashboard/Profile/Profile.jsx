import Section from "../../../ui/Section";
import dataProfile from "./components/dataProfile";
import SkillsItems from "./components/SkillsItems";
import H2 from "./../../../ui/H2";
import TopBar from "./../../../ui/TopBar";
import Text from "../../../ui/Text";
import Button from "../../../ui/Button";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import H3 from "../../../ui/H3";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import ModalProfile from "./components/ModalProfile";

// 🚀 1. Import fetchProfile dari profileSlice dan fetchSendOnboarding dari onBoardingSlice
import { fetchProfile } from "../../../features/dashboard/profileSlice"; 
import { fetchSendOnboarding } from "../../../features/onBoarding/onBoardingSlice";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = dataProfile;
  const { city, current_role, targetRole } = profile;

  const [anotherSkills, setAnotherSkills] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useSelector((state) => state.profile);
  const { selectedCourses } = useSelector((state) => state.learningRoadmap);

  const coursesCompleted = selectedCourses?.filter(
    (item) => item.status === "completed",
  ) || [];

  const {
    category_slug,
    description,
    foto_profile,
    fullName,
    target_role_slug,
  } = data || {}; 

  const rawData = localStorage.getItem("my_saved_skills");
  const mySkills = rawData ? JSON.parse(rawData) : [];

  const visibleSkills = coursesCompleted.slice(0, 3);
  const hiddenSkills = coursesCompleted.slice(3);

  function handleAnotherSkills() {
    setAnotherSkills(!anotherSkills);
  }

  // 🚀 2. LOGIKA BARU SESUAI SARAN LU: Pakai fetchSendOnboarding
  const handleUpdateProfile = async (updatedData) => {
    try {
      // Destructuring data lama, lalu timpa dengan data baru dari Modal
      const dataToSubmit = {
        ...data, // Semua data lama (termasuk category_slug, dll)
        fullName: updatedData.name,
        description: updatedData.bio,
      };

      // Jika user memilih foto baru di modal, masukkan ke objek
      if (updatedData.photo) {
        dataToSubmit.foto_profile = updatedData.photo;
      }

      // 1. Kirim data pakai logic Onboarding yang sudah terbukti bisa handle foto
      await dispatch(fetchSendOnboarding(dataToSubmit)).unwrap();
      
      // 2. Re-fetch data profile agar UI langsung ter-update otomatis
      await dispatch(fetchProfile()).unwrap();
      
      // 3. Jika sukses, tutup modalnya
      setIsModalOpen(false); 
    } catch (error) {
      console.error("Gagal update profil:", error);
      throw error; 
    }
  };

  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7">
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />

        <motion.div
          variants={cardVariants}
          className="flex w-full flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 sm:flex-row lg:flex dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
        >
          <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full ring-4 ring-slate-100 dark:ring-white/25">
            <img
              className="h-full w-full object-cover"
              // Tambahkan query string waktu agar browser tidak memakai cache foto lama
              src={foto_profile ? `${foto_profile}?t=${new Date().getTime()}` : ""} 
              alt={fullName || "Profile Picture"}
            />
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <H2 type="netural" className="text-3xl font-bold text-gray-900 dark:text-white">
                {fullName}
              </H2>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 md:text-base lg:text-lg dark:border dark:border-white/25 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                <i className="fa-solid fa-pen-to-square text-slate-500 dark:text-white"></i>
                <span className="dark:text-white/80">{city}</span>
              </button>
            </div>

            <div className="mt-1 flex items-center gap-2 text-lg font-medium text-blue-600 dark:text-blue-500">
              <i className="fa-solid fa-briefcase"></i>
              <span>{current_role}</span>
            </div>

            <Text className="mt-6 text-sm font-semibold tracking-wide text-slate-500 uppercase md:text-base lg:text-lg dark:text-slate-400">
              Professional Bio
            </Text>

            <Text className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {description}
            </Text>
          </div>
        </motion.div>

        {visibleSkills.length > 0 && (
          <motion.div variants={cardVariants}>
            <H2 type="secondry">Keahlian Utama</H2>
            <div className="mt-7 flex flex-wrap gap-4">
              {!anotherSkills &&
                visibleSkills.map((skill) => (
                  <SkillsItems
                    key={skill.course_id}
                    skill={skill.titleCourse}
                  />
                ))}
              {anotherSkills &&
                coursesCompleted.map((skill) => (
                  <SkillsItems
                    key={skill.course_id}
                    skill={skill.titleCourse}
                  />
                ))}
              {hiddenSkills.length > 0 && (
                <button onClick={handleAnotherSkills}>
                  <Text className="inline-block rounded-md bg-blue-500 p-2 text-blue-500 text-white dark:border dark:border-white/25">
                    {!anotherSkills
                      ? `+ ${hiddenSkills.length} More`
                      : "Less..."}
                  </Text>
                </button>
              )}
            </div>
          </motion.div>
        )}

        <motion.div variants={cardVariants} className="mt-8">
          <H2 type="primary" className="mb-6">
            Aspirasi Karir
          </H2>

          <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-colors dark:border-white/20 dark:bg-neutral-900 hover:dark:border-white/35">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-300 p-4 transition-colors hover:border-slate-400 dark:border-white/10 hover:dark:border-white/20">
                <H3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Kategori Karir
                </H3>
                <Text className="text-slate-600 dark:text-slate-300">
                  {category_slug}
                </Text>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-300 p-4 transition-colors hover:border-slate-400 dark:border-white/10 hover:dark:border-white/20">
                <H3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Target Role
                </H3>
                <Text className="text-slate-600 dark:text-slate-300">
                  {target_role_slug}
                </Text>
              </div>
            </div>

            <hr className="border-t border-slate-200 dark:border-white/10" />

            <div className="md:justify-cente flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-6">
              <div className="inline-block">
                <Button type="generalPrimary" to={"/onboardingPage1"}>
                  EDIT PROFIL
                </Button>
              </div>
              <Text className="text-xs leading-relaxed text-slate-500 md:max-w-xl md:text-sm dark:text-slate-400">
                Perbarui data diri, target karir, dan keahlian Anda agar sistem
                kami dapat memberikan rekomendasi langkah yang paling akurat.
              </Text>
            </div>
          </div>
        </motion.div>
      </div>

      <ModalProfile
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={data}
        onSubmit={handleUpdateProfile}
      />
    </Section>
  );
}

export default Profile;