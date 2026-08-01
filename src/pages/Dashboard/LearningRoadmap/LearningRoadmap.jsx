import dataLearningRoadmap from "./components/dataLearningRoadmap";
import H2 from "../../../ui/H2";
import H3 from "../../../ui/H3";
import Section from "../../../ui/Section";
import Progres from "../../../ui/Progres";
import HeaderSection from "../components/HeaderSection";
import StageItems from "./components/StageItems";
import TopBar from "../../../ui/TopBar";
function LearningRoadmap() {
  const { overallProgress, stages } = dataLearningRoadmap;

  const { estimatedTime, label, percentage } = overallProgress;
  return (
    <Section>
      <div className="flex flex-col gap-7">
        {/* Top bar Lg */}
        <TopBar placeholder="cari peran, keahlian, atau industri" />
        {/* Header Section */}
        <div>
          <HeaderSection
            title="Senior Machine Learning Engineer"
            description="Jalur Karir Tujuan"
            icon="fa-solid fa-briefcase pr-2"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {/* overallProgress */}
          <div className="col-span-1 flex flex-col gap-3 rounded-2xl bg-white p-7 lg:col-span-2 lg:max-h-36">
            <div className="flex justify-between">
              <H2 type="secondry">{label}</H2>
              <p>{percentage}%</p>
            </div>
            <Progres progressPercentage={percentage} />
            <p className="text-end">Perkiran Waktu: {estimatedTime}</p>
          </div>

          {/* Ai sugestion */}
          <div className="col-span-1 hidden space-y-3 rounded-2xl bg-white p-7 lg:block">
            <div className="flex gap-3">
              <p>
                <i class="fa-solid fa-user-cog"></i>
              </p>
              <p>Ai Suggestion</p>
            </div>
            <p>
              Berdasarkan tren pasar, fokus pada MLOps saat ini akan
              meningkatkan tingkat kecocokan profil Anda sebesar 22% untuk peran
              senior.
            </p>
            <button className="text-start font-semibold text-blue-700">
              Sesuaikan Garis Waktu <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Staged */}
        <div className="ml-7">
          {stages.map((stage) => (
            <StageItems
              stepLabel={stage.stepLabel}
              badge={stage.badge}
              title={stage.title}
              description={stage.description}
              isLocked={stage.isLocked}
              status={stage.status}
              progres={stage?.progress}
              id={stage.id}
              key={stage.id}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default LearningRoadmap;
