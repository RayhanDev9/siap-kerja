import H2 from "../../../../ui/H2";
import SkillsItem from "./SkillsItem";

function JobListingsItems({
  title,
  company,
  badge,
  matchPercentage,
  skills,
  salary,
  linkText,
}) {
  console.info(skills);
  const badgeStyles = {
    primary: "bg-purple-800 text-purple-800", // Sesuaikan warnanya
    warning: "bg-orange-300 text-orange-800",
    success: "bg-green-800 text-green-800",
    default: "bg-gray-800 text-gray-800",
  };

  // 2. Ambil style sesuai tipe, jika tidak ada gunakan default
  const currentStyle = badgeStyles[badge.type] || badgeStyles.default;

  return (
    <div className="w-[90%] rounded-2xl bg-white px-3 pt-7 pb-5">
      <div className="border-b border-slate-300 pb-5">
        <div className="flex flex-col gap-1">
          {/* Header */}
          <H2 type="secondaryBold"> {title}</H2>
          <p className="text-xl">
            <i className="fa-solid fa-building pr-2 text-gray-500"></i>
            {company}
          </p>

          <div className="flex flex-col gap-2">
            {/* Kecocokan profile */}
            <div className="flex justify-between">
              <p className="capitalize">kecocokan profile</p>
              <p className={`${currentStyle} bg-white`}>{matchPercentage}%</p>
            </div>

            {/* progres */}
            <div className="h-2.5 w-full rounded-full bg-purple-100">
              <div
                className={`h-2.5 rounded-full ${currentStyle}`}
                style={{ width: `${matchPercentage}%` }}
              ></div>
            </div>

            {/* Skill  */}
            <div className="flex flex-wrap gap-2">
              {skills.map((item) => (
                <SkillsItem skill={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Pay */}
      <div className="flex justify-between pt-5">
        <h3 className="text-lg font-semibold">{salary}</h3>
        <p className="text-blue-700">{linkText}</p>
      </div>
    </div>
  );
}

export default JobListingsItems;
