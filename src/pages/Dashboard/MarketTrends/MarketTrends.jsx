import dataMarketTrends from "./components/dataMarketTrends";
import HeaderSection from "./../components/HeaderSection";
import CareerProgressionChart from "./components/CareerProgressionChart";
import Skills from "./components/MostWantedSkillsItems";

import Section from "./../../../ui/Section";
import H2 from "./../../../ui/H2";
import SalaryAnalysisItems from "./components/SalaryAnalysisItems";
import TopBar from "../../../ui/TopBar";
//
//
function MarketTrends() {
  const { title, period, trend } = dataMarketTrends.jobGrowth;
  const { text } = trend;
  const { title: titleTopSkill, items } = dataMarketTrends.topSkills;
  const { title: titleSalaryAnalysis, items: itemsSalaryAnalysis } =
    dataMarketTrends.salaryAnalysis;

  return (
    <Section>
      <div className="flex flex-col gap-5 pb-7">
        {/* Top bar Lg */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />
        {/* Header section */}
        <HeaderSection
          title={"Tren Pasar"}
          description={"Wawasan industri teknologi terkini di Indonesia."}
        />
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* jobGrowth */}
          <div className="xs:min-w-lg max-lg:mx-auto flex flex-col gap-3.5 rounded-2xl bg-white p-7 sm:min-w-xl lg:col-span-2 lg:min-w-0">
            <div className="flex justify-between">
              <H2 type="secondry">{title}</H2>
              <p className="flex gap-1.5">
                <i class="fa-solid fa-arrow-trend-up trend-icon self-center text-xs"></i>
                <span className="inline-block self-center">{text}</span>
              </p>
            </div>
            <div className="">
              {" "}
              <p className="slef-end">{period}</p>
              <CareerProgressionChart />
            </div>
          </div>

          {/* topSkills */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <H2 type="secondry">{titleTopSkill}</H2>

            {items.map((item) => (
              <Skills
                rank={item.rank}
                name={item.name}
                description={item.description}
                icon={item.icon}
                thame={item.thame}
                key={item.rank}
              />
            ))}
          </div>
        </div>

        {/* Salary analysis */}
        <div className="flex flex-col gap-5">
          <H2 type="secondry">{titleSalaryAnalysis}</H2>

          {itemsSalaryAnalysis.map((item) => (
            <SalaryAnalysisItems
              role={item.role}
              salaryRange={item.salaryRange}
              description={item.description}
              progressPercentage={item.progressPercentage}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default MarketTrends;
