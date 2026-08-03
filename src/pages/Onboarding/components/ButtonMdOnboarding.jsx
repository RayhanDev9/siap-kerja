import { useNavigate } from "react-router";
import Button from "../../../ui/Button";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function ButtonMdOnboarding({ button1, button2, to = "", onFinish }) {
  const navigate = useNavigate();
  console.info(to);
  return (
    <motion.div variants={cardVariants} className="hidden justify-between bg-white p-7 text-center md:flex">
      <div className="inline-block">
        <Button type="secondary" onClick={() => navigate(-1)}>
          {button1}
        </Button>
      </div>
      <div className="inline-block">
        <Button type="generalPrimary" to={to} onClick={onFinish}>
          {button2}
        </Button>
      </div>
    </motion.div>
  );
}

export default ButtonMdOnboarding;
