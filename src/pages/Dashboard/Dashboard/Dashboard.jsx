import TopBar from "../../../ui/TopBar";
import Section from "../../../ui/Section";
import CareerScoreChart from "./components/CareerScoreChart";
import CareerRecommendationsItems from "./components/CareerRecommendationsItems";
import PrioritySkillsGapItems from "./components/PrioritySkillsGapItems";
import HeaderSection from "../components/HeaderSection";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";
import H2 from "../../../ui/H2";
import { motion } from "framer-motion";
import { cardVariants } from "../../../util/animations";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../ui/Loader";
import { getDate } from "../../../util/helpers";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { selectAllDataDashbord } from "../../../features/dashboard/dashboardSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ambil state dari Redux Dashboard
  const {
    dashboardData,
    isLoading,
    error,
    aiReadiness,
    prioritySkills,
    dataChart,
  } = useSelector((state) => state.dashboard);

  // Ambil Profile & Analytics untuk Fallback
  const { data: profileData } = useSelector((state) => state.profile);
  const learningProgress = useSelector(
    (state) =>
      state.analytics?.analyticsData?.data?.learning_progress
        ?.completed_courses_count || 0,
  );
  const name = useSelector((state) => state.auth?.user?.name || "User");

  // Effect untuk me-map data dinamis ketika path / dashboardData tersedia
  useEffect(() => {
    if (profileData?.target_role_slug && dashboardData?.data) {
      const formattedSlug = profileData.target_role_slug
        .toLowerCase()
        .replace(/[-\s]+/g, "_");

      dispatch(selectAllDataDashbord(formattedSlug));
    }
  }, [dispatch, profileData, dashboardData]);

  // Loading Screen (Penting: pastiin data API udah masuk sebelum render)
  if (isLoading || !dashboardData?.data) {
    return <Loader />;
  }

  if (error) return <div>Error memuat data dashboard.</div>;

  // === AMBIL DATA DENGAN AMAN ===
  // Nilai default dikasih biar gak error "Cannot read properties of undefined"
  const { grade = "C", description = "Mulai Belajar" } = aiReadiness || {};
  const { days = 0, label = "Hari" } =
    dashboardData.data.metrics?.learningStreak || {};
  const careerRecommendations = dashboardData.data.careerRecommendations || [];
  console.info(dashboardData.data);
  return (
    <Section>
      <div className="flex flex-col gap-5">
        {/* Top bar */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />

        {/* Username & Tanggal */}
        <HeaderSection title={name} description={getDate()} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Career readiness */}
            <motion.div
              variants={cardVariants}
              className="flex flex-col justify-center rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
            >
              <H2 type="secondry" className="p-3 text-start">
                Skor kesiapan karir
              </H2>
              <div className="flex flex-col items-center">
                <CareerScoreChart dataChart={dataChart} />
                <Text className="p-3">
                  Kesiapan kamu meningkat {learningProgress} poin bulan ini
                </Text>
              </div>
            </motion.div>

            {/* AI Readiness & Streak Card */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-2 gap-3"
            >
              <div className="space-y-8 rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
                <div className="flex gap-2">
                  <i className="fa-solid fa-user-gear inline-block self-center text-xl text-purple-600 dark:text-purple-500"></i>
                  <p className="truncate text-lg font-medium sm:text-xl lg:text-2xl">
                    Kesiapan AI
                  </p>
                </div>
                <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {grade}
                  {"   "}
                  <span className="truncate text-sm text-red-600 md:text-base lg:text-lg dark:text-red-400">
                    {description}
                  </span>
                </p>
              </div>
              <div className="space-y-8 rounded-2xl border-white/25 bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
                <div className="flex gap-2">
                  <i className="fa-solid fa-fire-flame-curved self-center text-xl text-orange-600 dark:text-orange-500"></i>
                  <p className="truncate text-lg font-medium sm:text-xl lg:text-2xl">
                    Streak Belajar
                  </p>
                </div>
                <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {days}
                  {"   "}
                  {label}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* Priority Skills Gap */}
            <motion.div
              variants={cardVariants}
              className="flex flex-col justify-center gap-5 rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
            >
              <div className="flex justify-between gap-2">
                <i className="fa-solid fa-file-waveform da self-center text-xl text-blue-700 sm:text-2xl lg:text-3xl dark:text-blue-500"></i>
                <div className="self-center">
                  <H2 type="secondry" className="text-lg capitalize">
                    <span className="max-sm:-w-30 inline-block truncate">
                      Prioritas Skill
                    </span>
                  </H2>
                </div>
                {/* PERBAIKAN: Button Navigate pakai Arrow Function biar gak crash */}
                <button onClick={() => navigate("/skillGap")} className="z-50">
                  <p className="z-50 self-center text-lg text-blue-700 dark:text-blue-500">
                    Lihat <i className="fa fa-solid fa-arrow-right z-50"></i>
                  </p>
                </button>
              </div>

              <div className="flex flex-col items-center gap-3">
                {/* Looping data Priority Skills dari Redux secara Dinamis */}
                {prioritySkills?.map((item) => (
                  <PrioritySkillsGapItems
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                    key={item.id}
                  />
                ))}
              </div>
            </motion.div>

            {/* Career Rekomendasi */}
            <motion.div
              variants={cardVariants}
              className="flex flex-col gap-10 p-7"
            >
              <div className="flex gap-3">
                <i className="fa-solid fa-wand-magic-sparkles text-2xl text-purple-700 dark:text-purple-500"></i>
                <H2 type="secondry" className="text-xl capitalize">
                  Rekomendasi karier ai
                </H2>
              </div>

              <div className="max-w lg:no-scrollbar flex w-full max-w-full flex-row gap-10 overflow-x-scroll pb-7">
                {careerRecommendations.map((item) => (
                  <CareerRecommendationsItems
                    role={item.role}
                    matchPercentage={item.matchPercentage}
                    description={item.description}
                    themeColor={item.themeColor}
                    icon={item.icon}
                    key={item.id}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Dashboard;
