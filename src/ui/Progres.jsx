function Progres({ progressPercentage, thame = "bg-purple-500" }) {
  const result = thame.slice(0, thame.lastIndexOf("-"));
  const thameDefault = result + "-100";
  return (
    <div className={`h-2.5 w-full rounded-full ${thameDefault}`}>
      <div
        className={`h-2.5 rounded-full ${thame}`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default Progres;
