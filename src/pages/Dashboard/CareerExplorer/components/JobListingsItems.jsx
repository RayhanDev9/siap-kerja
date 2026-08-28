import { useState, useEffect } from "react";
import H2 from "../../../../ui/H2";
import Text from "../../../../ui/Text";
import SkillsItem from "./SkillsItem";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

function JobListingsItems({
  id,
  title,
  company,
  badge,
  matchPercentage,
  skills,
  salary,
  linkText,
  isSaved,
  onHandleToggleSave,
}) {
  const dispatch = useDispatch();

  // 1. State lokal untuk render instan di UI
  const [saved, setSaved] = useState(Boolean(isSaved));

  // 2. Sinkronkan dengan server/props jika ada perubahan dari luar
  useEffect(() => {
    setSaved(Boolean(isSaved));
  }, [isSaved]);

  const badgeStyles = {
    primary: "bg-purple-800 text-purple-800",
    warning: "bg-orange-300 text-orange-800",
    success: "bg-green-800 text-green-800",
    default: "bg-blue-600 text-blue-600 dark:bg-blue-600 dark:text-blue-500",
  };
  const currentStyle = badgeStyles[badge?.type] || badgeStyles.default;

  function handleClick(e) {
    e.stopPropagation();
    setSaved((prev) => !prev); // Ubah ikon seketika saat diklik
    onHandleToggleSave(id);     // Kirim dispatch ke server
  }

  return (
    <motion.div
      variants={cardVariants}
      className="relative w-[90%] rounded-2xl bg-white px-3 pt-7 pb-5 sm:w-[80%] md:w-[90%] lg:w-full dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <button
        type="button"
        className="absolute top-4 right-4 z-50 cursor-pointer"
        onClick={handleClick}
      >
        <i
          className={`${saved ? "fa-solid" : "fa-regular"} fa-bookmark text-lg text-blue-500 sm:text-xl lg:text-2xl`}
        ></i>
      </button>
      <div className="border-b border-slate-300 pb-5">
        <div className="flex flex-col gap-1">
          <H2 type="secondry"> {title}</H2>
          <Text className="text-xl">
            <i className="fa-solid fa-building pr-2 text-gray-500"></i>
            {company}
          </Text>

          <div className={`flex flex-col gap-2`}>
            <div className="flex justify-between">
              <Text className="capitalize">kecocokan profile</Text>
              <Text
                className={`rounded-2xl bg-white px-2 py-1 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35`}
              >
                {matchPercentage}%
              </Text>
            </div>

            <div className="h-2.5 w-full rounded-full bg-blue-100">
              <div
                className={`h-2.5 rounded-full w-${matchPercentage} ${currentStyle}`}
                style={{ width: `${matchPercentage}%` }}
              ></div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills &&
                skills.map((item, index) => (
                  <SkillsItem key={index} skill={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-5">
        <h3 className="text-lg font-semibold">{salary?.display_text}</h3>
        <a href={linkText} target="_blank" rel="noopener noreferrer">
          <p className="text-sm font-semibold text-blue-700 md:text-base lg:text-lg dark:text-blue-500">
            {"Jobstreet"}
          </p>
        </a>
      </div>
    </motion.div>
  );
}

export default JobListingsItems;