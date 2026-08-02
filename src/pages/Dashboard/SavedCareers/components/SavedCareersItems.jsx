import TagItems from "./TagItems";
import SegmentedRadialProgress from "./SegmentedRadialProgress";
import H2 from "../../../../ui/H2";
import Progres from "../../../../ui/Progres";
import Text from "../../../../ui/Text";
import H3 from "../../../../ui/H3";
import { cardVariants } from "../../../..//util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function SavedCareersItems({
  tags,
  role,
  salaryEstimate,
  label,
  mastered,
  total,
  statusText,
  progressPercentage,
  titleAiRecommendation,
  aiRecommendation,
}) {
  return (
    <motion.div variants={cardVariants} className="rounded-2xl bg-white p-7">
      {/* Tag */}
      <div className="mb-4 flex gap-4">
        {tags.map((tag) => (
          <TagItems label={tag.label} theme={tag.theme} key={tag.label} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <div className="self-center">
          <H3 type="secondry">{role}</H3>
          <Text className="mt-1">Gaji Est: {salaryEstimate}</Text>
        </div>
        <div className="flex justify-end">
          <SegmentedRadialProgress mastered={mastered} total={total} />
        </div>
      </div>
      {/* Progrs */}
      <div className="flex flex-col gap-3">
        <div className="mt-4 flex justify-between">
          <Text>{label}</Text>
          <Text>
            {mastered}/{total} {statusText}
          </Text>
        </div>

        <Progres progressPercentage={progressPercentage} />
      </div>

      {/* Ai recomendation */}
      <div className="mt-7 flex flex-col gap-2 bg-blue-50 p-3">
        <p className="font-semibold md:text-lg lg:text-xl">
          <i class="fa-regular fa-lightbulb icon-lightbulb pr-1.5 text-orange-500"></i>
          {titleAiRecommendation}
        </p>
        <Text>
          <i class="fa-regular fa-circle-check icon-check pr-1.5 text-blue-500"></i>
          {aiRecommendation.tasks[0].text}
        </Text>
      </div>
    </motion.div>
  );
}

export default SavedCareersItems;
