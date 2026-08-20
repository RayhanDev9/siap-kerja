import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function OtherSettingsItems({ kategori, status, icon, onClick }) {
  return (
    <motion.button
      type="button"
      variants={cardVariants}
      onClick={onClick}
      className="flex w-full gap-3 rounded-2xl border border-slate-900 p-7 py-7 text-left md:border md:border-white/25 hover:md:border-white/35 dark:border dark:border-b-white/25 hover:dark:border-b-white/35"
    >
      <i className={`fa-solid ${icon} lg:3xl: self-center text-2xl`}></i>
      <div>
        <p className="font-semibold md:text-base lg:text-lg">{kategori}</p>
        <Text className="font-light">{status}</Text>
      </div>
    </motion.button>
  );
}

export default OtherSettingsItems;
