function FilterCategoriesItems({ isActive, id, label }) {
  return (
    <button
      type="primary"
      className={` ${isActive ? "bg-primary text-white" : "border border-slate-300 bg-white"} rounded-2xl px-4 py-2 text-sm sm:text-base lg:text-lg`}
    >
      {label}
    </button>
  );
}

export default FilterCategoriesItems;
