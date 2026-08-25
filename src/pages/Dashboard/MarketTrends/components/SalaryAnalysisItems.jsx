import Text from "../../../../ui/Text";
import H3 from "./../../../../ui/H3";
import Progres from "./../../../../ui/Progres";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion";

// 1. Taruh helper di luar komponen agar tidak dibuat ulang setiap re-render
const calculateSalaryMedian = (str = "") => {
  const [min = 0, max = 0] = (str.match(/\d+(\.\d+)?/g) || []).map(Number);
  const median = (min + max) / 2;
  return { min, max, median, displayMedian: `Rp ${median}M` };
};

function SalaryAnalysisItems({
  role,
  salaryRange,
  progressPercentage,
  description,
}) {
  const { min, max, displayMedian } = calculateSalaryMedian(salaryRange);

  return (
    <motion.div
      variants={cardVariants}
      className="flex h-full w-full flex-col gap-3 rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-money-bill-trend-up self-center text-sm text-blue-500 sm:text-base lg:text-lg dark:text-blue-400"></i>
          <H3>{role}</H3>
        </div>
        <div>
          <p className="text-sm font-bold text-blue-500 sm:text-base lg:text-lg dark:text-blue-400">
            {salaryRange}
          </p>
          <p className="text-end text-xs font-semibold sm:text-sm lg:text-base">
            / bulan
          </p>
        </div>
      </div>

      {/* Tampilkan nilai min, median, dan max dengan benar */}
      <div className="flex justify-between text-xs font-semibold sm:text-sm lg:text-base">
        <span>Min: Rp {min}M</span>
        <span>Median : {displayMedian}</span>
        <span>Max: Rp {max}M</span>
      </div>

      <Progres progressPercentage={progressPercentage} />

      <Text className="text-end">{description}</Text>
    </motion.div>
  );
}

export default SalaryAnalysisItems;
