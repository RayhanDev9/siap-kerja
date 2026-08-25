import { useState, useEffect } from "react";
import Button from "../../../../ui/Button";
import H3 from "../../../../ui/H3";
import Progres from "../../../../ui/Progres";
import StartRating from "../../../../ui/StartRating";
import { useNavigate } from "react-router";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { submitCourseRating } from "../../../../features/dashboard/learningRoadmapSlice";

const DEFAULT_IMAGE =
  "https://placehold.co/600x400/e2e8f0/64748b?text=No+Image+Available";

function CardCourse({ id, img, status, titleCourse, steps, rating }) {
  const [userRating, setUserRating] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const totalSteps = steps?.length || 0;
  const completedSteps =
    steps?.filter((step) => step.status === "completed").length || 0;

  const progressPercentage =
    totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  useEffect(() => {
    if (userRating) {
      dispatch(submitCourseRating({ courseId: id, rating: userRating }));
    }
  }, [userRating, id, dispatch]);

  return (
    <motion.div
      variants={cardVariants}
      className="flex max-w-2xs min-w-3xs flex-col overflow-hidden rounded-2xl bg-white shadow-sm dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-neutral-800">
        <img
          src={img || DEFAULT_IMAGE}
          alt={titleCourse}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_IMAGE;
          }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="flex flex-col gap-3">
          
          {/* 🚀 INI YANG DIBENERIN */}
          <StartRating
            maxRating={5}
            size={25}
            defaultRating={rating ? Math.round(rating) : 0}
            onSetMovieRating={setUserRating}
          />

          <H3 type="netural" className="line-clamp-2 min-h-[3rem] font-bold">
            {titleCourse}
          </H3>
        </div>

        <div className="pt-6">
          <div className="flex justify-between pb-2 text-sm">
            <span className="text-slate-500 dark:text-slate-400">Progres</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {progressPercentage}%
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <Progres
              thame="bg-blue-500"
              height="h-1.5"
              progressPercentage={progressPercentage}
            />
            <Button
              onClick={() => navigate(`/course/${id}`)}
              type="buttonCardLearning"
            >
              Lanjutkan
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardCourse;