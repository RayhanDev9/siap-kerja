import Text from "../../../../ui/Text";
import H3 from "./../../../../ui/H3";
import Progres from "./../../../../ui/Progres";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function SalaryAnalysisItems({
  role,
  salaryRange,
  progressPercentage,
  description,
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex h-full w-full flex-col gap-3 rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-money-bill-trend-up text-blue-500 dark:text-blue-400 self-center text-sm sm:text-base lg:text-lg"></i>
          <H3>{role}</H3>
        </div>
        <div>
          <p className="text-sm font-bold text-blue-500 dark:text-blue-400 sm:text-base lg:text-lg">
            {salaryRange}
          </p>
          <p className="text-end text-xs sm:text-sm lg:text-base font-semibold">/ bulan</p>
        </div>
      </div>
      <div className="flex justify-between text-xs sm:text-sm lg:text-base font-semibold">
        <span>Min</span>
        <span>Median : 50</span> <span>Max</span>{" "}
      </div>
      <Progres progressPercentage={progressPercentage} />

      <Text className="text-end">{description}</Text>
    </motion.div>
  );
}

export default SalaryAnalysisItems;
