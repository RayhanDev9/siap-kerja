import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

export const MarketDemandCardItems = ({ title, level, icon, bgClass, textClass }) => {
  return (
    <motion.div variants={cardVariants}
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border p-5 text-center ${bgClass} dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35`}
    >
      <i className={`${icon} text--base sm:text-lg lg:text-xl ${textClass}`}></i>
      <div className="flex flex-col gap-0.5">
        <span className="font-medium text-base md:text-lg lg:text-xl text-gray-900 dark:text-white/80">
          {title}
        </span>
        <span className={`text-sm font-bold ${textClass}`}>
          {level}
        </span>
      </div>
    </motion.div>
  );
};