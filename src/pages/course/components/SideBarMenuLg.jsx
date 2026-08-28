import { useState } from "react";
import H3 from "../../../ui/H3";
import Text from "../../../ui/Text";
import SideBarLgItems from "./SideBarLgItems";
import { motion, AnimatePresence } from "framer-motion";
import FooterCourse from "./FooterCourse";
import { cardVariants } from "../../../util/animations";
import { useParams, useNavigate } from "react-router"; 
import { useSelector } from "react-redux";

function SideBarMenuLg({
  onNextStep,
  onPrevStep,
  disabledNext,
  disabledPrev,
  onFinishCourse,
  isUpdating,
}) {
  const [dropDownCourse, setDropDownCourse] = useState(false);
  const { courseId } = useParams();
  const navigate = useNavigate(); 

  const { countStep } = useSelector((state) => state.course);
  const { data, selectedCourses } = useSelector(
    (state) => state.learningRoadmap,
  );
  
  const courseIndex = selectedCourses.findIndex(
    (item) => String(item.course_id) === String(courseId),
  );

  const currentCourse =
    selectedCourses?.find(
      (item) => String(item.course_id) === String(courseId),
    ) || selectedCourses?.[0];

  const {
    titleCourse = "",
    steps = [],
  } = currentCourse || {};

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
            
            {/* --- SECTION: MAIN MENU --- */}
            <div className="my-0 px-7">
              <motion.div variants={cardVariants}>
                <H3 className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase">
                  <span className="">Main Menu</span>
                </H3>
              </motion.div>
              <motion.div variants={cardVariants}>
                <button 
                  onClick={() => navigate("/courses")}
                  className="mt-3 flex w-full items-center gap-3 rounded-xl border-2 border-blue-600 bg-transparent px-4 py-2.5 text-blue-600 transition-all hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 hover:dark:bg-blue-900/20"
                >
                  <i className="fa-solid fa-arrow-left text-lg"></i>
                  <span className="text-base font-semibold md:text-2xl lg:text-xl">
                    Daftar Course
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
                  <span className="truncate">Course Content</span>
                </H3>
                <div className="mt-[7.8px]">
                  <Text>
                    <span className="inline-block w-28 truncate rounded-full bg-slate-300 px-3 py-1 text-base font-semibold text-blue-600 md:text-lg dark:bg-black dark:text-blue-500">
                      {progressPercentage}% completed
                    </span>
                  </Text>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={cardVariants}>
              {/* Moudul header */}
              <div
                className="border-y border-slate-200 px-7 py-3 dark:border dark:border-white/25 hover:dark:border-white/35 cursor-pointer"
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
            isUpdating={isUpdating}
          />
        </div>
      </div>
    </>
  );
}

export default SideBarMenuLg;