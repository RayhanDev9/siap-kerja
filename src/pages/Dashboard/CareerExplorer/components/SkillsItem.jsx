import Text from "../../../../ui/Text";

function SkillsItem({ skill }) {
  console.info(skill);
  return (
    <Text className="inline-block rounded-2xl bg-blue-50 p-1">{skill}</Text>
  );
}

export default SkillsItem;
