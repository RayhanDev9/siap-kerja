import dataMarketTrends from "./components/dataMarketTrends";
import HeaderSection from "./../components/HeaderSection";
import CareerProgressionChart from "./components/CareerProgressionChart";
import Skills from "./components/MostWantedSkillsItems";

import Section from "./../../../ui/Section";
import H2 from "./../../../ui/H2";
import Loader from "../../../ui/Loader";
import SalaryAnalysisItems from "./components/SalaryAnalysisItems";
import TopBar from "../../../ui/TopBar";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useSelector } from "react-redux";
import Error from "../../../ui/Error";

//
//
function MarketTrends() {
  const { isLoading, error, marketTrendsData } = useSelector(
    (state) => state.marketTrends,
  );


  const { title, period, trend } = marketTrendsData.jobGrowth;
  const { text } = trend;
  const { title: titleTopSkill, items } = marketTrendsData.topSkills;
  const { title: titleSalaryAnalysis, items: itemsSalaryAnalysis } =
    marketTrendsData.salaryAnalysis;

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error />;

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
          <motion.div
            variants={cardVariants}
            className="xs:min-w-lg flex flex-col gap-3.5 rounded-2xl bg-white p-7 max-lg:mx-auto sm:min-w-xl lg:col-span-2 lg:min-w-0"
          >
            <div className="flex justify-between">
              <H2 type="secondry">{title}</H2>
              <Text className="flex gap-1.5">
                <i class="fa-solid fa-arrow-trend-up trend-icon self-center text-xs"></i>
                <span className="inline-block self-center">{text}</span>
              </Text>
            </div>
            <div className="">
              {" "}
              <Text className="slef-end">{period}</Text>
              <CareerProgressionChart />
            </div>
          </motion.div>

          {/* topSkills */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <motion.div variants={cardVariants}>
              <H2 type="secondry">{titleTopSkill}</H2>
            </motion.div>

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
        <div className="">
          <motion.div variants={cardVariants}>
            {" "}
            <H2 type="secondry">{titleSalaryAnalysis}</H2>
          </motion.div>
          <div className="grid grid-cols-1 justify-items-center gap-5 py-7 md:grid-cols-2">
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
      </div>
    </Section>
  );
}

export default MarketTrends;
