import H3 from "../../../../ui/H3";
import SkillCategoryDetailsItems from "./SkillCategoryDetailsItems";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function SkillCategoryDetailsList({ category, icon, skills }) {
  return (
    <motion.div variants={cardVariants} className="rounded-2xl bg-white px-7 py-7 md:block md:h-full">
      <div className="py-2">
        <H3>
          <i className={`fa-solid text-xl ${icon} pr-2`}></i>
          {category}
        </H3>
      </div>
      <div>
        {/* name: "Desain Sistem Skalabel",
          status: "Pengembangan",
          statusType: "warning", */}
        {skills.map((skill) => (
          <SkillCategoryDetailsItems
            name={skill.name}
            status={skill.status}
            statusType={skill.statusType}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategoryDetailsList;
