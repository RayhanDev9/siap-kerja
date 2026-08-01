import H2 from "./../../../../ui/H2";

function ExperienceItems({ role, company, period, description, isCurrent }) {
  return (
    <div
      className={`border-l border-slate-400 pb-7 ${isCurrent ? "" : ""} relative`}
    >
      <div
        className={`absolute top-0 -left-[8px] h-4 w-4 rounded-full ring-2 ring-white ring-offset-1 ${isCurrent ? "bg-blue-700" : "bg-slate-400"}`}
      ></div>
      <div className="ml-7 flex flex-col gap-3 rounded-2xl bg-white p-7">
        <H2 type="secondry"> {role}</H2>
        <p>
          {company} • {period}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ExperienceItems;
