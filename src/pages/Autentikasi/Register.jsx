import AuthHeader from "./components/AuthHeader";
import { useState } from "react";
import Password from "../../ui/Password";
import Email from "./../../ui/Email";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../util/helpers";
import { useLocation, useNavigate } from "react-router";
import InputName from "../../ui/InputName";
import Text from "../../ui/Text";
import { cardVariants } from "../../util/animations";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import Loader from "../../ui/Loader";

function Register() {
  const navigate = useNavigate();
  const { pathname } = useLocation(); // Digabung agar tidak deklarasi 2 kali


  const [inputName, setInputName] = useState("");
  const [textErrorInputName, setTextErrorInputName] = useState("");

  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  // Mengambil state dari Redux
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  

  if (isLoading) {
    return <Loader />;
  }

  // HAPUS: if (error) return <Error />; --> Ini yang bikin halaman putih/Oops!

  function handleSubmit() {
    // 1. Validasi Lokal
    const nameError = validateName(inputName);
    const emailError = validateEmail(inputEmail);
    const passwordError = validatePassword(inputPassword);

    setTextErrorInputName(nameError);
    setTextErrorInputEmail(emailError);
    setTextErrorInputPassword(passwordError);

    // 2. Jika validasi lokal lolos, jalankan API
    if (nameError === "" && emailError === "" && passwordError === "") {
      dispatch(
        registerUser({
          name: inputName,
          email: inputEmail,
          password: inputPassword,
        }),
      )
        .unwrap() // Tunggu hasil API
        .then(() => {
          // Jika sukses, baru pindah halaman
          navigate("/onboardingPage1", { replace: true });
        })
        .catch((err) => {
          // Jika gagal (email sudah ada, dll), tidak usah pindah halaman.
          console.error("Gagal mendaftar:", err);
        });
    }
  }

  return (
    <div
      key={pathname}
      className="flex min-h-screen w-full flex-col bg-white lg:flex-row dark:bg-neutral-900"
    >
      <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
        <div className="flex w-full max-w-md flex-col rounded-2xl p-9 dark:border dark:border-white/25 dark:bg-neutral-900 dark:py-12 hover:dark:border-white/35">
          <AuthHeader
            title="Buat Akun Baru"
            description="Daftar untuk memulai perjalanan karier Anda."
            isActive="register"
            dividerText="Atau daftar dengan email"
          />

          <div className="flex flex-col gap-5">
            {/* TAMBAHAN: Kotak Error dari Backend yang Rapi dan Aman */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 shadow-sm">
                <div className="flex items-center gap-2 font-semibold">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  Pendaftaran Gagal
                </div>
                <p className="mt-1">
                  {typeof error === "string"
                    ? error
                    : "Email sudah digunakan atau terjadi kesalahan sistem."}
                </p>
              </div>
            )}

            <motion.div variants={cardVariants}>
              {/* Input Name */}
              <InputName
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
              {textErrorInputName && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputName}
                </Text>
              )}
            </motion.div>

            <motion.div variants={cardVariants}>
              {/* Input Email */}
              <Email
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              {textErrorInputEmail && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputEmail}
                </Text>
              )}
            </motion.div>
            <motion.div variants={cardVariants}>
              {/* Input Password */}
              <Password
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              {textErrorInputPassword && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputPassword}
                </Text>
              )}
            </motion.div>

            {/* Tombol Submit */}
            <motion.div variants={cardVariants}>
              <button
                className="my-8 inline-block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 md:px-6 md:py-4"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Memproses..." : "Mulai Sekarang"}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
