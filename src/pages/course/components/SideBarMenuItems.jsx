import Text from "../../../ui/Text";

function SideBarMenuItems({ status, title }) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress" || status === "in progres";
  const isLocked = status === "locked";
  console.info(status);

  return (
    <>
      {/* Timeline Container */}
      <div className="relative pb-6 pl-3 last:pb-0">
        {/* Garis Vertikal Timeline (Dibuat full top-0 bottom-0 agar menyambung tanpa terputus) */}
        <div className="absolute top-0 bottom-0 left-[15px] w-[2px] bg-slate-200" />

        {/* ITEM TIMELINE (Berdasarkan prop status) */}
        <div className="relative flex items-start gap-3">
          {/* Dot Timeline Left */}
          <span
            className={`absolute left-[0.25px] h-2 w-2 rounded-full ring-4 ring-white dark:ring-white/80 ${
              isInProgress
                ? "top-6 bg-blue-500"
                : isLocked
                  ? "top-1.5 bg-slate-300"
                  : "top-1.5 bg-green-600"
            }`}
          />

          {/* --- 1. STATUS COMPLETED --- */}
          {isCompleted && (
            <div className="ml-5 flex flex-1 items-start gap-3">
              <div className="z-10 shrink-0 text-green-600">
                <i className="fa-solid fa-circle-check text-lg"></i>
              </div>
              <div className="flex-1 overflow-hidden">
                <Text className="text-sm font-semibold text-slate-400 line-through decoration-slate-400">
                  <span className="inline-block w-48 truncate">{title}</span>
                </Text>
                <Text>
                  <span className="mt-0.5 block text-xs font-semibold text-green-600 sm:text-sm lg:text-base">
                    Completed
                  </span>
                </Text>
              </div>
            </div>
          )}

          {/* --- 2. STATUS IN PROGRESS --- */}
          {isInProgress && (
            <div className="z-10 ml-5 flex-1 overflow-hidden rounded-2xl border-l-4 border-blue-600 bg-slate-100 p-3.5 shadow-sm  dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-book-open mt-1 shrink-0 text-base text-blue-600"></i>
                <div>
                  <Text className="text-sm leading-snug font-bold text-slate-800">
                    <span className="inline-block w-48 truncate">{title}</span>
                  </Text>
                  <Text>
                    <span className="mt-1.5 block text-xs font-bold text-blue-600 sm:text-sm lg:text-base">
                      In Progres
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          )}

          {/* --- 3. STATUS LOCKED --- */}
          {isLocked && (
            <div className="ml-5 flex flex-1 items-start gap-3">
              <div className="z-10 shrink-0 text-slate-400">
                <i className="fa-solid fa-lock text-base"></i>
              </div>
              <div className="flex-1 overflow-hidden">
                <Text className="text-sm font-semibold text-slate-400">
                  <span className="inline-block w-48 truncate">{title}</span>
                </Text>
                <Text>
                  <span className="mt-0.5 block text-xs font-semibold text-slate-400 sm:text-sm lg:text-base">
                    Locked
                  </span>
                </Text>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SideBarMenuItems;
