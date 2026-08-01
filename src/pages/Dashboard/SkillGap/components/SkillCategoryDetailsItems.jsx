import H3 from "../../../../ui/H3";

function SkillCategoryDetailsItems({ status, name, statusType }) {
  const themeColor = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-orange-100 text-orange-700",
  };
  const defaultColor = "bg-slate-100 text-slate-700";
  const badgeColorClass = themeColor[statusType] || defaultColor;

  return (
    <div>
      <div className="flex justify-between border-t border-b-slate-300 py-3">
        <H3 fontThmae="font-medium">{name}</H3>
        <p className={`${badgeColorClass} self-center rounded-full px-2 py-1`}>
          {status}
        </p>
      </div>
    </div>
  );
}

export default SkillCategoryDetailsItems;
