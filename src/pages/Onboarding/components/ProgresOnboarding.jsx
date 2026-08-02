import Progres from "../../../ui/Progres";
import Text from "../../../ui/Text";
import { containerVariants, cardVariants } from "../../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function ProgresOnboarding({ progresOnboarding }) {
  return (
    <motion.div variants={cardVariants} className="flex flex-col gap-3">
      <div className="flex justify-between">
        <Text>Step {progresOnboarding + 1} of 4</Text>
        <Text>{progresOnboarding * 25}%</Text>
      </div>
      <Progres
        progressPercentage={progresOnboarding * 25}
        thame="bg-indigo-600"
      />
    </motion.div>
  );
}

export default ProgresOnboarding;
