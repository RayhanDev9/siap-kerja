function Progres({ progressPercentage, thame = "bg-purple-500" }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-purple-100">
      <div
        className={`h-2.5 rounded-full ${thame}`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default Progres;
