import { useState } from "react";
import { useNavigate } from "react-router";
import { validateEmail, validatePassword } from "../../util/helpers";
import AuthHeader from "./components/AuthHeader";
import Email from "./../../ui/Email";
import Password from "../../ui/Password";
import Text from "../../ui/Text";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  function handleSubmit() {
    const emailError = validateEmail(inputEmail);
    const passwordError = validatePassword(inputPassword);

    setTextErrorInputEmail(emailError);
    setTextErrorInputPassword(passwordError);

    if (emailError === "" && passwordError === "") {
      // PERBAIKAN: Posisi tutup kurung dispatch diubah
      dispatch(
        loginUser({
          email: inputEmail,
          password: inputPassword,
        }),
      ) // <-- Tutup kurung dispatch di sini!
        .unwrap()
        .then(() => {
          navigate("/onboardingPage1");
        })
        .catch((err) => {
          // PERBAIKAN: Typo .cath menjadi .catch
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
            {/* Kotak Error dari Backend */}
            {error && (
              <div className="rounded-xl bg-red-100 p-3 text-sm text-red-700">
                {typeof error === "string"
                  ? error
                  : error?.message || "Email atau password salah."}{" "}
                {/* PERBAIKAN: Teks disesuaikan */}
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

            {/* Tombol Submit */}
            <button
              className="my-4 inline-block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 md:px-6 md:py-4"
              onClick={handleSubmit}
              disabled={isLoading} // PERBAIKAN: Tombol mati saat loading
            >
              {isLoading ? "Sedang Masuk..." : "Mulai Sekarang"}{" "}
              {/* PERBAIKAN: Teks berubah */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
