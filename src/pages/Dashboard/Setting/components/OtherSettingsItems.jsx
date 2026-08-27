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
      className="flex w-full gap-3 rounded-2xl   p-7 py-7 text-left border border-slate-300 hover:border-slate-300 dark:border dark:border-white/25 hover:dark:border-white/35"
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
