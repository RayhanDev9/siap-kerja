import H3 from "./../../../../ui/H3";
import Progres from "./../../../../ui/Progres";

function SalaryAnalysisItems({
  role,
  salaryRange,
  progressPercentage,
  description,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-7">
      <div className="flex justify-between">
        <H3>{role}</H3>
        <p className="text-lg font-bold text-blue-700">{salaryRange}</p>
      </div>
      <Progres progressPercentage={progressPercentage} />
      <p className="text-end">{description}</p>
    </div>
  );
}

export default SalaryAnalysisItems;
