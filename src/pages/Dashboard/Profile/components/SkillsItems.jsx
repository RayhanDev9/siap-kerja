import Text from "../../../../ui/Text";

function SkillsItems({ skill }) {
  return <Text className="inline-block rounded-md bg-white p-2 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">{skill}</Text>;
}

export default SkillsItems;
