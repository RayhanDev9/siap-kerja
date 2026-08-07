import H2 from "../../../../ui/H2";
import Text from "../../../../ui/Text";
import SkillsItem from "./SkillsItem";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion";

function JobListingsItems({
  title,
  company,
  badge,
  matchPercentage,
  skills,
  salary,
  linkText,
}) {
  const badgeStyles = {
    primary: "bg-purple-800 text-purple-800",
    warning: "bg-orange-300 text-orange-800",
    success: "bg-green-800 text-green-800",
    default: "bg-gray-800 text-gray-800",
  };

  const currentStyle = badgeStyles[badge?.type] || badgeStyles.default;
  const tes = false;

  return (
    <motion.div
      variants={cardVariants}
      className="relative w-[90%] rounded-2xl bg-white px-3 pt-7 pb-5"
    >
      <div className="absolute top-4 right-4">
        <i
          className={`${tes ? "fa-solid" : "fa-regular"} fa-bookmark text-lg text-blue-500 sm:text-xl lg:text-2xl`}
        ></i>
      </div>
      <div className="border-b border-slate-300 pb-5">
        <div className="flex flex-col gap-1">
          <H2 type="secondry"> {title}</H2>
          <Text className="text-xl">
            <i className="fa-solid fa-building pr-2 text-gray-500"></i>
            {company}
          </Text>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <Text className="capitalize">kecocokan profile</Text>
              <Text className={`${currentStyle} bg-white`}>
                {matchPercentage}%
              </Text>
            </div>

            <div className="h-2.5 w-full rounded-full bg-purple-100">
              <div
                className={`h-2.5 rounded-full ${currentStyle}`}
                style={{ width: `${matchPercentage}%` }}
              ></div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills && skills.map((item, index) => (
                <SkillsItem key={index} skill={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-5">
        <h3 className="text-lg font-semibold">{salary}</h3>
        <p className="text-sm font-semibold text-blue-700 md:text-base lg:text-lg">
          {linkText}
        </p>
      </div>
    </motion.div>
  );
}

export default JobListingsItems;