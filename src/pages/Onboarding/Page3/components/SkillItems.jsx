import { useState } from "react";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import { cardVariants } from "../../../../util/animations";
import { calcBoxDelta, motion } from "framer-motion"; // 1. Import Framer Motion

function SkillItems({ lavel, title, progres, tools }) {
  const [progresInput, setProgresInput] = useState(progres);
  return (
    <motion.div variants={cardVariants} className="w-full space-y-5 rounded-2xl bg-white p-7 shadow-sm">
      <div className="flex justify-between">
        <div className="">
          <H3 type="small">{title}</H3>
          <Text className="mt-2">{tools}</Text>
        </div>
        <div>
          <Text className="inline-block rounded-2xl bg-indigo-100 p-2 text-indigo-600">
            {lavel}
          </Text>
        </div>
      </div>

      {/* Progres */}
      <div className="">
        <input
          type="range"
          name="progress"
          id="progress"
          // Tambahkan accent-blue-600 untuk warna biru instan
          className="mb-3 w-full cursor-pointer accent-blue-600"
          min="0" // Biasanya progres dimulai dari 0
          max="100" // Batas maksimal biasanya 100 (persentase)
          value={progresInput}
          onChange={(e) => setProgresInput(e.target.value)} // Perlu ada event ini agar state berubah
        />
        <div className="flex justify-between">
          <Text>Pemula</Text>
          <Text>Ahli</Text>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillItems;
