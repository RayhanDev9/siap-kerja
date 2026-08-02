import { motion } from "framer-motion"; // 1. Import Framer Motion

// 2. Gunakan const, bukan function, dan gunakan tanda sama dengan (=)
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Jeda waktu 0.5 detik antar kartu yang muncul
    },
  },
};

// 3. Sama seperti di atas, gunakan const untuk membuat objek
export const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Posisi awal: tembus pandang & turun 50px
  visible: {
    opacity: 1,
    y: 0, // Posisi akhir: terlihat jelas & naik ke posisi asli
    transition: {
      duration: 0.5, // Lama animasi per kartu 0.5 detik
      ease: "easeOut", // Gerakan melambat halus di akhir
    },
  },
};
