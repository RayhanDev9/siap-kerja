import Progres from "../../../ui/Progres";

function ProgresOnboarding({ progresOnboarding }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <p>Step {progresOnboarding + 1} of 4</p>
        <p>{progresOnboarding * 25}%</p>
      </div>
      <Progres
        progressPercentage={progresOnboarding * 25}
        thame="bg-indigo-600"
      />
    </div>
  );
}

export default ProgresOnboarding;
