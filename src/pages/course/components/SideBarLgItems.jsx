import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function SideBarLgItems({ status, title }) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress" || status === "in progres";
  const isLocked = status === "locked";
  console.info(status);

  return (
    <>
      {/* Timeline Container */}
      <div className="relative border-b border-slate-300 px-7 py-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        {/* ITEM TIMELINE (Berdasarkan prop status) */}
        <div className="relative flex items-center gap-3">
          {/* --- 1. STATUS COMPLETED --- */}
          {isCompleted && (
            <div variants={cardVariants} className="flex w-full items-center gap-5 rounded-2xl p-3.5">
              <div className="z-10 shrink-0 text-2xl text-green-700 dark:text-green-500">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-base font-semibold text-slate-400 line-through decoration-slate-400 md:text-lg lg:text-xl dark:text-white">
                  <span className="inline-block w-48 truncate">{title}</span>
                </p>
                <p className="md:text-base lg:text-lg dark:text-white/80">
                  <span className="mt-1.5 block text-xs font-semibold text-green-600 sm:text-sm lg:text-base">
                    Completed
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* --- 2. STATUS IN PROGRESS --- */}
          {isInProgress && (
            <div variants={cardVariants} className="flex w-full items-center gap-5 rounded-2xl bg-slate-100 p-3.5 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
              <div className="z-10 shrink-0 text-2xl text-blue-600">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-base font-semibold text-slate-400 line-through decoration-slate-400 md:text-lg lg:text-xl dark:text-white">
                  <span className="inline-block w-48 truncate">{title}</span>
                </p>
                <Text>
                  <span className="mt-1.5 block text-xs font-bold text-blue-600 sm:text-sm lg:text-base">
                    In Progres
                  </span>
                </Text>
              </div>
            </div>
          )}

          {/* --- 3. STATUS LOCKED --- */}
          {isLocked && (
            <div className="flex w-full items-center gap-5 rounded-2xl p-3.5">
              <div className="z-10 shrink-0 text-2xl text-slate-400">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-base font-semibold text-slate-400 line-through decoration-slate-400 md:text-lg lg:text-xl dark:text-white">
                  <span className="inline-block w-48 truncate">{title}</span>
                </p>
                <Text>
                  <span className="mt-1.5 block text-xs font-semibold text-slate-400 sm:text-sm lg:text-base">
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

export default SideBarLgItems;
