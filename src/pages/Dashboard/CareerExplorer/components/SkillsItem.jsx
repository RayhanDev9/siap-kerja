import Text from "../../../../ui/Text";

function SkillsItem({ skill }) {
  return (
    <Text className="inline-block rounded-2xl bg-blue-50 py-1 px-2 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
      {skill}
    </Text>
  );
}

export default SkillsItem;
