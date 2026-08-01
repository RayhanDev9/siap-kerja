import { useState } from "react";
import Button from "../../ui/Button";
import { validateEmail, validatePassword } from "../../util/helpers";
import AuthHeader from "./components/AuthHeader";
import Email from "./components/Email";
import Password from "./components/Password";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("rayhan@gmail.com");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [textErrorInputPassword, setTextErrorInputPassword] = useState("");

  function handleValidationEmail() {
    const message = validateEmail(inputEmail);
    setTextErrorInputEmail(message);
  }

  function handleValidationPassword() {
    const message = validatePassword(inputPassword);
    setTextErrorInputPassword(message);
  }

  function handleNavigasi() {
    if (!textErrorInputEmail && !textErrorInputPassword) navigate("/");
  }

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
        {/* Kanan: Area Form Login */}
        <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md flex-col rounded-2xl bg-white p-7">
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
              {/* Ganti Button di bawah ini jika komponen <Button> milikmu butuh custom class agar full width */}
              {/* Tombol Submit */}
              <button
                className="w-ful my-8 inline-block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-4"
                onClick={() => {
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
    </>
  );
}

export default Login;

//  {/* old */}
//       {/* <section className="mx-auto my-10 w-[90%] rounded-2xl p-8 shadow-md">
//         {/* Google and apple*/}
//       <div className="flex flex-col items-center justify-center gap-6">
//         <div className="w-[100%] rounded-2xl bg-white px-2 py-3">
//           <div className="flex justify-center gap-2">
//             <img src={google} alt="goggle" className="h-5 w-5" />
//             <span className="inline-block font-semibold">
//               Lanjutkan dengan Google
//             </span>
//           </div>
//         </div>
//         <div className="w-[100%] rounded-2xl bg-white px-2 py-3">
//           <div className="flex justify-center gap-2">
//             <img src={apple} alt="apple" className="h-5 w-5" />
//             <span className="inline-block font-semibold">
//               Lanjutkan dengan Apple
//             </span>
//           </div>
//         </div>
//         <p>Atau dengan email</p>
//       </div>
//       {/* Gmail */}
//       <div className="mt-6 flex flex-col justify-center gap-6">
//         <label htmlFor="email" className="-mb-4 ml-0.5">
//           Alamat email
//         </label>
//         <div className="relative">
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="nama@gmail.com"
//             className="w-[100%] rounded-2xl bg-white px-2 py-3 pl-10 ring-1 ring-blue-500 outline-none"
//           />
//           <i className="fa-regular fa-envelope absolute top-4 left-3 text-xl"></i>
//         </div>
//         <label htmlFor="password" className="-mb-4 ml-0.5">
//           Kata Sandi
//         </label>
//         <div className="relative">
//           <i className="fa-solid fa-lock absolute top-1/2 left-3 -translate-y-1/2 text-xl text-gray-400"></i>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="*****"
//             className="w-[100%] rounded-2xl bg-white px-10 py-3 ring-1 ring-blue-500 outline-none"
//           />
//           <i className="fa-regular fa-eye-slash absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-xl text-gray-400 hover:text-gray-600"></i>
//         </div>
//         <p className="text-primary text-right font-semibold">Lupa kata sandi</p>
//       </div>
//       <Button type="login">Masuk</Button>
//       {/* </section>
//       <p className="text-md mb-10 text-center">
//         Belom punya akun ?{" "}
//         <span className="text-primary inline-block"> Daftar Sekarang</span>
//       </p> */}
