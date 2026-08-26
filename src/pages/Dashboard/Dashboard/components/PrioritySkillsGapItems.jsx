import { useNavigate } from "react-router";
import Button from "../../../../ui/Button";
import Text from "../../../../ui/Text";

function PrioritySkillsGapItems({ title, subtitle }) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between rounded-2xl bg-blue-50 dark:bg-black p-3">
      <div className="text-lg">
        <h3 className="font-semibold">{title}</h3>
        <Text>{subtitle}</Text>
      </div>{" "}
      <div className="flex flex-col items-center self-center ">
        <button onClick={() => navigate("/courses")}>
          <i className="fa-solid fa-circle-arrow-right block  text-3xl text-blue-700 dark:text-blue-500   lg:text-4xl"></i>
        </button>
      </div>
    </div>
  );
}

export default PrioritySkillsGapItems;
