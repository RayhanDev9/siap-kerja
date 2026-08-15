import H2 from "../../../../ui/H2";
import Progres from "../../../../ui/Progres";
import Button from "../../../../ui/Button";
import Text from "../../../../ui/Text";
import H3 from "../../../../ui/H3";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function StageItems({
  id,
  stepLabel,
  badge,
  title,
  description,
  status, // "locked", "completed", atau "active"
  progres,
}) {
  // 1. Ekstrak semua logika warna ke dalam objek
  // Ini menghindari penulisan kondisi yang panjang dan pusing di dalam JSX
  const styleConfig = {
    locked: {
      wrapper: "bg-slate-200",
      icon: "fa-solid fa-lock text-slate-500",
      badge: "bg-slate-200 text-slate-600",
    },
    completed: {
      wrapper: "bg-green-200",
      icon: "fa-solid fa-circle-check text-green-800",
      badge: "bg-green-200 text-green-800",
    },
    active: {
      // Status default (untuk sedang berlangsung)
      wrapper: "bg-blue-200",
      icon: "fa-solid fa-circle-play text-blue-800",
      badge: "bg-blue-200 text-blue-800",
    },
  };

  // 2. Pilih style berdasarkan props status (jika kosong/tidak cocok, gunakan 'active')
  const currentStyle = styleConfig[status] || styleConfig.active;

  // 3. Pisahkan logika untuk membungkus konten agar JSX di bawah tetap rapi
  const isOngoing = badge === "SEDANG BERLANGSUNG";
  const contentWrapperStyle = isOngoing
    ? "border border-slate-400 bg-white shadow-xl"
    : "bg-white/70 shadow-md";

  return (
    <motion.div  variants={cardVariants}
      className={`relative border-l border-slate-400 pl-14 ${id === 1 ? "" : "pt-7"}`}
    >
      {/* Icon Map (Absolute) */}
      <div
        className={`absolute top-0 -left-[31px] z-40 rounded-full p-4 ${currentStyle.wrapper}`}
      >
        <i className={`text-4xl ${currentStyle.icon}`}></i>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col gap-3 rounded-2xl p-7 ${contentWrapperStyle}`}
      >
        {/* Badge & Step Label */}
        <div className="flex items-center justify-between">
          <p
            className={`rounded-2xl px-3.5 py-1 text-xs font-medium uppercase  sm:text-base lg:text-base ${currentStyle.badge}`}
          >
            {status}
          </p>
          <Text className="font-semibold text-slate-500">{stepLabel}</Text>
        </div>

        {/* Title & Description */}
        <H3 type="secondry">{title}</H3>
        <p className="text-slate-600  md:text-base lg:text-lg">{description}</p>

        {/* Progress Bar */}
        {progres && <Progres progressPercentage={progres} />}

        {/* Tombol Lanjutkan */}
        {isOngoing && (
          <div className="lg:mt-5">
            <Button type="generalPrimary">
              Lanjutkan
              <i className="fa-solid fa-arrow-right pl-2"></i>
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default StageItems;
