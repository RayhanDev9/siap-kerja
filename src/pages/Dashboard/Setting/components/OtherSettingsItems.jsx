import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function OtherSettingsItems({ kategori, status, icon }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex gap-3 border-b border-slate-200 py-7"
    >
      <i className={`fa-solid ${icon} lg:3xl: self-center text-2xl`}></i>
      <div>
        <p className="font-semibold md:text-base lg:text-lg">{kategori}</p>
        <Text className="font-light">{status}</Text>
      </div>
    </motion.div>
  );
}

export default OtherSettingsItems;
