import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import HeaderSection from "./../components/HeaderSection";
import JobGrowthChart from "./components/JobGrowthChart";
import Skills from "./components/Skills";
import SalaryAnalysisItems from "./components/SalaryAnalysisItems";
import Section from "./../../../ui/Section";
import H2 from "./../../../ui/H2";
import Loader from "../../../ui/Loader";
import Error from "../../../ui/Error";
import TopBar from "../../../ui/TopBar";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
// Jangan lupa import action filter-nya
import {
  fetchMarketTrends,
  filterCategory,
} from "../../../features/dashboard/marketTrendsSlice";
import FilterCategoriesItems from "../CareerExplorer/components/FilterCategoriesItems";

const filterCategories = [
  { id: "all", label: "Semua", detail: "Kategori" },
  { id: "tech", label: "Teknologi" },
  { id: "business", label: "Bisnis" },
  { id: "creative", label: "Kreatif" },
];

function MarketTrends() {
  const dispatch = useDispatch();

  // Ambil state filter dari Redux
  const { isLoading, error, filteredMarketTrends, activeCategory } =
    useSelector((state) => state.marketTrends);

  // useEffect(() => {
  //   // 1. Fetch data pertama kali render
  //   dispatch(fetchMarketTrends());
  // }, [dispatch]);

  // Handle klik tombol tab
  function handleCategoryClick(categoryLabel) {
    dispatch(filterCategory(categoryLabel));
  }

  // Handle input pencarian (kalau perlu)
  function handleCategorySearch(e) {
    if (e.target.value.length < 5 && e.target.value !== "") return;
    dispatch(filterCategory(e.target.value));
  }

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  // Mencegah error jika data belum siap
  if (!filteredMarketTrends || filteredMarketTrends.length === 0) {
    return <Loader />;
  }

  // Karena user bisa milih "Semua" (array ada 3 object), atau milih "Teknologi" (array 1 object),
  // Kita ambil index ke-0 (paling atas) dari hasil filter sebagai data utama yang ditampilkan di UI.
  const currentTrendData = filteredMarketTrends[0] || {};

  const { jobGrowth, topSkills = [], salaryAnalysis = [] } = currentTrendData;
  const { trend_text = "+0%" } = jobGrowth || {};

  return (
    <Section>
      <div className="flex flex-col gap-5 pb-7">
        <TopBar
          placeholder="Cari peran, keahlian, atau industri"
          onChange={handleCategorySearch}
        />

        <HeaderSection
          title="Tren Pasar"
          description="Wawasan industri teknologi terkini di Indonesia."
        />

        {/* Tab Filter Categories */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto py-2 whitespace-nowrap">
          {filterCategories.map((item) => (
            <FilterCategoriesItems
              key={item.id}
              id={item.id}
              label={item.label}
              allDetail={item.detail ? item.detail : ""}
              // Bandingkan label tab dengan activeCategory di Redux
              isActive={item.label.toLowerCase() === activeCategory}
              onClick={handleCategoryClick}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {/* Job Growth Chart */}
          <motion.div
            variants={cardVariants}
            className="xs:min-w-lg flex flex-col justify-between gap-3.5 rounded-2xl bg-white p-7 max-lg:mx-auto sm:min-w-xl lg:col-span-2 lg:min-w-0 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            {/* Header */}
            <div className="flex justify-between">
              <H2 type="secondry">Pertumbuhan Pekerjaan</H2>
              <Text className="flex gap-1.5">
                <i className="fa-solid fa-arrow-trend-up trend-icon self-center text-xs"></i>
                <span className="inline-block self-center">{trend_text}</span>
              </Text>
            </div>

            {/* Body: Tambahkan flex flex-1 flex-col agar chart meregang penuh */}
            <div className="flex flex-1 flex-col">
              <Text className="self-start">Q3 2025 vs Q3 2026</Text>
              <JobGrowthChart chartData={jobGrowth?.chartData} />
            </div>
          </motion.div>

          {/* Top Skills List */}
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
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* Salary Analysis */}
        <div className="">
          <motion.div variants={cardVariants}>
            <H2 type="secondry">Analisis Gaji</H2>
          </motion.div>
          <div className="grid grid-cols-1 justify-items-center gap-5 py-7 lg:grid-cols-2">
            {salaryAnalysis.map((item, index) => (
              <SalaryAnalysisItems
                key={index}
                role={item.role}
                salaryRange={item.salaryRange}
                description={item.description} // Jika ada deskripsinya
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
