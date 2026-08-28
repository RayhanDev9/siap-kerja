import { useNavigate } from "react-router";
import Button from "../../../../ui/Button";
import Text from "../../../../ui/Text";

function PrioritySkillsGapItems({ title, subtitle, id }) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between rounded-2xl bg-blue-50 p-3 dark:bg-black">
      <div className="text-lg">
        <h3 className="font-semibold">{title}</h3>
        <Text>{subtitle}</Text>
      </div>{" "}
      <div className="flex flex-col items-center self-center">
        <button onClick={() => navigate(`/course/${id}`)}>
          <i className="fa-solid fa-circle-arrow-right block text-3xl text-blue-700 lg:text-4xl dark:text-blue-500"></i>
        </button>
      </div>
    </div>
  );
}

export default PrioritySkillsGapItems;
