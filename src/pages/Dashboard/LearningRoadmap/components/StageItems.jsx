import H2 from "../../../../ui/H2";
import Progres from "../../../../ui/Progres";
import Button from "../../../../ui/Button";

function StageItems({
  stepLabel,
  badge,
  title,
  description,
  isLocked,
  status,
  progres,
  id,
}) {
  return (
    <div
      className={`${id === 1 ? "" : "pt-7"} relative border-l border-slate-400 pl-14`}
    >
      {/* icon map absolute */}
      <div
        className={`absolute top-0 -left-[31px] z-40 rounded-full p-4 ${status === "locked" ? "bg-slate-200 " : status === "completed" ? "bg-green-200" : "bg-blue-200"}`}
      >
        <i
          className={`${status === "locked" ? "fa-solid fa-lock text-4xl text-slate-500" : status === "completed" ? "fa-solid fa-circle-check text-4xl text-green-800" : "fa-solid fa-circle-play text-4xl text-blue-800"}`}
        ></i>
      </div>

      {/* Countetn */}
      <div
        className={`flex flex-col gap-3 rounded-2xl bg-white p-7 ${badge === "SEDANG BERLANGSUNG" ? "border border-slate-400 bg-white shadow-xl" : "bg-white/70 shadow-md"} `}
      >
        {/* badge and status */}
        <div className="flex justify-between">
          <p
            className={`${status === "locked" ? " bg-slate-200 " : status === "completed" ? " bg-green-200 text-green-800" : " bg-blue-200 text-blue-800"} rounded-2xl px-3.5 py-1 font-medium`}
          >
            {status}
          </p>
          <p> {stepLabel}</p>
        </div>
        {/* title */}
        <H2 type="secondry">{title}</H2>
        <p>{description}</p>
        {progres && <Progres progressPercentage={progres} />}
        {badge === "SEDANG BERLANGSUNG" && (
          <Button type="generalPrimary">
            Lanjutkan
            <i className="fa-solid fa-arrow-right pl-2"></i>
          </Button>
        )}
      </div>
    </div>
  );
}

export default StageItems;

// {
//   id: 1,
//   stepLabel: "Tahap 1",
//   badge: "SELESAI",
//   title: "Dasar Jaringan Saraf Tiruan",
//   description: "Pemahaman mendasar tentang perceptron, aktivasi, dan...",
//   isLocked: false,
//   status: "completed",
// },
