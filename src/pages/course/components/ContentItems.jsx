import Text from "../../../ui/Text";
import HeaderSection from "../../Dashboard/components/HeaderSection";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
function ContentItems({ titleStep, statusStep, description, content }) {
  return (
    <div variants={cardVariants} >
      <motion.div  variants={cardVariants}>
        <HeaderSection title={titleStep} description={description} />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Text className="mt-7">{content}</Text>
      </motion.div>
    </div>
  );
}

export default ContentItems;
