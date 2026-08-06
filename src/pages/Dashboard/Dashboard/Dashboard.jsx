import TopBar from "../../../ui/TopBar";
import Section from "../../../ui/Section";
// import dashboardData from "./components/dashboardData";
import CareerScoreChart from "./components/CareerScoreChart";
import CareerRecommendationsItems from "./components/CareerRecommendationsItems";
import PrioritySkillsGapItems from "./components/PrioritySkillsGapItems";
import HeaderSection from "../components/HeaderSection";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";
import H2 from "../../../ui/H2";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { cardVariants } from "../../../util/animations";
import { useSelector } from "react-redux";
import Loader from "../../../ui/Loader";
import { getDate } from "../../../util/helpers";

function Dashboard() {
  const { dashboardData, isLoading, error } = useSelector(
    (state) => state.dashboard,
  );

  const {name} = useSelector((state) => state.auth.user);

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error />;

  const { progressMessage } = dashboardData.careerReadiness;
  const { grade, description } = dashboardData.metrics.aiReadiness;
  const { days, label } = dashboardData.metrics.learningStreak;

  const { prioritySkills } = dashboardData;

  const { careerRecommendations } = dashboardData;

  return (
    <Section>
      <div className="flex flex-col gap-5">
        {/* Top bar Lg */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />
        {/* username */}
        <HeaderSection title={name} description={getDate()} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Career readiness*/}
            <motion.div
              variants={cardVariants}
              className="flex flex-col justify-center rounded-2xl bg-white p-7"
            >
              <H2 type="secondry" className="p-3 text-start">
                Skor kesiapan karir
              </H2>
              <div className="flex flex-col items-center">
                <CareerScoreChart />
                <Text className="p-3">{progressMessage}</Text>
              </div>
            </motion.div>

            {/* interesting card */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-2 gap-3"
            >
              <div className="space-y-8 rounded-2xl bg-white p-7">
                <div className="flex gap-2">
                  <i className="fa-solid fa-user-gear inline-block self-center text-xl text-purple-600"></i>
                  <p className="truncate text-lg font-medium sm:text-xl lg:text-2xl">
                    Kesiapan AI
                  </p>
                </div>
                <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {grade}
                  {"   "}
                  <span className="text-sm text-red-600 md:text-base lg:text-lg">
                    {description}
                  </span>
                </p>
              </div>
              <div className="space-y-8 rounded-2xl bg-white p-7">
                <div className="flex gap-2">
                  <i className="fa-solid fa-fire-flame-curved self-center text-xl text-orange-600"></i>

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
            {/* priority skills gap */}
            <motion.div
              variants={cardVariants}
              className="flex flex-col justify-center gap-5 rounded-2xl bg-white p-7"
            >
              <div className="flex justify-between gap-2">
                <i className="fa-solid fa-file-waveform self-center text-xl text-blue-700 sm:text-2xl lg:text-3xl"></i>
                <div className="self-center">
                  <H2 type="secondry" className="text-lg capitalize">
                    <span className="max-sm:-w-30 inline-block truncate">
                      Prioritas Skill
                    </span>
                  </H2>
                </div>
                <p className="self-center text-lg text-blue-700">
                  Lihat <i className="fa fa-solid fa-arrow-right"></i>
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                {prioritySkills.map((item) => (
                  <PrioritySkillsGapItems
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                    key={item.id}
                  />
                ))}
              </div>
            </motion.div>

            {/* Carear rekomendasi */}

            <motion.div
              variants={cardVariants}
              className="flex flex-col gap-10 p-7"
            >
              <div className="flex gap-3">
                <i className="fa-solid fa-wand-magic-sparkles text-2xl text-purple-600"></i>
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
