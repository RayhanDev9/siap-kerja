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
      className="flex w-full items-center gap-3 border-b border-slate-200 py-7 text-left transition-colors duration-200 hover:bg-slate-50 dark:border-b dark:border-b-white/25 hover:dark:border-b-white/35 dark:hover:bg-white/5"
    >
      <i className={`fa-solid ${icon} mt-0.5 self-center text-2xl text-slate-700 dark:text-slate-200`}></i>
      <div className="min-w-0 flex-1">
        <p className="font-semibold md:text-base lg:text-lg">{kategori}</p>
        <Text className="font-light">{status}</Text>
      </div>
    </motion.button>
  );
}

export default OtherSettingsItems;
