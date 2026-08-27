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
    <motion.div variants={cardVariants} className="h-full w-full">
      <label
        htmlFor={id}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          onSelect();
        }}
        // UBAH: Ganti flex layout menjadi flex-col items-center justify-center
        className={`group relative flex h-full w-full flex-col items-center justify-center rounded-2xl border-2 p-4 text-center shadow-sm transition-all dark:bg-neutral-900 ${
          isDisabled
            ? "cursor-not-allowed border-slate-200 bg-slate-100 opacity-50"
            : isSelected
              ? "cursor-pointer border-blue-600 bg-blue-50/30"
              : "cursor-pointer border-slate-200 bg-white hover:border-blue-400 dark:border dark:border-white/25 hover:dark:border-white/35"
        }`}
      >
        {/* Checkbox dipindah ke atas dan diberi position absolute agar tidak menggeser konten */}
        <div className="absolute top-4 right-4 flex items-center justify-center">
          <input
            type="checkbox"
            id={id}
            checked={isSelected}
            disabled={isDisabled}
            readOnly
            className="peer h-6 w-6 shrink-0 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 focus:outline-none disabled:cursor-not-allowed"
          />
          <i className="fa-solid fa-check pointer-events-none absolute text-xs text-white opacity-0 transition-opacity peer-checked:opacity-100"></i>
        </div>

        {/* Konten Ikon & Teks sekarang benar-benar di tengah */}
        <div className="w-full space-y-5 rounded-2xl bg-transparent py-2">
          <div>
            <i
              className={`${icon} rounded-2xl p-2 sm:text-base md:text-xl lg:text-2xl ${iconBgClass} ${iconTextClass}`}
            ></i>
          </div>
          <div>
            <H3 type="small">{title}</H3>
          </div>
        </div>
      </label>
    </motion.div>
  );
}

export default CategoryItems;
