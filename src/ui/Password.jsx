import { useState } from "react";
import { cardVariants } from "./../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
function Password({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  function handlePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  return (
    <motion.div variants={cardVariants} className="flex flex-col gap-2">
      <label
        htmlFor="password"
        className="text-sm font-medium text-gray-700 sm:text-base lg:text-lg dark:text-white"
      >
        Kata Sandi
      </label>
      <div className="relative">
        <i className="fa-solid fa-lock absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
        <input
          type={`${showPassword ? "text" : "password"}`}
          name="password"
          id="password"
          value={value}
          onChange={onChange}
          required
          placeholder="*****"
          className="w-full rounded-xl border border-gray-200 bg-white px-10 py-3 text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 sm:text-base lg:text-lg dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35"
        />
        <i
          onClick={handlePasswordVisibility}
          className={`fa-regular absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
        ></i>
      </div>
    </motion.div>
  );
}

export default Password;
