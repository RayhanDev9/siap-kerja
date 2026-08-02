import H2 from "../../../ui/H2";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion


function HeaderSection({ title, description, icon = "" }) {
  return (
    <motion.div variants={cardVariants}>
      <H2 type="netural"> {title} </H2>

      <Text>
        {icon && <i className={`${icon}`}></i>}
        {description}
      </Text>
    </motion.div>
  );
}

export default HeaderSection;
