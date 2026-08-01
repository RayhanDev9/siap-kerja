export const MarketDemandCardItems = ({ title, level, icon, bgClass, textClass }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border p-5 text-center ${bgClass}`}
    >
      <i className={`${icon} text-2xl ${textClass}`}></i>
      <div className="flex flex-col gap-0.5">
        <span className="text-base font-bold text-gray-900">
          {title}
        </span>
        <span className={`text-sm font-bold ${textClass}`}>
          {level}
        </span>
      </div>
    </div>
  );
};