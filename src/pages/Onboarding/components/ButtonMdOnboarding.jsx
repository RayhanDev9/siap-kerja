import { useNavigate } from "react-router";
import Button from "../../../ui/Button";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function ButtonMdOnboarding({ button1, button2, to = "", onFinish }) {
  const navigate = useNavigate();
  return (
    <motion.div variants={cardVariants} className="justify-between rounded-2xl shadow-2xl  bg-white p-7 text-center flex  dark:bg-neutral-900 hover:dark:border-white/35">
      <div className="inline-block">
        <Button  type="generalSecondary" onClick={() => navigate(-1)}>
          {button1}
        </Button>
      </div>
      <div className="inline-block">
        <Button type="generalPrimary" onClick={onFinish} to={onFinish ? "" : to} >
          {button2}
        </Button>
      </div>
    </motion.div>
  );
}

export default ButtonMdOnboarding;
