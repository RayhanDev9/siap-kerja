import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion";

function SkillSelectionItems({ id, title, isSelected, onSelect }) {
  return (
    <motion.div variants={cardVariants} className="h-full w-full">
      <label
        htmlFor={id}
        onClick={() => onSelect()}
        className={`group relative flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-4 pt-6 text-center transition-all dark:bg-neutral-900 ${
          isSelected
            ? "border-blue-600 bg-blue-50/50"
            : "border-slate-200 bg-white hover:border-blue-400 dark:border dark:border-white/25 hover:dark:border-white/35"
        }`}
      >
        {/* Checkbox dipindah ke pojok kanan atas menggunakan absolute */}
        <div className="absolute top-3 right-3 flex items-center justify-center">
          <input
            type="checkbox"
            id={id}
            checked={isSelected}
            readOnly
            className="peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border-2 border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
          />
          {/* Checkmark Icon */}
          <i className="fa-solid fa-check pointer-events-none absolute text-[10px] text-white opacity-0 transition-opacity peer-checked:opacity-100"></i>
        </div>

        {/* Teks Keahlian */}
        <H3 className="text-lg  font-semibold text-slate-900 my-2 dark:text-slate-100">
          <span className="line-clamp-2 inline-block">{title}</span>
        </H3>
      </label>
    </motion.div>
  );
}

export default SkillSelectionItems;
