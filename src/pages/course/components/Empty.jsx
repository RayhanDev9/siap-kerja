import Theme from "../../../ui/Theme";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function Empty() {
  return (
    <motion.div
      variants={cardVariants}
      className="hidden bg-blue-50 lg:block dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div className="absolute top-2 left-[2.8px]">
        <Theme />
      </div>
    </motion.div>
  );
}

export default Empty;
