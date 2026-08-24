function Progres({
  progressPercentage,
  thame = "bg-blue-500",
  height = "h-2.5",
}) {
  const result = thame.slice(0, thame.lastIndexOf("-"));
  const thameDefault = result + "-100";
  return (
    <div className={`${height} w-full rounded-full ${thameDefault}`}>
      <div
        className={`${height} rounded-full ${thame}`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default Progres;
