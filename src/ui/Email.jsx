import { cardVariants } from "./../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function Email({ value, onChange, disabled = false }) {
  return (
    <motion.div variants={cardVariants} className="flex flex-col gap-2">
      <label
        htmlFor="email"
        className="text-sm font-medium text-gray-700 sm:text-base lg:text-lg"
      >
        Alamat Email
      </label>
      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder="nama@gmail.com"
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-10 text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 sm:text-base lg:text-lg"
        />
        <i className="fa-regular fa-envelope absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
      </div>
    </motion.div>
  );
}

export default Email;
