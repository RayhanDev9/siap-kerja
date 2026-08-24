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
    <motion.div variants={cardVariants} className="flex flex-col gap-3 rounded-2xl bg-white p-7 w-full h-full  dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 ">
      <div className="flex justify-between">
        <H3>{role}</H3>
        <p className="text-sm font-bold sm:text-base lg:text-lg ">{salaryRange}</p>
      </div>
      <Progres progressPercentage={progressPercentage} />
      <Text className="text-end">{description}</Text>
    </motion.div>
  );
}

export default SalaryAnalysisItems;
