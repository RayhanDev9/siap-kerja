import Section from "../../../ui/Section";
import dataProfile from "./components/dataProfile";
import SkillsItems from "./components/SkillsItems";
import H2 from "./../../../ui/H2";
import TopBar from "./../../../ui/TopBar";
import Text from "../../../ui/Text";
import Button from "../../../ui/Button"; // Import Button
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import H3 from "../../../ui/H3";
import { useSelector } from "react-redux";

function Profile() {
  const { profile, skills } = dataProfile;
  const { name, city, headline, bio, avatarUrl, careerCategory, targetRole } =
    profile;
  const { data } = useSelector((state) => state.profile);
  console.info(data);
  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading profil...</p>
      </div>
    );
  }

  const {
    category_slug,
    current_role,
    description,
    foto_profile,
    fullName,
    initial_skills,
    target_role_slug,
    user_id,
  } = data;
  console.info(initial_skills, foto_profile);

  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7">
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />

        {/* Profile Header */}
        <motion.div
          variants={cardVariants}
          className="flex w-full flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 sm:flex-row lg:flex dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
        >
          {/* Column Left: Photo */}
          <div className="flex shrink-0 items-center justify-center">
            <img
              className="h-28 w-28 rounded-full object-cover ring-4 ring-slate-100 dark:ring-white/25"
              src={foto_profile}
              alt={name}
            />
          </div>

          {/* Column Right: Info */}
          <div className="flex flex-1 flex-col">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <H2 type="netural" className="text-3xl font-bold text-gray-900">
                {fullName}
              </H2>

              <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 md:text-base lg:text-lg dark:border dark:border-white/25 dark:bg-neutral-900">
                <i className="fa-solid fa-location-dot text-slate-500 dark:text-white"></i>
                <span className="dark:text-white/80">{city}</span>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-2 text-lg font-medium text-blue-600 dark:text-blue-500">
              <i className="fa-solid fa-briefcase"></i>
              <span>{current_role}</span>
            </div>

            <Text className="mt-6 text-sm font-semibold tracking-wide text-slate-500 uppercase md:text-base lg:text-lg">
              Professional Bio
            </Text>

            <Text className="mt-3 text-base leading-relaxed text-slate-700">
              {description}
            </Text>
          </div>
        </motion.div>

        {/* Skills */}
        {skills && skills.primary && (
          <motion.div variants={cardVariants}>
            <H2 type="secondry">Keahlian Utama</H2>
            <div className="mt-7 flex flex-wrap gap-4">
              {skills.primary.map((skill, index) => (
                <SkillsItems key={index} skill={skill} />
              ))}
              <Text className="inline-block rounded-md bg-slate-50 p-2 text-blue-500 dark:border dark:border-white/25 dark:bg-neutral-900">
                +{skills.additionalCount} Lainnya
              </Text>
            </div>
          </motion.div>
        )}

        {/* Career Info (Aspirasi Karir) */}
        <motion.div variants={cardVariants} className="mt-8">
          {/* Judul Bagian */}
          <H2 type="primary" className="mb-6">
            Aspirasi Karir
          </H2>

          {/* Unified Card Container with modern border and hover effect */}
          <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-colors dark:border-white/20 dark:bg-neutral-900 hover:dark:border-white/35">
            {/* Layout Data (Grid 2 Kolom di Desktop, 1 Kolom di HP) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2 rounded-xl border border-slate-100 p-4 transition-colors dark:border-white/10 hover:dark:border-white/20">
                <H3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Kategori Karir
                </H3>
                <Text className="text-slate-600 dark:text-slate-300">
                  {category_slug}
                </Text>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-slate-100 p-4 transition-colors dark:border-white/10 hover:dark:border-white/20">
                <H3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Target Role
                </H3>
                <Text className="text-slate-600 dark:text-slate-300">
                  {target_role_slug}
                </Text>
              </div>
            </div>

            {/* Garis Pemisah (Divider) */}
            <hr className="border-t border-slate-200 dark:border-white/10" />

            {/* Layout Action (Tombol Kiri, Teks Kanan di Desktop) */}
            <div className="md:justify-cente flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-6">
              <div className="inline-block">
                <Button
                  type="buttonCardLearning"
                  onClick={() => console.log("Edit clicked")}
                >
                  EDIT DATA PROFIL
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
    </Section>
  );
}

export default Profile;
