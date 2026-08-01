import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import Button from "../../ui/Button";
import AuthHeader from "./components/AuthHeader";
import { useState } from "react";
import Password from "./components/Password";
import Email from "./components/Email";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../util/helpers";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState("rayhan@gmail.com");
  const [textErrorInputName, setTextErrorInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("rayhan@gmail.com");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  function handleValidationName() {
    const message = validateName(inputName);
    setTextErrorInputName(message);
  }

  function handleValidationEmail() {
    const message = validateEmail(inputEmail);
    setTextErrorInputEmail(message);
  }

  function handleValidationPassword() {
    const message = validatePassword(inputPassword);
    setTextErrorInputPassword(message);
  }
  function handleNavigasi() {
    if (!textErrorInputName && !textErrorInputEmail && !textErrorInputPassword) navigate("/login");
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
      {/* Area Form Register */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
        <div className="flex w-full max-w-md flex-col rounded-2xl bg-white p-7">
          {/* Auth header */}
          <AuthHeader
            title="Buat Akun Baru"
            description="Daftar untuk memulai perjalanan karier Anda."
            isActive="register"
            dividerText="Atau daftar dengan email"
          />

          {/* Input Forms */}
          <div className="flex flex-col gap-5">
            {/* Input Nama Lengkap (Tambahan untuk Register) */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  required

                  placeholder="Masukkan nama lengkap"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-10 text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                {/* Asumsi menggunakan FontAwesome seperti di login */}
                <i className="fa-regular fa-user absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
              </div>
              {textErrorInputName && (
                <p className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputName}
                </p>
              )}
            </div>

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
              className="w-ful my-8 inline-block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-4"
              onClick={() => {
                handleValidationName();
                handleValidationEmail();
                handleValidationPassword();
                handleNavigasi();
              }}
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
