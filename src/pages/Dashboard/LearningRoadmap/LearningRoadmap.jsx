import dataLearningRoadmap from "./components/dataLearningRoadmap";
import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import Progres from "../../../ui/Progres";
import HeaderSection from "../components/HeaderSection";
import StageItems from "./components/StageItems";
import TopBar from "../../../ui/TopBar";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useSelector } from "react-redux";
import Loader from "../../../ui/Loader";
import Button from "../../../ui/Button";
import CardCourse from "./components/CardCourse";

// function LearningRoadmap() {
//   const { roadmapData, isLoading, error } = useSelector(
//     (state) => state.learningRoadmap,
//   );
//   const { overallProgress, stages } = roadmapData;

//   const { estimatedTime, label, percentage } = overallProgress;


//   return (
//     <Section>
//       <div className="flex flex-col gap-7">
//         {/* Top bar Lg */}
//         <TopBar
//           placeholder="cari peran, keahlian, atau industri"
//           isSerch={false}
//         />
//         {/* Header Section */}
//         <div>
//           <HeaderSection
//             title="Senior Machine Learning Engineer"
//             description="Jalur Karir Tujuan"
//             icon="fa-solid fa-briefcase pr-2"
//           />
//         </div>

//         <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
//           {/* overallProgress */}
//           <motion.div
//             variants={cardVariants}
//             className="col-span-1 flex flex-col gap-3 rounded-2xl bg-white p-7 lg:col-span-2 lg:max-h-36"
//           >
//             <div className="flex justify-between">
//               <H3 type="secondry">{label}</H3>
//               <Text>{percentage}%</Text>
//             </div>
//             <Progres progressPercentage={percentage} />
//             <Text className="text-end">Perkiran Waktu: {estimatedTime}</Text>
//           </motion.div>

//           {/* Ai sugestion */}
//           <motion.div
//             variants={cardVariants}
//             className="col-span-1 hidden space-y-3 rounded-2xl bg-white p-7 lg:block"
//           >
//             <div className="flex gap-3">
//               <H3 type="secondry">
//                 <i class="fa-solid fa-user-cog"></i>
//               </H3>
//               <H3 type="secondry">Ai Suggestion</H3>
//             </div>
//             <Text>
//               Berdasarkan tren pasar, fokus pada MLOps saat ini akan
//               meningkatkan tingkat kecocokan profil Anda sebesar 22% untuk peran
//               senior.
//             </Text>
//             <button className="text-start font-semibold text-blue-700">
//               Sesuaikan Garis Waktu <i className="fa-solid fa-arrow-right"></i>
//             </button>
//           </motion.div>
//         </div>

//         {/* Staged */}
//         <div variants={cardVariants} className="ml-7">
//           {stages.map((stage) => (
//             <StageItems
//               stepLabel={stage.stepLabel}
//               badge={stage.badge}
//               title={stage.title}
//               description={stage.description}
//               isLocked={stage.isLocked}
//               status={stage.status}
//               progres={stage?.progress}
//               id={stage.id}
//               key={stage.id}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

// export default LearningRoadmap;
const tes = ["tes", "tes", "tes"];


function LearningRoadmap() {
  return (
    <Section>
      <div>
        <div className="flex flex-col gap-7">
          {/* Top bar Lg */}
          <TopBar
            placeholder="cari peran, keahlian, atau industri"
            isSerch={false}
          />
          {/* Header Section */}
          <div>
            <HeaderSection
              title="Katalog Kursus"
              description="Lanjutkan pembelajaran Anda untuk mencapai tujuan karir berikutnya."
              icon="fa-solid fa-briefcase pr-2"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-5 md:justify-start">
            {tes.map((tes) => (
              <CardCourse />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default LearningRoadmap;
