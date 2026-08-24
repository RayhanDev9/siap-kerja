import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import HeaderSection from "./../components/HeaderSection";
import CareerProgressionChart from "./components/CareerProgressionChart";
import Skills from "./components/MostWantedSkillsItems";
import SalaryAnalysisItems from "./components/SalaryAnalysisItems";
import Section from "./../../../ui/Section";
import H2 from "./../../../ui/H2";
import Loader from "../../../ui/Loader";
import Error from "../../../ui/Error";
import TopBar from "../../../ui/TopBar";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import {
  fetchMarketTrends,
  selectedMarketTrend,
} from "../../../features/dashboard/marketTrendsSlice";

function MarketTrends() {
  const dispatch = useDispatch();
  const { isLoading, error, marketTrendsData, marketSelected } = useSelector(
    (state) => state.marketTrends,
  );
  const { data } = useSelector((state) => state.profile);

  // 1. Fetch data API jika belum ada
  // useEffect(() => {
  //   dispatch(fetchMarketTrends());
  // }, []);

  // 2. Set marketSelected jika data & category_slug sudah tersedia
  useEffect(() => {
    console.info(data?.category_slug);
    if (marketTrendsData && data?.category_slug) {
      dispatch(selectedMarketTrend(data.category_slug));
    }
  }, [marketTrendsData, data?.category_slug, dispatch]);

  // 3. Tahan render sampai marketSelected benar-benar terisi
  if (isLoading || !marketTrendsData || !marketSelected) {
    return <Loader />;
  }

  if (error) return <Error />;

  // 4. Ambil data langsung dari marketSelected (Dinamis)
  const { title, period, trend_text: text } = marketSelected.jobGrowth || {};
  const { topSkills } = marketSelected || {};
  const { title: titleSalaryAnalysis, salaryAnalysis = [] } = marketSelected;

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
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 ">
          {/* jobGrowth */}
          <motion.div
            variants={cardVariants}
            className="xs:min-w-lg flex flex-col gap-3.5  rounded-2xl bg-white p-7 max-lg:mx-auto sm:min-w-xl lg:col-span-2 lg:min-w-0 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 "
          >
            <div className="flex justify-between">
              <H2 type="secondry">{'Pertumbuhan Pekerjaan'}</H2>
              <Text className="flex gap-1.5">
                <i className="fa-solid fa-arrow-trend-up trend-icon self-center text-xs"></i>
                <span className="inline-block self-center">{text}</span>
              </Text>
            </div>
            <div className="">
              <Text className="slef-end">{'Q3 2025 vs Q3 2026'}</Text>
              <CareerProgressionChart />
            </div>
          </motion.div>

          {/* topSkills */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <motion.div variants={cardVariants}>
              <H2 type="secondry">Keahlian Paling Dicari</H2>
            </motion.div>

            {topSkills.map((item) => (
              <Skills
                rank={item.rank}
                name={item.name}
                description={item.description}
                icon={item.icon}
                thame={item.variant}
                key={item.rank}
              />
            ))}
          </div>
        </div>

        {/* Salary analysis */}
        <div className="">
          <motion.div variants={cardVariants}>
            {" "}
            <H2 type="secondry">Analisis Gaji</H2>
          </motion.div>
          <div className="grid grid-cols-1 justify-items-center gap-5 py-7 md:grid-cols-2">
            {salaryAnalysis.map((item) => (
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
