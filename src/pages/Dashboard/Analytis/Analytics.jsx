import dataAnalytis from "./components/dataAnalytis";
import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import HeaderSection from "../components/HeaderSection";
import WeeklyChart from "./components/WeeklyChart";
import Skills from "./components/Skills";
import TopBar from "../../../ui/TopBar";

function Analytics() {
  const { title, subtitle } = dataAnalytis.careerAnalytics;
  const {
    value: valueViews,
    label: labelViews,
    trend,
  } = dataAnalytis.summaryCards.views;
  const { value: valueTrend, isPositive, text } = trend;

  const {
    value: valueApplications,
    label: labelApplications,
    timeframe,
  } = dataAnalytis.summaryCards.applications;
  const {
    value: valueCourse,
    label: labelCourse,
    description,
  } = dataAnalytis.summaryCards.courses;

  const {
    title: titleProfileEngagement,
    subtitle: subtitleProfileEngagement,
    actionLabel,
  } = dataAnalytis.profileEngagement;

  const {
    title: titleSkillDevelopment,
    skills,
    buttonLabel,
  } = dataAnalytis.skillDevelopment;

  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7">
        {/* Top bar Lg */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />

        {/* Header Section */}
        <HeaderSection title={title} description={subtitle} />

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* Summary cards Mobile */}
          {/* <div className="col-span-1 grid grid-cols-2 gap-3 pb-7 lg:hidden">
            <div className="space-y-8 rounded-2xl bg-white p-7">
              <div className="flex justify-between gap-2">
                <i className="fa-regular fa-eye inline-block self-center text-xl text-purple-600"></i>
                <p className="truncate rounded-2xl bg-purple-100 px-2 py-0.5 text-lg font-medium text-purple-600">
                  {text}
                </p>
              </div>
              <p className="text-2xl font-bold">
                {valueViews}
                {"   "}
                <span className="block text-sm font-medium">{labelViews}</span>
              </p>
            </div>

            <div className="space-y-8 rounded-2xl bg-white p-7">
              <div className="flex justify-between gap-2">
                <i className="fa-solid fa-fire-flame-curved self-center text-xl text-orange-600"></i>

                <p className="text-medium truncate rounded-2xl bg-slate-200 px-2 py-0.5">
                  {timeframe}
                </p>
              </div>
              <p className="text-2xl font-bold">
                {valueApplications}
                {"   "}
                <span className="block text-sm font-medium">
                  {" "}
                  {labelApplications}
                </span>
              </p>
            </div>

            <div className="col-span-2 flex justify-between rounded-2xl bg-white p-7">
              <i className="fa-solid fa-graduation-cap rounded-2xl bg-blue-100 px-3 py-3 text-3xl text-blue-400"></i>
              <div>
                <h3 className="text-2xl font-bold">
                  {valueCourse} {labelCourse}
                </h3>
                <p className="font-semibold">{description}</p>
              </div>
              <i className="fa-solid fa-chevron-right chevron-icon self-center text-lg"></i>
            </div>
          </div> */}

          {/* Summary cards destop */}
          <div className="col-span-1 mx-auto w-full max-w-md flex-col gap-6 rounded-3xl bg-white p-7 lg:flex">
            {/* Opsional: Header (Bisa disesuaikan dengan kebutuhanmu atau dihapus) */}
            <div className="flex flex-col gap-1">
              <H2 type="secondry">Statistik Profil</H2>
              <p className="text-sm font-medium text-slate-500">
                Pantau visibilitas dan aktivitas lamaran Anda.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Card 1: Views (Style bundaran ungu) */}
              <div className="flex items-center justify-between rounded-2xl bg-[#F4F4FB] p-5">
                <div className="flex items-center gap-5">
                  {/* Ikon Lingkaran */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white shadow-sm">
                    <i className="fa-regular fa-eye text-2xl"></i>
                  </div>
                  {/* Teks Views */}
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900">
                      {valueViews}
                    </span>
                    <span className="text-sm font-semibold text-slate-600">
                      {labelViews}
                    </span>
                  </div>
                </div>
                {/* Badge/Pill Data asli ditempatkan di kanan */}
                <p className="rounded-xl bg-purple-100 px-3 py-1 text-sm font-bold text-purple-600">
                  {text}
                </p>
              </div>

              {/* Card 2: Applications (Style bundaran oranye) */}
              <div className="flex items-center justify-between rounded-2xl bg-[#FFF6F0] p-5">
                <div className="flex items-center gap-5">
                  {/* Ikon Lingkaran */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm">
                    <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                  </div>
                  {/* Teks Applications */}
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900">
                      {valueApplications}
                    </span>
                    <span className="text-sm font-semibold text-slate-600">
                      {labelApplications}
                    </span>
                  </div>
                </div>
                {/* Badge/Pill timeframe asli ditempatkan di kanan */}
                <p className="rounded-xl bg-orange-100 px-3 py-1 text-sm font-bold text-orange-600">
                  {timeframe}
                </p>
              </div>
            </div>
          </div>

          {/* profileEngagement */}
          <div className="col-span-1 rounded-2xl bg-white p-7 lg:order-first lg:col-span-2">
            <H2 type="secondry">{titleProfileEngagement}</H2>
            <div className="flex justify-between">
              <p>{subtitleProfileEngagement}</p>
              <p className="self-center font-semibold text-blue-400">
                {actionLabel}{" "}
                <i className="fa-solid fa-arrow-right blue-arrow"></i>
              </p>
            </div>
            <div className="mt-7 flex justify-center">
              <WeeklyChart />
            </div>
          </div>
        </div>

        {/* Course  and skillDevelopment*/}

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* Course */}
          <div className="col-span-1 mx-auto w-full max-w-md flex-col gap-6 rounded-3xl bg-white p-7 flex">
            <div className="flex flex-col gap-1">
              <H2 type="secondry" className="text-2xl font-bold text-gray-900">
                Progres Belajar
              </H2>
              <p className="text-sm font-medium text-slate-500">
                Pantau perkembangan Anda sejauh ini.
              </p>
            </div>

            <div className="space-y-7 relative mt-0 ">
              <div className="inline-block ">
                <i className="fa-solid slef fa-graduation-cap  inline-block rounded-2xl bg-blue-100 px-3 py-3 text-3xl text-blue-400"></i>
              </div>
              <div className="rounded-2xl bg-blue-100 px-3 py-3 font-medium">
                <div className="flex gap-2">
                  <h3 className="text-2xl font-semibold">
                    {valueCourse} {labelCourse}
                  </h3>
                  <i className="fa-solid fa-chevron-right chevron-icon self-center text-lg absolute translate-y-1/2  right-7"></i>
                </div>
                <p className="font-normal">{description}</p>
              </div>
            </div>
          </div>

          {/* skillDevelopment*/}
          <div className="col-span-1 flex flex-col gap-6 rounded-2xl bg-white p-7 lg:col-span-2">
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
            <button className="w-full rounded-2xl border border-slate-300 py-2">
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Analytics;
