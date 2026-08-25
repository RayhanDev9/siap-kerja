import Text from "../../../../ui/Text";
import H3 from "../../../../ui/H3";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function Skills({ icon, name, description, rank, thame }) {
  // Object kondisi untuk memetakan nama "thame" ke class Tailwind
  const themeColorConfig = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-500",
    },
    purple: {
      bg: "bg-purple-100", // Sesuaikan dengan warna UI Anda
      text: "text-purple-500",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-500",
    },
    // Fallback (nilai default) jika "thame" tidak ditemukan di object ini
    default: {
      bg: "bg-gray-100",
      text: "text-gray-500",
    },
  };

  const activeTheme = themeColorConfig[thame] || themeColorConfig.default;

  return (
    <motion.div
      variants={cardVariants}
      className="flex justify-between rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div className="flex items-center gap-5">
        <p>
          <i
            className={`fa-solid ${icon} ${activeTheme.bg} ${activeTheme.text} rounded-2xl p-4 text-2xl dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35`}
          ></i>
        </p>
        <div>
          <H3>
            <span className="line-clamp-2">{name}</span>
          </H3>
          <Text>
            <span className="line-clamp-2">{description}</span>
          </Text>
        </div>
      </div>
      <Text>{rank}</Text>
    </motion.div>
  );
}

export default Skills;
