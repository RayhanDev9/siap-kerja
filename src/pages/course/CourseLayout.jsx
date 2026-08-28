import { Outlet, useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import HeaderCourse from "./components/HeaderCourse";
import FooterCourse from "./components/FooterCourse";
import SideBarMenuLg from "./components/SideBarMenuLg";
import Empty from "./components/Empty";
import { containerVariants } from "../../util/animations.js";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../features/dashboard/profileSlice.js";
import {
  fetchLearningRoadmap,
  selectCategoryCareer,
  selectedPathName,
  selectPathCourses,
  updateCourseDirectStatus,
  updateCourseStatus,
} from "../../features/dashboard/learningRoadmapSlice.js";
import {
  countStep as incrementStep,
  resetStep,
} from "../../features/course/courseSlice.js";
import Loader from "../../ui/Loader.jsx";

function CourseLayout() {
  const [humberger, setHumberger] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  
  const { courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { countStep } = useSelector((state) => state.course);

  const { data, selectedCourses } = useSelector(
    (state) => state.learningRoadmap,
  );
  const { data: dataProfile } = useSelector((state) => state.profile);

  // 1. FETCH DATA AWAL
  useEffect(() => {
    if (!dataProfile) {
      dispatch(fetchProfile());
    }
    if (!data) {
      dispatch(fetchLearningRoadmap());
    }
  }, [dispatch, dataProfile, data]);

  // 2. SINKRONISASI / FILTER DATA
  useEffect(() => {
    if (dataProfile && data) {
      const { category_slug, target_role_slug } = dataProfile;

      dispatch(selectCategoryCareer(category_slug));
      dispatch(selectedPathName(target_role_slug));
      dispatch(selectPathCourses(target_role_slug));
    }
  }, [dispatch, dataProfile, data]);

  const currentCourse =
    selectedCourses?.find(
      (item) => String(item.course_id) === String(courseId),
    ) || selectedCourses?.[0];

  const stepsList = currentCourse?.steps || [];
  const currentStep = stepsList[countStep] || stepsList[0];

  const disabledPrev = countStep <= 0;
  const disabledNext = countStep >= stepsList.length - 1;

  // Set step aktif menjadi in_progress jika masih locked
  useEffect(() => {
    const step = currentCourse?.steps?.[countStep];
    if (step?.id && step.status === "locked") {
      dispatch(updateCourseStatus({ stepId: step.id, status: "in_progress" }));
    }
  }, [countStep, currentCourse, dispatch]);

  function handleHumberger() {
    setHumberger((prev) => !prev);
  }

  async function handleNextStep(value) {
    const steps = currentCourse?.steps || [];
    const stepNow = steps[countStep];

    if (!currentCourse || !stepNow) return;

    setIsUpdating(true);
    try {
      // 1. Step saat ini diselesaikan
      await dispatch(
        updateCourseStatus({
          stepId: stepNow.id || stepNow.step,
          status: "completed",
        }),
      ).unwrap();

      // 2. Step berikutnya dibuka jika masih locked
      const nextStep = steps[countStep + 1];
      if (nextStep && nextStep.status === "locked") {
        await dispatch(
          updateCourseStatus({
            stepId: nextStep.id || nextStep.step,
            status: "in_progress",
          }),
        ).unwrap();
      }

      // 3. Update status course jika locked
      if (currentCourse.status === "locked") {
        await dispatch(
          updateCourseDirectStatus({
            courseId: currentCourse.course_id,
            status: "in_progress",
          }),
        ).unwrap();
      }

      // 4. Geser index langkah ke depan
      if (countStep + value < steps.length && countStep + value >= 0) {
        dispatch(incrementStep(value));
      }
    } catch (error) {
      console.error("Gagal update status:", error);
    } finally {
      setIsUpdating(false);
    }
  }

  function handlePrevStep(value) {
    if (countStep + value >= 0 && countStep + value < stepsList.length) {
      dispatch(incrementStep(value));
    }
  }

  const handleToggleComplete = async () => {
    if (!currentCourse || !currentStep) return;
    setIsUpdating(true);
    try {
      await dispatch(
        updateCourseStatus({
          stepId: currentStep.id || currentStep.step,
          status: "completed",
        }),
      ).unwrap();
    } catch (error) {
       console.error(error);
    } finally {
       setIsUpdating(false);
    }
  };

  async function handleFinishCourse() {
    if (!currentCourse || !currentStep) return;

    setIsUpdating(true);
    try {
      // Selesaikan step terakhir
      await dispatch(
        updateCourseStatus({
          stepId: currentStep.id || currentStep.step,
          status: "completed",
        }),
      ).unwrap();

      // Set status course menjadi completed
      await dispatch(
        updateCourseDirectStatus({
          courseId: currentCourse.course_id,
          status: "completed",
        }),
      ).unwrap();

      dispatch(resetStep());
      navigate("/courses");
    } catch (error) {
      console.error("Gagal menyelesaikan course:", error);
    } finally {
      setIsUpdating(false);
    }
  }

  const contextValue = {
    humberger,
    handleHumberger,
    currentCourse,
    currentStep,
    handleToggleComplete,
  };

  if (
    !dataProfile ||
    !data ||
    !selectedCourses ||
    selectedCourses.length === 0
  ) {
    return <Loader />;
  }

  return (
    <>
      <HeaderCourse humberger={humberger} onHumberger={handleHumberger} />
      <main>
        <motion.div
          key={location.pathname}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:grid lg:grid-cols-[150px_1fr_420px]"
        >
          <Empty />
          <Outlet context={contextValue} />
          <SideBarMenuLg
            currentCourse={currentCourse}
            currentStep={currentStep}
            onToggleComplete={handleToggleComplete}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            disabledNext={disabledNext}
            disabledPrev={disabledPrev}
            onFinishCourse={handleFinishCourse}
            isUpdating={isUpdating}
          />
        </motion.div>
      </main>

      <footer className="lg:hidden">
        <FooterCourse
          currentStep={currentStep}
          onToggleComplete={handleToggleComplete}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          disabledNext={disabledNext}
          onFinishCourse={handleFinishCourse}
          disabledPrev={disabledPrev}
          isUpdating={isUpdating}
        />
      </footer>
    </>
  );
}

export default CourseLayout;