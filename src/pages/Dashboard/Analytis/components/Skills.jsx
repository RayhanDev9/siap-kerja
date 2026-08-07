import Progres from "../../../../ui/Progres";
import Text from "../../../../ui/Text";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motio

function Skills({ skill, progressPercentage }) {
  return (
    <>
      {/* progres */}
      <motion.div variants={cardVariants} className="flex justify-between">
        <Text>{skill}</Text>
        <Text>{progressPercentage}%</Text>
      </motion.div>
      <Progres skill={skill} progressPercentage={progressPercentage} />
    </>
  );
}

export default Skills;
