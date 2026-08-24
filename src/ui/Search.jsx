function Search({ placeholder, onChange }) {
  return (
    <>
      {/* Serch */}
      <div className="relative">
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder={placeholder}
          onChange={onChange}
          className="w-xs rounded-2xl py-1 pl-10 ring-2 ring-slate-300 outline-none dark:ring-white/25 dark:bg-black hover:dark:ring-white/35"
        />
        <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-sm"></i>
      </div>
    </>
  );
}

export default Search;
