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

function Register() {
  const navigate = useNavigate();

  // 1. Perbaikan nilai awal (kosongkan string untuk form register)
  const [inputName, setInputName] = useState("");
  const [textErrorInputName, setTextErrorInputName] = useState("");

  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  // 2. Fungsi validasi disatukan di sini
  function handleSubmit() {
    // Jalankan semua validasi secara bersamaan
    const nameError = validateName(inputName);
    const emailError = validateEmail(inputEmail);
    const passwordError = validatePassword(inputPassword);

    // Set state error untuk menampilkan UI pesan merah (jika ada)
    setTextErrorInputName(nameError);
    setTextErrorInputEmail(emailError);
    setTextErrorInputPassword(passwordError);

    // 3. Pastikan KETIGANYA tidak memiliki error sebelum navigasi
    if (nameError === "" && emailError === "" && passwordError === "") {
      navigate("/login");
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
            {/* Input Name */}
            <InputName
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            {textErrorInputName && (
              <p className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                {textErrorInputName}
              </p>
            )}

            {/* Input Email */}
            <Email
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            {textErrorInputEmail && (
              <p className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                {textErrorInputEmail}
              </p>
            )}

            {/* Input Password */}
            <Password
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            {textErrorInputPassword && (
              <p className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                {textErrorInputPassword}
              </p>
            )}

            {/* Tombol Submit */}
            <button
              className="my-8 inline-block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-4"
              onClick={handleSubmit}
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
