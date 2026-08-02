
function InputAboutMe({ value, onChange, onBlur }) {
  const maxLength = 300;

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor="about" className="text-sm sm:text-md lg:text-lg font-medium text-gray-700">
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
          className="w-full resize-none rounded-xl border border-gray-200 bg-white p-4 text-sm sm:text-md lg:text-lg transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <span className="text-sm sm:text-md lg:text-lg text-gray-500">
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}

export default InputAboutMe;
