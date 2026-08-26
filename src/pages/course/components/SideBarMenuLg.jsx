import { useState } from "react";
import H3 from "../../../ui/H3";
import Logo from "../../../ui/Logo";
import Text from "../../../ui/Text";
import dataCourse from "./dataCourse";
import SideBarLgItems from "./SideBarLgItems";
import { func } from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import FooterCourse from "./FooterCourse";
import { cardVariants } from "../../../util/animations";
import Theme from "../../../ui/Theme";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function SideBarMenuLg({
  onNextStep,
  onPrevStep,
  disabledNext,
  disabledPrev,
  onFinishCourse,
}) {
  const [dropDownCourse, setDropDownCourse] = useState(false);
  const { courseId } = useParams();
  const { countStep } = useSelector((state) => state.course);
  const { data, selectedCourses } = useSelector(
    (state) => state.learningRoadmap,
  );
  const { data: dataProfile } = useSelector((state) => state.profile);

  const courseIndex = selectedCourses.findIndex(
    (item) => String(item.course_id) === String(courseId),
  );

  const currentCourse =
    selectedCourses?.find(
      (item) => String(item.course_id) === String(courseId),
    ) || selectedCourses?.[0];

  const {
    titleCourse = "",
    statusCourse = "",
    steps = [],
  } = currentCourse || {};

  // Gunakan fallback object kosong agar tidak crash
  const activeStep = steps[countStep] || steps[0] || {};
  const {
    title: titleStep = "",
    status: statusStep = "",
    description = "",
    content = "",
  } = activeStep;

  const stepsComplated = steps.reduce((acc, item) => {
    return item.status === "completed" ? acc + 1 : acc;
  }, 0);

  const progressPercentage =
    steps.length > 0 ? Math.round((stepsComplated / steps.length) * 100) : 0;

  function handleDropDownCourse() {
    setDropDownCourse(() => !dropDownCourse);
  }

  return (
    <>
      <div className="relative hidden w-[420px] lg:block">
        <div className="col-span-1 min-h-screen bg-blue-50 py-3 pb-20 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
          <div className="z-50 h-full overflow-y-auto py-4 font-sans text-slate-800">
            {/* Header Sidebar & Close Button */}
            {/* <div className="flex justify-between gap-2.5 px-7">
              <Logo type={"small"} />
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="border-none outline-0"
                  fill="blue"

                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </div>
            </div>
            <hr className="my-6 border-slate-200" /> */}

            {/* --- SECTION: MAIN MENU --- */}
            <div className="my-0 px-7">
              <motion.div variants={cardVariants}>
                <H3 className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase">
                  <span className="">Main Menu</span>
                </H3>
              </motion.div>
              <motion.div variants={cardVariants}>
                <button className="mt-3 flex w-full items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-white shadow-md transition-all hover:bg-blue-700">
                  <i className="fa-solid fa-graduation-cap text-2xl"></i>
                  <span className="text-base font-semibold md:text-2xl lg:text-xl">
                    Roadmap
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Divider / Garis Pemisah */}
            <hr className="my-6 border-slate-200 dark:border dark:border-white/25 hover:dark:border-white/35" />

            {/* --- SECTION: COURSE CONTENT --- */}
            <motion.div variants={cardVariants}>
              {/* Header Section */}
              <div className="mb-6 flex items-center justify-between px-7">
                <H3 className="mb-3 text-xs font-bold tracking-wider uppercase">
                  <span className="">Course Content</span>
                </H3>
                <div className="mt-[7.8px]">
                  <Text>
                    <span className="inline-block w-36 truncate rounded-full bg-slate-300 px-3 py-1 text-base font-semibold text-blue-600 md:text-lg dark:bg-black dark:text-blue-500">
                      {progressPercentage}% completed
                    </span>
                  </Text>
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants}>
              {/* Moudul header */}
              <div
                className="border-y border-slate-200 px-7 py-3 dark:border dark:border-white/25 hover:dark:border-white/35"
                onClick={handleDropDownCourse}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold dark:text-white">
                    <span className="inline-block w-[300px] truncate dark:text-white">
                      Course {courseIndex + 1} : {titleCourse}
                    </span>
                  </h3>
                  <i
                    className={`fa-solid fa-angle-down self-center transition-all duration-200 dark:text-white ${dropDownCourse ? "rotate-180" : ""} `}
                  ></i>
                </div>
                <p className="dark:text-white">
                  {countStep + 1} of {steps.length} Steps
                </p>
              </div>
              {/* Steps Modul */}

              <AnimatePresence>
                {dropDownCourse && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-1 overflow-hidden"
                  >
                    {steps.map((step) => (
                      <SideBarLgItems
                        key={step.id || step.title}
                        status={step.status}
                        title={step.title}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto flex justify-center text-center">
          <FooterCourse
            onNextStep={onNextStep}
            onPrevStep={onPrevStep}
            disabledNext={disabledNext}
            disabledPrev={disabledPrev}
            onFinishCourse={onFinishCourse}
          />
        </div>
      </div>
    </>
  );
}

export default SideBarMenuLg;
