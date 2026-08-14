import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion";
function SkillSelectionItems({ id, title, isSelected, onSelect }) {
  return (
    <motion.div variants={cardVariants}>
      <label
        htmlFor={id}
        onClick={() => onSelect()}
        className={`relative flex cursor-pointer items-center justify-between rounded-2xl border-2 p-4 transition-all  dark:bg-neutral-900  ${
          isSelected
            ? "border-blue-600 bg-blue-50"
            : "border-slate-200 bg-white dark:border dark:border-white/25hover:dark:border-white/35 hover:border-blue-400"
        }`}
      >
        <H3 className="text-lg font-semibold text-slate-900">{title}</H3>

        {/* Custom Checkbox */}
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            id={id}
            checked={isSelected}
            readOnly
            className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
          />
          {/* Checkmark Icon */}
          <i className="fa-solid fa-check pointer-events-none absolute text-sm text-white opacity-0 transition-opacity peer-checked:opacity-100"></i>
        </div>
      </label>
    </motion.div>
  );
}

export default SkillSelectionItems;
