import { div } from "framer-motion/client";
import H3 from "../../../../ui/H3";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion";

function CategoryItems({
  title,
  icon,
  iconBgClass,
  iconTextClass,
  id,
  isSelected,
  isDisabled,
  onSelect,
}) {
  return (
    <motion.div variants={cardVariants}>
      <label
        variants={cardVariants}
        htmlFor={id}
        onClick={(e) => {
          // Cegah aksi klik default jika posisi disabled
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          onSelect();
        }}
        className={`group relative flex items-start justify-between rounded-2xl border-2 p-4 shadow-sm transition-all dark:bg-neutral-900 ${
          isDisabled
            ? "cursor-not-allowed border-slate-200 bg-slate-100 opacity-50" // Style saat DISABLED
            : isSelected
              ? "cursor-pointer border-blue-600 bg-blue-50/30" // Style saat TERPILIH
              : "cursor-pointer border-slate-200 bg-white hover:border-blue-400 dark:border dark:border-white/25 hover:dark:border-white/35" // Style NORMAL
        }`}
      >
        <div className="xs:w-56 w-40 space-y-7 rounded-2xl bg-transparent p-7 sm:w-64">
          <div className="text-center">
            <i
              className={`${icon} rounded-2xl p-2 sm:text-base md:text-xl lg:text-2xl ${iconBgClass} ${iconTextClass}`}
            ></i>
          </div>
          <div className="mx-auto text-center">
            <H3 type="small">{title}</H3>
          </div>
        </div>

        {/* Indicator Centang Kustom */}
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            id={id}
            checked={isSelected}
            disabled={isDisabled}
            readOnly
            className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 focus:outline-none disabled:cursor-not-allowed"
          />
          {/* Icon Centang Putih */}
          <i className="fa-solid fa-check pointer-events-none absolute text-xs text-white opacity-0 transition-opacity peer-checked:opacity-100"></i>
        </div>
      </label>
    </motion.div>
  );
}

export default CategoryItems;
