function InputAboutMe({ value, onChange, onBlur }) {
  const maxLength = 300;

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor="about"
        className="sm:text-md text-sm font-medium text-gray-700 lg:text-lg"
      >
        Tentang Saya
      </label>

      <div className="relative">
        <textarea
          id="about"
          name="about"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
          rows="4"
          placeholder="Ceritakan sedikit tentang latar belakang, pengalaman, atau aspirasi karir Anda..."
          className="sm:text-md w-full resize-none rounded-xl border border-gray-200 bg-white p-4 text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 lg:text-lg dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <span className="sm:text-md text-sm text-gray-500 lg:text-lg">
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}

export default InputAboutMe;
