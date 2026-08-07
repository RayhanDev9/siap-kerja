import H3 from "../../../../ui/H3";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
function CategoryItems({ title, icon }) {
  const themeStyles = {
    technology: { bg: "bg-indigo-100", text: "text-indigo-800" },
    design: { bg: "bg-purple-100", text: "text-purple-900" },
    business: { bg: "bg-orange-100", text: "text-orange-900" },
    healthcare: { bg: "bg-red-100", text: "text-red-900" },
    education: { bg: "bg-slate-200", text: "text-slate-800" },
    environment: { bg: "bg-blue-200", text: "text-blue-800" },
  };

  // Fungsi bantuan (opsional, jika butuh default nilai)
  const getTheme = () => {
    return (
      themeStyles[title.toLowerCase()] || {
        bg: "bg-gray-100",
        text: "text-gray-800",
      }
    );
  };
  return (
    <motion.div variants={cardVariants} className="xs:w-56 w-40 space-y-7 rounded-2xl bg-white p-7 shadow-sm sm:w-64">
      <div className="text-center">
        <i
          className={`${icon} rounded-2xl sm:text-base md:text-xl lg:text-2xl ${getTheme().bg} ${getTheme().text} p-2`}
        ></i>
      </div>
      <div className="mx-auto text-center">
        <H3 type="small">{title}</H3>
      </div>
    </motion.div>
  );
}

export default CategoryItems;
