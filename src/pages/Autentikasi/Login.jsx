import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import Button from "../../ui/Button";
function Login() {
  return (
    <>
      <section className="mx-auto my-10 w-[90%] rounded-2xl p-8 shadow-md">
        {/* Google and apple*/}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-[100%] rounded-2xl bg-white px-2 py-3">
            <div className="flex justify-center gap-2">
              <img src={google} alt="goggle" className="h-5 w-5" />
              <span className="inline-block font-semibold">
                Lanjutkan dengan Google
              </span>
            </div>
          </div>
          <div className="w-[100%] rounded-2xl bg-white px-2 py-3">
            <div className="flex justify-center gap-2">
              <img src={apple} alt="apple" className="h-5 w-5" />
              <span className="inline-block font-semibold">
                Lanjutkan dengan Apple
              </span>
            </div>
          </div>
          <p>Atau dengan email</p>
        </div>
        {/* Gmail */}
        <div className="mt-6 flex flex-col justify-center gap-6">
          <label htmlFor="email" className="-mb-4 ml-0.5">
            Alamat email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="nama@gmail.com"
              className="w-[100%] rounded-2xl bg-white px-2 py-3 pl-10 ring-1 ring-blue-500 outline-none"
            />
            <i className="fa-regular fa-envelope absolute top-4 left-3 text-xl"></i>
          </div>
          <label htmlFor="password" className="-mb-4 ml-0.5">
            Kata Sandi
          </label>
          <div className="relative">
            <i className="fa-solid fa-lock absolute top-1/2 left-3 -translate-y-1/2 text-xl text-gray-400"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-[100%] rounded-2xl bg-white px-10 py-3 ring-1 ring-blue-500 outline-none"
            />
            <i className="fa-regular fa-eye-slash absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-xl text-gray-400 hover:text-gray-600"></i>
          </div>
          <p className="text-primary text-right font-semibold">
            Lupa kata sandi
          </p>
        </div>
        <Button type="login">Masuk</Button>
      </section>
      <p className="text-md mb-10 text-center">
        Belom punya akun ?{" "}
        <span className="text-primary inline-block"> Daftar Sekarang</span>
      </p>
    </>
  );
}

export default Login;
