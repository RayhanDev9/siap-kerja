import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";

const themeVariants = {
  purple: {
    text: "text-purple-600",
    bg: "bg-purple-100",
    iconText: "text-purple-600",
  },
  cyan: {
    text: "text-cyan-600",
    bg: "bg-cyan-100",
    iconText: "text-cyan-600",
  },
  emerald: {
    text: "text-emerald-600",
    bg: "bg-emerald-100",
    iconText: "text-emerald-600",
  },
  pink: {
    text: "text-pink-600",
    bg: "bg-pink-100",
    iconText: "text-pink-600",
  },
  amber: {
    text: "text-amber-600",
    bg: "bg-amber-100",
    iconText: "text-amber-600",
  },
  blue: {
    text: "text-blue-600",
    bg: "bg-blue-100",
    iconText: "text-blue-600",
  },
  indigo: {
    text: "text-indigo-600",
    bg: "bg-indigo-100",
    iconText: "text-indigo-600",
  },
  default: {
    text: "text-purple-600",
    bg: "bg-purple-100",
    iconText: "text-purple-600",
  },
};

function CareerRecommendationsItems({
  role,
  matchPercentage,
  description,
  themeColor,
  icon,
}) {
  const currentTheme = themeVariants[themeColor] || themeVariants.default;

  return (
    <div className="w-96 shrink-0 space-y-5 rounded-2xl bg-white p-6 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
      <div className="flex justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 ">
          <i
            className={`${icon} text-xl sm:text-2xl lg:text-3xl ${currentTheme.bg} ${currentTheme.text}`}
          ></i>
        </div>

        <div
          className={`flex items-center justify-center rounded-2xl bg-${themeColor}-100 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 p-2`}
        >
          <Text>{` ${matchPercentage}% Match `} </Text>
        </div>
      </div>
      <div className="space-y-2">
        <H3 className="text-xl font-semibold">{role}</H3>
        <Text className="text-lg">{description}</Text>
      </div>
    </div>
  );
}

export default CareerRecommendationsItems;
