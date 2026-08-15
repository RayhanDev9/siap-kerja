import { useState } from "react";
import Button from "../../../../ui/Button";
import H3 from "../../../../ui/H3";
import Progres from "../../../../ui/Progres";
import StartRating from "../../../../ui/StartRating";
import H2 from "../../../../ui/H2";
import { useNavigate } from "react-router";
import { cardVariants } from "../../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function CardCourse() {
  const [userRating, setUserRating] = useState("");
  const navigate = useNavigate();

  return (
    <motion.div
      variants={cardVariants}
      className="flex max-w-2xs min-w-3xs flex-col overflow-hidden rounded-2xl bg-white dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="html"
        />
      </div>
      <div className="px-5 py-5">
        <div className="flex flex-col gap-3">
          <StartRating
            maxRating={5}
            size={25}
            onSetMovieRating={setUserRating}
          />
          <H3 type="netural">Javascript</H3>
        </div>

        <div className="pt-10">
          <div className="flex justify-between pb-3">
            <p>Progres</p>
            <p>12%</p>
          </div>
          <div className="flex flex-col gap-5">
            <Progres
              thame="bg-blue-500"
              height="h-1.5"
              progressPercentage="12"
            ></Progres>
            <Button
              onClick={() => navigate("/course")}
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
