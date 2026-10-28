import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { validateEmail, validatePassword } from "../../util/helpers";
import AuthHeader from "./components/AuthHeader";
import Email from "./../../ui/Email";
import Password from "../../ui/Password";
import Text from "../../ui/Text";
import { cardVariants } from "../../util/animations";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearAuthError } from "../../features/auth/authSlice";

function Login() {
  const { pathname } = useLocation(); // Digabung agar tidak deklarasi 2 kali

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  // Deteksi apakah error disebabkan oleh server mati/offline/koneksi putus
  const isServerOffline = (err) => {
    const msg = typeof err === "string" ? err : err?.message || "";
    return (
      msg.toLowerCase().includes("failed to fetch") ||
      msg.toLowerCase().includes("tidak dapat dijangkau") ||
      msg.toLowerCase().includes("offline") ||
      msg.toLowerCase().includes("network") ||
      msg.toLowerCase().includes("koneksi")
    );
  };

  // Pesan error yang ramah dan solutif bagi pengguna
  const getErrorMessage = (err) => {
    if (isServerOffline(err)) {
      return "Server sedang tidak dapat dijangkau (offline atau dalam pemeliharaan). Silakan periksa koneksi internet Anda atau coba beberapa saat lagi.";
    }
    if (typeof err === "string") return err;
    if (err?.message && typeof err.message === "string") return err.message;
    if (err?.data?.message) return err.data.message;
    return "Email atau password yang Anda masukkan salah.";
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
    <div key={pathname} className="flex min-h-screen w-full flex-col bg-white lg:flex-row dark:bg-neutral-900">
      <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
        <div className="flex w-full max-w-md flex-col rounded-2xl bg-white p-9 dark:border dark:border-white/25 dark:bg-neutral-900 dark:py-12 hover:dark:border-white/35">
          <AuthHeader
            title="Selamat Datang Kembali"
            description="Masuk untuk melanjutkan perjalanan karier Anda."
            isActive="login"
            dividerText="Atau lanjutkan dengan email"
          />

          <div className="mt-5 flex flex-col gap-5">
            {/* Kotak Error Ramah Pengguna & Deteksi Server Offline */}
            {error && (
              <div
                className={`rounded-xl border p-4 text-sm shadow-sm transition-all ${
                  isServerOffline(error)
                    ? "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200"
                    : "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
                }`}
              >
                <div className="flex items-center gap-2 font-semibold">
                  <i
                    className={`fa-solid ${
                      isServerOffline(error)
                        ? "fa-server text-amber-600 dark:text-amber-400"
                        : "fa-circle-exclamation text-red-600 dark:text-red-400"
                    }`}
                  ></i>
                  {isServerOffline(error)
                    ? "Server Tidak Dapat Dihubungi"
                    : "Gagal Masuk"}
                </div>
                <p className="mt-1 leading-relaxed">{getErrorMessage(error)}</p>
              </div>
            )}

            {/* Input Email */}
            <motion.div variants={cardVariants}>
              <Email
                value={inputEmail}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                  if (error) dispatch(clearAuthError());
                }}
              />
              {textErrorInputEmail && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputEmail}
                </Text>
              )}
            </motion.div>

            {/* Input Password */}
            <motion.div variants={cardVariants}>
              <Password
                value={inputPassword}
                onChange={(e) => {
                  setInputPassword(e.target.value);
                  if (error) dispatch(clearAuthError());
                }}
              />
              {textErrorInputPassword && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputPassword}
                </Text>
              )}
            </motion.div>

            <motion.div variants={cardVariants}>
              {/* Tombol Submit dengan Spinner Loading */}
              <button
                type="button"
                className="my-4 inline-flex items-center justify-center gap-2.5 w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 md:px-6 md:py-4 shadow-md shadow-blue-600/20 active:scale-[0.99]"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-circle-notch animate-spin text-base"></i>
                    <span>Memproses...</span>
                  </>
                ) : (
                  <span>Mulai Sekarang</span>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
