import TopBar from "../../../ui/TopBar";
import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import dashboardData from "./components/dashboardData";
import CareerScoreChart from "./components/CareerScoreChart";
import CareerRecommendationsItems from "./components/CareerRecommendationsItems";
import PrioritySkillsGapItems from "./components/PrioritySkillsGapItems";
import HeaderSection from "../components/HeaderSection";
import { useRef } from "react";

function Dashboard() {
  const { firstName, currentDate } = dashboardData.user;
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
        <HeaderSection title={firstName} description={currentDate} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Career readiness*/}
            <div className="flex flex-col justify-center rounded-2xl bg-white p-7">
              <p className="p-3 text-start">Skor kesiapan karir</p>
              <div className="flex flex-col items-center">
                <CareerScoreChart />
                <p className="p-3">{progressMessage}</p>
              </div>
            </div>

            {/* interesting card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-8 rounded-2xl bg-white p-7">
                <div className="flex gap-2">
                  <i className="fa-solid fa-user-gear inline-block self-center text-xl text-purple-600"></i>
                  <p className="truncate text-lg font-medium">Kesiapan AI</p>
                </div>
                <p className="text-2xl font-bold">
                  {grade}
                  {"   "}
                  <span className="text-sm text-red-600">{description}</span>
                </p>
              </div>
              <div className="space-y-8 rounded-2xl bg-white p-7">
                <div className="flex gap-2">
                  <i className="fa-solid fa-fire-flame-curved self-center text-xl text-orange-600"></i>

                  <p className="truncate text-lg font-medium">Streak Belajar</p>
                </div>
                <p className="text-2xl font-bold">
                  {days}
                  {"   "}
                  {label}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* priority skills gap */}
            <div className="flex flex-col justify-center gap-5 rounded-2xl bg-white p-7">
              <div className="flex justify-between gap-2">
                <i className="fa-solid fa-file-waveform text-xl text-blue-700"></i>
                <p className="text-lg capitalize">
                  celah keterampilan prioritas
                </p>
                <p className="text-lg text-blue-700">Lihat Semua</p>
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
            </div>

            {/* Carear rekomendasi */}

            <div className="flex flex-col gap-10 p-7">
              <div className="flex gap-3">
                <i className="fa-solid fa-wand-magic-sparkles text-2xl text-purple-600"></i>
                <p className="text-xl capitalize">Rekomendasi karier ai</p>
              </div>

              <div className="max-w lg:no-scrollbar flex w-full max-w-full flex-row gap-10 overflow-x-scroll lg:pb-7">
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Dashboard;
