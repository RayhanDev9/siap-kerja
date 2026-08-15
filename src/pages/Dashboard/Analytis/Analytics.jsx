// import dataAnalytis from "./components/dataAnalytis";
import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import HeaderSection from "../components/HeaderSection";
import WeeklyChart from "./components/WeeklyChart";
import Skills from "./components/Skills";
import TopBar from "../../../ui/TopBar";
import Text from "../../../ui/Text";
import Button from "../../../ui/Button";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useSelector } from "react-redux";
import Loader from "../../../ui/Loader";
import { useNavigate } from "react-router";

function Analytics() {
  const { analyticsData, isLoading, error } = useSelector(
    (state) => state.analytics,
  );

  const navigate = useNavigate();
  if (isLoading || !analyticsData?.summaryCards?.views) {
    return <Loader />;
  }

  if (error) return <Error />;

  const {
    value: valueViews,
    label: labelViews,
    trend,
  } = analyticsData.summaryCards.views;
  const { value: valueTrend, isPositive, text } = trend;

  const {
    value: valueApplications,
    label: labelApplications,
    timeframe,
  } = analyticsData.summaryCards.applications;
  const {
    value: valueCourse,
    label: labelCourse,
    description,
  } = analyticsData.summaryCards.courses;

  const {
    title: titleProfileEngagement,
    subtitle: subtitleProfileEngagement,
    actionLabel,
  } = analyticsData.profileEngagement;

  const {
    title: titleSkillDevelopment,
    skills,
    buttonLabel,
  } = analyticsData.skillDevelopment;

  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7">
        {/* Top bar Lg */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />

        {/* Header Section */}
        <HeaderSection
          title="Analitik Karir"
          description="Perkembangan Anda minggu ini."
        />

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* Summary cards Mobile */}
          {/* <div className="col-span-1 grid grid-cols-2 gap-3 pb-7 lg:hidden">
            <div className="space-y-8 rounded-2xl bg-white p-7">
              <div className="flex justify-between gap-2">
                <i className="fa-regular fa-eye inline-block self-center text-xl text-purple-600"></i>
                <Text className="truncate rounded-2xl bg-purple-100 px-2 py-0.5 text-lg font-medium text-purple-600">
                  {text}
                </Text>
              </div>
              <Text className="text-2xl font-bold">
                {valueViews}
                {"   "}
                <span className="block text-sm font-medium">{labelViews}</span>
              </Text>
            </div>

            <div className="space-y-8 rounded-2xl bg-white p-7">
              <div className="flex justify-between gap-2">
                <i className="fa-solid fa-fire-flame-curved self-center text-xl text-orange-600"></i>

                <Text className="text-medium truncate rounded-2xl bg-slate-200 px-2 py-0.5">
                  {timeframe}
                </Text>
              </div>
              <Text className="text-2xl font-bold">
                {valueApplications}
                {"   "}
                <span className="block text-sm font-medium">
                  {" "}
                  {labelApplications}
                </span>
              </Text>
            </div>

            <div className="col-span-2 flex justify-between rounded-2xl bg-white p-7">
              <i className="fa-solid fa-graduation-cap rounded-2xl bg-blue-100 px-3 py-3 text-3xl text-blue-400"></i>
              <div>
                <h3 className="text-2xl font-bold">
                  {valueCourse} {labelCourse}
                </h3>
                <Text className="font-semibold">{description}</Text>
              </div>
              <i className="fa-solid fa-chevron-right chevron-icon self-center text-lg"></i>
            </div>
          </div> */}

          {/* Summary cards destop */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 mx-auto w-full max-w-md flex-col gap-6 rounded-3xl bg-white p-7 lg:flex dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            <motion.div variants={cardVariants} className="flex flex-col gap-1">
              <H2 type="secondry">AI Insight & Kesiapan</H2>
              <Text className="text-sm font-medium text-slate-500">
                Analisis kecerdasan buatan untuk karir Anda.
              </Text>
            </motion.div>

            <motion.div variants={cardVariants} className="flex flex-col gap-4">
              {/* Card 1: AI Readiness Score */}
              <div className="flex items-center justify-between rounded-2xl bg-[#F4F4FB] p-5 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white shadow-sm">
                    <i className="fa-solid fa-brain text-2xl"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      85%
                    </span>
                    <span className="text-sm font-semibold text-slate-600 dark:text-white/80">
                      Kesiapan Karir
                    </span>
                  </div>
                </div>
                <Text className="rounded-xl bg-purple-100 px-3 py-1  font-bold  dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
                  <span className="dark:text-purple-300 text-purple-600"> Optimal</span>
                </Text>
              </div>

              {/* Card 2: Market Alignment */}
              <div className="flex items-center justify-between rounded-2xl bg-[#FFF6F0] p-5 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm">
                    <i className="fa-solid fa-chart-line text-2xl"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      Tinggi
                    </span>
                    <span className="text-sm font-semibold text-slate-600 dark:text-white/80">
                      Kesesuaian Pasar
                    </span>
                  </div>
                </div>
                <Text className="rounded-xl bg-orange-100 px-3 py-1 text-sm font-bold text-orange-600 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
                 <span className="dark:text-orange-300 text-orange-600"> Trend</span>
                  
                </Text>
              </div>
            </motion.div>
          </motion.div>

          {/* profileEngagement */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 rounded-2xl bg-white p-7 lg:order-first lg:col-span-2 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            <H2 type="secondry">{titleProfileEngagement}</H2>
            <div className="flex justify-between">
              <Text>{subtitleProfileEngagement}</Text>
            </div>
            <div className="mt-7 flex justify-center">
              <WeeklyChart />
            </div>
          </motion.div>
        </div>

        {/* Course  and skillDevelopment*/}

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* Course */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 mx-auto flex w-full max-w-md flex-col gap-6 rounded-3xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            <div className="flex flex-col gap-1">
              <H2 type="secondry" className="text-2xl font-bold text-gray-900">
                Progres Belajar
              </H2>
              <Text className="text-sm font-medium text-slate-500">
                Pantau perkembangan Anda sejauh ini.
              </Text>
            </div>

            <div className="relative mt-0 space-y-7">
              <div className="inline-block">
                <i className="fa-solid slef fa-graduation-cap inline-block rounded-2xl bg-blue-100 px-3 py-3 text-3xl text-blue-400 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35"></i>
              </div>
              <div
                onClick={() => navigate("/learningRoadmap")}
                className="rounded-2xl bg-blue-100 px-3 py-3 font-medium dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35"
              >
                <div className="flex gap-2">
                  <h3 className="text-2xl font-semibold">
                    {valueCourse} {labelCourse}
                  </h3>
                  <i className="fa-solid fa-chevron-right chevron-icon absolute right-7 translate-y-1/2 self-center text-lg"></i>
                </div>
                <Text className="font-normal">{description}</Text>
              </div>
            </div>
          </motion.div>

          {/* skillDevelopment*/}
          <motion.div
            variants={cardVariants}
            className="col-span-1 flex flex-col gap-6 rounded-2xl bg-white p-7 lg:col-span-2 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            <H2 type="secondry">{titleSkillDevelopment}</H2>
            <div className="flex flex-col gap-5">
              {skills.map((skill) => (
                <Skills
                  skill={skill.name}
                  progressPercentage={skill.progressPercentage}
                  key={skill.name}
                />
              ))}
            </div>
            <Button
              onClick={() => navigate("/learningRoadmap")}
              type="generalSecondary"
              className="w-full rounded-2xl border border-slate-300 py-2 text-sm md:text-base lg:text-lg"
            >
              {buttonLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default Analytics;
