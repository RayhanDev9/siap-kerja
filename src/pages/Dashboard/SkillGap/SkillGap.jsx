import dataSkillGap from "./components/dataSkillGap";
import Section from "./../../../ui/Section";
import H2 from "./../../../ui/H2";
import Progres from "./../../../ui/Progres";
import CompetencyChart from "./components/CompetencyChart";
import SkillCategoryDetailsList from "./components/SkillCategoryDetailsList";
import HeaderSection from "../components/HeaderSection";
import TopBar from "../../../ui/TopBar";
import { MarketDemandCardItems } from "./components/MarketDemandCardItems";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function SkillGap() {
  const {
    overallReadiness,
    competencyMatrix,
    skillCategoryDetails,
    marketDemandMap,
  } = dataSkillGap;

  const { message, percentage } = overallReadiness;

  return (
    <Section>
      <div className="flex flex-col gap-7">
        {/* Top bar Lg */}
        <TopBar placeholder="cari peran, keahlian, atau industri" />
        <HeaderSection
          title="Analisis Kesenjangan"
          description="Evaluasi kesiapan Anda untuk peran UI/UX Designer Senior."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Kesiapan keseluruhan */}
          <motion.div variants={cardVariants} className="col-span-1">
            <div className="inline-block space-y-3 rounded-2xl bg-white p-7">
              <div className="flex justify-between">
                <H2 type="secondry">Kesiapan Ke Seluruhan</H2>
                <Text className="self-center text-2xl font-bold text-blue-800">
                  {percentage}%
                </Text>
              </div>
              <Progres thame="bg-blue-700" progressPercentage={percentage} />
              <Text>{message}</Text>
            </div>
          </motion.div>

          {/* Matriks Kompetensi */}
          <motion.div
            variants={cardVariants}
            className="col-span-2 space-y-3 px-7 lg:rounded-2xl lg:bg-white lg:py-7"
          >
            <H2 type="secondry">Kesiapan Ke Seluruhan</H2>
            <div className="mt-7 rounded-2xl bg-white">
              <CompetencyChart competencyMatrix={competencyMatrix} />
            </div>
          </motion.div>
        </div>

        {/* Detail Kategori Keterampilan */}
        <div variants={cardVariants} className="px-7">
          <motion.div variants={cardVariants}>
            {" "}
            <H2 type="secondry"> Detail Kategori Keterampilan</H2>
          </motion.div>
          <div className="mt-7 grid grid-cols-1 gap-4 space-y-7 sm:grid-cols-1 md:grid-cols-2">
            {skillCategoryDetails.map((item) => (
              <SkillCategoryDetailsList
                category={item.category}
                icon={item.icon}
                skills={item.skills}
                key={item.id}
              />
            ))}{" "}
          </div>
        </div>

        {/* Market Demand Map */}
        <div
          variants={cardVariants}
          className="flex w-full flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
        >
          {/* Header (Judul & Badge) */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <motion.div variants={cardVariants} className="flex flex-col gap-1">
              <H2 type="secondry" className="text-2xl font-bold text-gray-900">
                Market Demand Heatmap
              </H2>
              <Text className="text-sm font-medium text-slate-500">
                Correlation of your skills against current market job postings.
              </Text>
            </motion.div>

            <motion.div  variants={cardVariants} className="flex items-center gap-2">
              <Text className="rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-bold text-indigo-900">
                High Demand
              </Text>
              <Text className="rounded-full bg-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700">
                Average
              </Text>
            </motion.div>
          </div>

          {/* Grid Cards - Mapping dilakukan di SINI */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketDemandMap.map((item) => (
              <MarketDemandCardItems
                key={item.id} // Wajib ada key saat melakukan map
                title={item.title}
                level={item.level}
                icon={item.icon}
                bgClass={item.bgClass}
                textClass={item.textClass}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SkillGap;
