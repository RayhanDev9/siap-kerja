import Section from "../../ui/Section";
import dataCourse from "./components/dataCourse";
import ContentItems from "./components/ContentItems";
import HeaderCourse from "./components/HeaderCourse";
import FooterCourse from "./components/FooterCourse";
import SidebarMenu from "./components/SidebarMenu";
import { data, useOutletContext, useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  fetchLearningRoadmap,
  selectCategoryCareer,
  selectedPathName,
  selectPathCourses,
} from "../../features/dashboard/learningRoadmapSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../ui/Loader";
import { fetchProfile } from "../../features/dashboard/profileSlice";
function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { humberger, handleHumberger } = useOutletContext();
  const { countStep } = useSelector((state) => state.course);

  const { data, selectedCourses } = useSelector(
    (state) => state.learningRoadmap,
  );
  const { data: dataProfile } = useSelector((state) => state.profile);

  const currentCourse =
    selectedCourses.find(
      (item) => String(item.course_id) === String(courseId),
    ) || selectedCourses[0];

  const courseIndex = selectedCourses.findIndex(
    (item) => String(item.course_id) === String(courseId),
  );

  const { titleCourse, statusCourse, steps } = currentCourse;

  // Defensive check for steps[countStep]
  const currentStep = steps[countStep] || {};
  const {
    title: titleStep,
    status: statusStep,
    description,
    content,
  } = currentStep;

  return (
    <>
      <div className="min-h-screen bg-white xl:p-7 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
        <SidebarMenu
          humberger={humberger}
          onHumberger={handleHumberger}
          steps={steps}
          titleCourse={titleCourse}
        />

        <Section>
          <div className=" ">
            {
              <ContentItems
                titleStep={`Courses ${courseIndex + 1} : ${titleStep}`}
                statusStep={statusStep}
                description={description}
                content={content}
              />
            }
          </div>
        </Section>
      </div>
    </>
  );
}

export default Course;
