import { useState } from "react";
import { useNavigate } from "react-router"; // (Dipindah ke atas agar rapi)
import { validateEmail, validatePassword } from "../../util/helpers";
import AuthHeader from "./components/AuthHeader";
import Email from "./../../ui/Email";
import Password from "../../ui/Password";

function Login() {
  const navigate = useNavigate();

  // 1. Nilai awal dikosongkan
  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  // 2. Fungsi validasi disatukan (menghindari stale state)
  function handleSubmit() {
    const emailError = validateEmail(inputEmail);
    const passwordError = validatePassword(inputPassword);

    setTextErrorInputEmail(emailError);
    setTextErrorInputPassword(passwordError);

    // 3. Jika tidak ada error, lakukan navigasi ke halaman utama
    if (emailError === "" && passwordError === "") {
      navigate("/onboardingPage1");
    }
  }

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
        {/* Kanan: Area Form Login */}
        <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
          <div className="flex w-full max-w-md flex-col rounded-2xl bg-white p-7">
            {/* Auth Header */}
            <AuthHeader
              title="Selamat Datang Kembali"
              description="Masuk untuk melanjutkan perjalanan karier Anda."
              isActive="login"
              dividerText="Atau lanjutkan dengan email"
            />

            {/* Input Forms */}
            <div className="flex flex-col gap-5">
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
    </>
  );
}

export default Login;
