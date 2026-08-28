import { useDispatch } from "react-redux";
import Button from "../../../ui/Button";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";

function FooterCourse({
  onNextStep,
  onPrevStep,
  disabledNext,
  disabledPrev,
  onFinishCourse,
  isUpdating,
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="fixed bottom-0 z-50 mt-7 flex w-full justify-between border-t border-slate-200 bg-white p-5 py-4 sm:px-10 md:px-20 lg:max-w-[420px] lg:bg-blue-50 lg:px-2 dark:border-t dark:border-t-white/25 dark:bg-neutral-900 hover:dark:border-t-white/35"
    >
      <div className="inline-block self-start">
        <Button
          type="generalSecondary"
          onClick={() => onPrevStep(-1)}
          disabled={disabledPrev || isUpdating}
        >
          Sebelumnya
        </Button>
      </div>
      
      {!disabledNext && (
        <div className="mt-[3px] inline-block self-end">
          <Button
            type="generalPrimary"
            dark="dark:bg-blue-600"
            onClick={() => onNextStep(1)}
            disabled={disabledNext || isUpdating}
          >
            {isUpdating ? (
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-circle-notch animate-spin"></i> Menyimpan...
              </span>
            ) : (
              "Selanjutnya"
            )}
          </Button>
        </div>
      )}

      {disabledNext && (
        <div className="mt-[3px] inline-block self-end">
          <Button
            type="generalPrimary"
            dark="dark:bg-blue-600"
            onClick={onFinishCourse}
            disabled={isUpdating}
          >
            {isUpdating ? (
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-circle-notch animate-spin"></i> Memproses...
              </span>
            ) : (
              "Selesai"
            )}
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export default FooterCourse;