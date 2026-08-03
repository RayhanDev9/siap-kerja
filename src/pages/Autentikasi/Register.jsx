import AuthHeader from "./components/AuthHeader";
import { useState } from "react";
import Password from "../../ui/Password";
import Email from "./../../ui/Email";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../util/helpers";
import { useNavigate } from "react-router";
import InputName from "../../ui/InputName";
import Text from "../../ui/Text";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";

function Register() {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState("");
  const [textErrorInputName, setTextErrorInputName] = useState("");

  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  // Mengambil state dari Redux
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
          password_confirmation: inputPassword,
        }),
      )
        .unwrap() // <--- PERBAIKAN PENTING: Tunggu hasil API
        .then(() => {
          // Jika sukses, baru pindah halaman
          navigate("/login");
        })
        .catch((err) => {
          // Jika gagal (email sudah ada, dll), tidak usah pindah halaman.
          // State 'error' dari Redux otomatis akan terisi dan muncul di layar.
          console.error("Gagal mendaftar:", err);
        });
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
      <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
        <div className="flex w-full max-w-md flex-col rounded-2xl bg-white p-7">
          <AuthHeader
            title="Buat Akun Baru"
            description="Daftar untuk memulai perjalanan karier Anda."
            isActive="register"
            dividerText="Atau daftar dengan email"
          />

          <div className="flex flex-col gap-5">
            {/* TAMBAHAN: Kotak Error dari Backend (API Laravel) */}
            {error && (
              <div className="rounded-xl bg-red-100 p-3 text-sm text-red-700">
                {typeof error === "string"
                  ? error
                  : "Terjadi kesalahan pada server. Atau Email sudah digunakan"}
              </div>
            )}

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

            {/* Tombol Submit Diperbaiki */}
            <button
              className="my-8 inline-block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 md:px-6 md:py-4"
              onClick={handleSubmit}
              disabled={isLoading} // Tombol mati saat loading
            >
              {/* Teks berubah saat loading */}
              {isLoading ? "Memproses..." : "Mulai Sekarang"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
