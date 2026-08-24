import React from "react";
import Logo from "../../../ui/Logo";
import H3 from "../../../ui/H3";
import Text from "../../../ui/Text";
import dataCourse from "./dataCourse";
import SideBarMenuItems from "./SideBarMenuItems";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function SidebarMenu({
  humberger,
  onHumberger,
  steps,
  titleCourse,
}) {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const { data, selectedCourses } = useSelector(
    (state) => state.learningRoadmap,
  );

  

  const currentCourse =
    selectedCourses?.find(
      (item) => String(item.course_id) === String(courseId),
    ) || selectedCourses?.[0];

  const { statusCourse = "", steps: stepsCourse = [] } = currentCourse || {};

  const stepsComplated = stepsCourse.reduce((acc, item) => {
    return item.status === "completed" ? acc + 1 : acc;
  }, 0);

  const progressPercentage =
    stepsCourse.length > 0
      ? Math.round((stepsComplated / stepsCourse.length) * 100)
      : 0;

  return (
    <div className="lghidden">
      <AnimatePresence>
        {humberger && (
          <>
            {/* 1. BACKDROP ANIMASI (Fade In & Fade Out) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onHumberger}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* 2. SIDEBAR ANIMASI (Slide In & Slide Out dari Kiri) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 h-full w-80 overflow-y-auto bg-white p-4 font-sans text-slate-800 shadow-xl sm:w-96 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
            >
              {/* Header Sidebar & Close Button */}
              <div className="flex items-center justify-between">
                <Logo type="small" />
                <button
                  onClick={onHumberger}
                  aria-label="Close menu"
                  className="flex flex-col gap-1.5 p-1 focus:outline-none"
                >
                  <span
                    className={`inline-block h-1 w-6 bg-black transition-all duration-300 ${
                      humberger ? "translate-y-2.5 rotate-45" : ""
                    }`}
                  ></span>
                  <span
                    className={`inline-block h-1 w-6 bg-black transition-all duration-300 ${
                      humberger ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`inline-block h-1 w-6 bg-black transition-all duration-300 ${
                      humberger ? "-translate-y-2.5 -rotate-45" : ""
                    }`}
                  ></span>
                </button>
              </div>

              <hr className="my-6 border-slate-200" />

              {/* --- SECTION: MAIN MENU --- */}
              <div className="my-6">
                <H3 className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase">
                  <span className="uppercase">Main Menu</span>
                </H3>
                <button className="mt-3 flex w-full items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-white shadow-md transition-all hover:bg-blue-700">
                  <i className="fa-solid fa-graduation-cap text-xl"></i>
                  <span
                    className="z-50 text-base font-semibold"
                    onClick={() => navigate("/courses")}
                  >
                    Courses
                  </span>
                </button>
              </div>

              {/* Divider / Garis Pemisah */}
              <hr className="my-6 border-slate-200" />

              {/* --- SECTION: COURSE CONTENT --- */}
              <div>
                {/* Header Section */}
                <div className="mb-6 flex items-center justify-between">
                  <H3>
                    <span className="uppercase">Course Content</span>
                  </H3>
                  <Text>
                    <span className="inline-block w-24 truncate rounded-full bg-blue-50 px-3 py-1 text-center text-xs font-semibold text-blue-600 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
                      {progressPercentage}%
                    </span>
                  </Text>
                </div>

                {steps.map((step) => (
                  <SideBarMenuItems
                    key={step.id || step.title}
                    status={step.status}
                    title={step.title}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
