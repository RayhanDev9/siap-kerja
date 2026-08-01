import React from "react";
import google from "../../../assets/google.svg";
import apple from "../../../assets/apple.svg";
import Button from "../../../ui/Button";
import { Link } from "react-router";

const AuthHeader = ({ title, description, isActive, dividerText }) => {
  // Kondisi untuk teks tombol sosial berdasarkan state isActive
  const socialText = isActive === "login" ? "Masuk" : "Daftar";

  return (
    <>
      {/* Header Texts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-3xl lg:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-slate-500 sm:text-sm lg:text-lg">
          {description}
        </p>
      </div>

      {/* Toggle Masuk / Daftar */}
      <div className="mb-8 flex w-full rounded-full bg-slate-100 p-1">
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
      </div>

      {/* Social Logins (Google & Apple disejajarkan) */}
      <div className="mb-6 flex flex-col gap-3 ">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-slate-50  sm:text-sm lg:text-lg">
          <img src={google} alt="google" className="h-5 w-5 sm:w-8 lg:w-20" />

          <span className="inline-block text-center">
            {socialText} dengan Google
          </span>
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-slate-50  sm:text-sm lg:text-lg">
          <img src={apple} alt="apple" className="h-5 w-5 sm:w-8 lg:w-20" />
          <span className="inline-block text-center">
            {socialText} dengan Apple
          </span>
        </button>
      </div>

      {/* Divider */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200"></div>
        <span className="text-xs sm:text-sm lg:text-base text-slate-400">{dividerText}</span>
        <div className="h-px flex-1 bg-gray-200"></div>
      </div>
    </>
  );
};

export default AuthHeader;
