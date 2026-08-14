import H2 from "../../../ui/H2";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motio

function FeaturedFeaturesItems({ paraghraf, heading, svg, bgColor }) {
  return (
    <motion.div variants={cardVariants} className="max-w-lg rounded-2xl bg-white px-6 py-8 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
      <div className={`inline-block rounded-md px-2 py-2 ${bgColor} `}>
        {svg}
      </div>
      <H2 type="secondry">{heading}</H2>
      <Text>{paraghraf}</Text>
    </motion.div>
  );
}

export default FeaturedFeaturesItems;
