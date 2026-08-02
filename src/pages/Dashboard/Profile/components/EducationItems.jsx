import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import H2 from "./../../../../ui/H2";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motio

function EducationItems({ institution, degree, period, gpa }) {
  return (
    <motion.div variants={cardVariants} className="flex flex-col gap-3 rounded-2xl bg-white p-7">
      <div className="flex gap-x-7">
        <div className="self-center">
          <i class="fa-solid fa-graduation-cap rounded-md bg-blue-50 px-2 py-2.5 text-2xl text-blue-600"></i>
        </div>
        <div className="">
          <H3 type="secondry">
            <span className="">{institution}</span>
          </H3>
          <Text>{degree}</Text>
          <Text>
            {period} • {gpa}
          </Text>
        </div>
      </div>
    </motion.div>
  );
}

export default EducationItems;
