import { useNavigate } from "react-router";
import Logo from "../../../ui/Logo";
import { containerVariants, cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function Header() {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={cardVariants}
      className="relative border-b border-slate-300 bg-white p-7 text-center md:hidden"
    >
      <div className="inline-block">
        <Logo type="small" />
      </div>
      <button onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left absolute top-1/2 left-4 -translate-y-1/2 text-xl text-blue-800 sm:text-2xl"></i>
      </button>
    </motion.div>
  );
}

export default Header;
