function FilterCategoriesItems({ isActive, id, label, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      type="button"
      className={`dark:border dark:border-white/25  hover:dark:border-white/35 ${isActive ? "bg-primary text-white" : "border border-slate-300 bg-white dark:bg-neutral-900"} rounded-2xl px-4 py-2 text-sm sm:text-base lg:text-lg`}
    >
      {label}
    </button>
  );
}

export default FilterCategoriesItems;
