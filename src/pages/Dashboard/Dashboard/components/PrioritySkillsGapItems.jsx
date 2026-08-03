import Button from "../../../../ui/Button";
import Text from "../../../../ui/Text";

function PrioritySkillsGapItems({ title, subtitle }) {
  return (
    <div className="flex w-full justify-between rounded-2xl bg-blue-50 p-3">
      <div className="text-lg">
        <h3 className="font-semibold">{title}</h3>
        <Text>{subtitle}</Text>
      </div>{" "}
      <div className="flex flex-col items-center self-center ">
        <Button to="/skillGap">
          <i className="fa-solid fa-circle-arrow-right block  text-3xl text-blue-600 lg:text-4xl"></i>
        </Button>
      </div>
    </div>
  );
}

export default PrioritySkillsGapItems;
