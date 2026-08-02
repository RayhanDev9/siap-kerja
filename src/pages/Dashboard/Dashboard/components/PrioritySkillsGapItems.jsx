import Text from "../../../../ui/Text";

function PrioritySkillsGapItems({ title, subtitle }) {
  return (
    <div className="flex w-full justify-between rounded-2xl bg-blue-50 p-3">
      <div className="text-lg">
        <h3 className="font-semibold">{title}</h3>
        <Text>{subtitle}</Text>
      </div>
      <button>
        <i className="fa-solid fa-circle-arrow-right text-3xl lg:text-4xl text-blue-600"></i>
      </button>
    </div>
  );
}

export default PrioritySkillsGapItems;
