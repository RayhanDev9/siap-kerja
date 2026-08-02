import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function SkillCategoryDetailsItems({ status, name, statusType }) {
  const themeColor = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-orange-100 text-orange-700",
  };
  const defaultColor = "bg-slate-100 text-slate-700";
  const badgeColorClass = themeColor[statusType] || defaultColor;

  return (
    <div>
      <div className="flex justify-between border-t border-b-slate-300 py-3">
        <h4 className="text-base font-medium md:text-lg lg:text-xl">{name}</h4>
        <Text
          className={`${badgeColorClass} self-center rounded-full px-2 py-1`}
        >
          {status}
        </Text>
      </div>
    </div>
  );
}

export default SkillCategoryDetailsItems;
