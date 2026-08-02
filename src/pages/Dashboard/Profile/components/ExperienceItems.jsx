import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import H2 from "./../../../../ui/H2";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motio

function ExperienceItems({ role, company, period, description, isCurrent }) {
  return (
    <motion.div variants={cardVariants}
      className={`border-l border-slate-400 pb-7 ${isCurrent ? "" : ""} relative`}
    >
      <div
        className={`absolute top-0 -left-[8px] h-4 w-4 rounded-full ring-2 ring-white ring-offset-1 ${isCurrent ? "bg-blue-700" : "bg-slate-400"}`}
      ></div>
      <div className="ml-7 flex flex-col gap-3 rounded-2xl bg-white p-7">
        <H3 type="secondry"> {role}</H3>
        <Text>
          {company} • {period}
        </Text>
        <Text>{description}</Text>
      </div>
    </motion.div>
  );
}

export default ExperienceItems;
