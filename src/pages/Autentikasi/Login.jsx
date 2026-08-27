import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { validateEmail, validatePassword } from "../../util/helpers";
import AuthHeader from "./components/AuthHeader";
import Email from "./../../ui/Email";
import Password from "../../ui/Password";
import Text from "../../ui/Text";
import { cardVariants } from "../../util/animations";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import Loader from "../../ui/Loader";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  // 1. KEMBALIKAN LOADER: Biar kalau loading nyangkut, layarnya nggak putih kosong
  if (isLoading) {
    return <Loader />;
  }

  // 2. FUNGSI AMAN: Memastikan error dari Redux jadi teks biasa, bukan objek yang bikin crash
  const getErrorMessage = (err) => {
    if (typeof err === "string") return err;
    if (err?.message && typeof err.message === "string") return err.message;
    if (err?.data?.message) return err.data.message;
    return "Email atau password salah.";
  };

  function handleSubmit() {
    const emailError = validateEmail(inputEmail);
    const passwordError = validatePassword(inputPassword);

    setTextErrorInputEmail(emailError);
    setTextErrorInputPassword(passwordError);
    
    if (emailError === "" && passwordError === "") {
      dispatch(
        loginUser({
          email: inputEmail,
          password: inputPassword,
        }),
      )
        .unwrap()
        .then(() => {
          navigate("/onboardingPage1");
        })
        .catch((err) => {
          console.error("Gagal login:", err);
        });
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
      <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
        <div className="flex w-full max-w-md flex-col rounded-2xl bg-white p-7">
          <AuthHeader
            title="Selamat Datang Kembali"
            description="Masuk untuk melanjutkan perjalanan karier Anda."
            isActive="login"
            dividerText="Atau lanjutkan dengan email"
          />

          <div className="mt-5 flex flex-col gap-5">
            {/* Kotak Error Anti-Crash */}
            {error && (
              <div className="rounded-xl bg-red-100 p-3 text-sm text-red-700">
                <div className="flex items-center gap-2 font-semibold">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  Gagal Masuk
                </div>
                <p className="mt-1">{getErrorMessage(error)}</p>
              </div>
            )}

            {/* Input Email */}
            <div>
              <Email
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              {textErrorInputEmail && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputEmail}
                </Text>
              )}
            </div>

            {/* Input Password */}
            <div>
              <Password
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              {textErrorInputPassword && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputPassword}
                </Text>
              )}
            </div>

            <motion.div variants={cardVariants}>
              {/* Tombol Submit */}
              <button
                className="my-4 inline-block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 md:px-6 md:py-4"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Mulai Sekarang
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;