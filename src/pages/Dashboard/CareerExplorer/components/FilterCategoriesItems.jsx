function FilterCategoriesItems({ isActive, id, label }) {
  return (
    <button
      type="primary"
      className={` ${isActive ? "bg-primary text-white" : "border-1 border-slate-300 bg-white"} rounded-2xl px-4 py-2`}
    >
      {label}
    </button>
  );
}

export default FilterCategoriesItems;
