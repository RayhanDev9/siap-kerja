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
    <motion.div variants={cardVariants} className="flex flex-col gap-3 rounded-2xl bg-white p-7 w-full h-full ">
      <div className="flex justify-between">
        <H3>{role}</H3>
        <p className="text-lg font-bold sm:text-xl lg:text-2xl text-blue-700">{salaryRange}</p>
      </div>
      <Progres progressPercentage={progressPercentage} />
      <Text className="text-end">{description}</Text>
    </motion.div>
  );
}

export default SalaryAnalysisItems;
