function InputName({ value, onChange, disabled, label = "Nama Lengkap" }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="fullname"
        className="text-sm font-medium text-gray-700 sm:text-base lg:text-lg dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={value}
          disabled={disabled}
          onChange={onChange}
          required
          placeholder="Masukkan nama lengkap"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-10 text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 sm:text-base lg:text-lg dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35"
        />
        <i className="fa-regular fa-user absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
      </div>
    </div>
  );
}

export default InputName;
