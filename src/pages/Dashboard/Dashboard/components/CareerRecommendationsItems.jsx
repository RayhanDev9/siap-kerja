const themeVariants = {
  blue: {
    text: "text-blue-600",
    bg: "bg-blue-50", // Jika Anda butuh background pudar untuk icon
    iconText: "text-blue-500",
  },
  indigo: {
    text: "text-indigo-600",
    bg: "bg-indigo-50",
    iconText: "text-indigo-500",
  },
  emerald: {
    text: "text-emerald-600",
    bg: "bg-emerald-50",
    iconText: "text-emerald-500",
  },
 purple: {
    text: "text-purple-600",
    bg: "bg-purple-50",
    iconText: "text-purple-500",
  },
  // Anda bisa tambahkan warna lain di sini untuk berjaga-jaga
  default: {
    text: "text-gray-600",
    bg: "bg-gray-50",
    iconText: "text-gray-500",
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

  console.info(currentTheme);
  return (
    <div className="w-96 shrink-0 space-y-5 rounded-2xl bg-white p-6">
      <div className="flex justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
          <i
            className={`${icon} text-xl ${currentTheme.bg} ${currentTheme.text}`}
          ></i>
        </div>

        <div
          className={`flex items-center justify-center rounded-2xl bg-${themeColor}-100 p-2`}
        >
          <p>{` ${matchPercentage}% Match `} </p>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default CareerRecommendationsItems;
