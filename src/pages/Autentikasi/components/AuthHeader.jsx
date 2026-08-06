import React from "react";
import google from "../../../assets/google.svg";
import apple from "../../../assets/apple.svg";
import Button from "../../../ui/Button";
import { Link } from "react-router";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useSelector } from "react-redux";

const AuthHeader = ({ title, description, isActive, dividerText }) => {
  // Kondisi untuk teks tombol sosial berdasarkan state isActive
  const socialText = isActive === "login" ? "Masuk" : "Daftar";

  const { error } = useSelector((state) => state.auth);

  // Di komponen tombol Login React
  const handleLoginWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google/redirect`;
  };

  return (
    <>
      {/* Header Texts */}
      <motion.div variants={cardVariants} className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-3xl lg:text-3xl">
          {title}
        </h2>
        <Text className="mt-2 text-sm text-slate-500 sm:text-sm lg:text-lg">
          {description}
        </Text>
      </motion.div>

      {/* Toggle Masuk / Daftar */}
      <motion.div
        variants={cardVariants}
        className="mb-8 flex w-full rounded-full bg-slate-100 p-1"
      >
        <Link
          to={`/login`}
        
          className={`w-1/2 rounded-full py-2 text-center text-sm font-semibold transition-all duration-700 sm:text-sm lg:text-lg ${
            isActive === "login"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-slate-500 hover:text-gray-700"
          }`}
        >
          Masuk
        </Link>
        <Link
          to={`/register`}
          className={`w-1/2 rounded-full py-2 text-center text-sm font-semibold transition-all duration-700 sm:text-sm lg:text-lg ${
            isActive === "register"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-slate-500 hover:text-gray-700"
          }`}
        >
          Daftar
        </Link>
      </motion.div>

      {/* Social Logins (Google & Apple disejajarkan) */}
      <motion.div variants={cardVariants} className="mb-6 flex flex-col gap-3">
        <button
          onClick={handleLoginWithGoogle}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-slate-50 sm:text-sm lg:text-lg"
        >
          <img src={google} alt="google" className="h-5 w-5 sm:w-8 lg:w-20" />

          <span className="inline-block text-center">
            {socialText} dengan Google
          </span>
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-slate-50 sm:text-sm lg:text-lg">
          <img src={apple} alt="apple" className="h-5 w-5 sm:w-8 lg:w-20" />
          <span className="inline-block text-center">
            {socialText} dengan Apple
          </span>
        </button>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={cardVariants}
        className="mb-6 flex items-center gap-3"
      >
        <div className="h-px flex-1 bg-gray-200"></div>
        <span className="text-xs text-slate-400 sm:text-sm lg:text-base">
          {dividerText}
        </span>
        <div className="h-px flex-1 bg-gray-200"></div>
      </motion.div>
    </>
  );
};

export default AuthHeader;
