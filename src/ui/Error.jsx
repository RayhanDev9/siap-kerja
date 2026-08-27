import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  const status = error?.status || error?.statusCode || 500;
  const is404 = status === 404;
  const is401 = status === 401;

  // Tangani auto-redirect jika token kadaluarsa / unauthorized
  useEffect(() => {
    if (is401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [is401, navigate]);

  // Helper parsing error agar tidak me-render Object langsung ke JSX
  const formatErrorMessage = () => {
    if (is401) {
      return "Sesi Anda telah berakhir. Mengalihkan ke halaman login...";
    }
    if (is404) {
      return "Halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.";
    }

    const rawError = error?.data || error?.message || error;

    if (typeof rawError === "string") {
      return rawError;
    }

    if (typeof rawError === "object" && rawError !== null) {
      if (rawError.message) return rawError.message;
      if (rawError.errors) {
        return Object.values(rawError.errors).flat().join(", ");
      }
      try {
        return JSON.stringify(rawError);
      } catch {
        return "Terjadi kesalahan internal pada sistem.";
      }
    }

    return "Terjadi kesalahan yang tidak terduga. Silakan coba beberapa saat lagi.";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] p-4">
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-8 px-6 py-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12">
        <div className="relative mt-4 mb-10 flex items-center justify-center">
          <div className="absolute h-32 w-32 rotate-12 rounded-3xl bg-[#EEF2FF]"></div>
          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl shadow-blue-900/5">
            <span className="-rotate-12 text-4xl font-extrabold text-[#0D6EFD]">
              {is404 ? "404" : is401 ? "401" : "Oops"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {is404
              ? "Halaman Tidak Ditemukan"
              : is401
                ? "Akses Tidak Diizinkan"
                : "Terjadi Kesalahan"}
          </h1>

          <p className="text-sm leading-relaxed font-medium text-slate-500 sm:text-base">
            {formatErrorMessage()}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {is401 ? (
            <button
              onClick={() => navigate("/login", { replace: true })}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D6EFD] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              Login Sekarang
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate(-1)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D6EFD] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
              >
                <i className="fa-solid fa-arrow-left"></i>
                Kembali
              </button>

              <button
                onClick={() => navigate("/")}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-100 bg-white px-6 py-3.5 text-sm font-semibold text-[#0D6EFD] transition-all hover:bg-slate-50 active:scale-95"
              >
                <i className="fa-solid fa-house"></i>
                Ke Dashboard
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Error;
