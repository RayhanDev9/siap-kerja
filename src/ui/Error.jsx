import { div } from "framer-motion/client";
import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  // Menangkap pesan error asli dari React Router
  const errorMessage =
    error?.data ||
    error?.message ||
    "Waduh! Halaman yang Anda cari tidak dapat ditemukan atau mungkin telah dipindahkan.";

  // Menentukan apakah ini error 404 atau error tipe lain
  const is404 = error?.status === 404;

  // return <div>Error</div>;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] p-4">
      {/* Efek Blur/Glow di belakang kartu */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>

      {/* Kontainer Kartu Utama */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-8 px-6 py-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12">
        {/* Bagian Ilustrasi */}
        <div className="relative mt-4 mb-10 flex items-center justify-center">
          <div className="absolute h-32 w-32 rotate-12 rounded-3xl bg-[#EEF2FF]"></div>
          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl shadow-blue-900/5">
            <span className="-rotate-12 text-5xl font-extrabold text-[#0D6EFD]">
              {is404 ? "404" : "Oops"}
            </span>
          </div>
        </div>

        {/* Bagian Teks Dinamis */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {is404 ? "Halaman Tidak Ditemukan" : "Terjadi Kesalahan 😢"}
          </h1>

          {/* Menampilkan pesan error dari useRouteError() */}
          <p className="text-sm leading-relaxed font-medium text-slate-500 sm:text-base">
            {errorMessage}
          </p>
        </div>

        {/* Bagian Tombol */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {/* Menggantikan fitur <LinkButton to="-1"> milikmu */}
          <button
            onClick={() => navigate(-1)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D6EFD] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Kembali
          </button>

          {/* Tombol alternatif langsung ke beranda/dashboard */}
          <button
            onClick={() => navigate("/")}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-100 bg-white px-6 py-3.5 text-sm font-semibold text-[#0D6EFD] transition-all hover:bg-slate-50 active:scale-95"
          >
            <i className="fa-solid fa-house"></i>
            Ke Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;

// buatkan issue.md yang berisi perencanaan untuk nanti
// di implementasikan oleh junior programmer atau ai
// model yang lebih murah.

// Isi dari planning nya adalah sebagai berikut :

// Buatkan unit test untuk somua API yang tersedia

// simpan di folder tests, menggunakan bun test

// setiap skenario, hapus datanya terlebih dahulu agar
// konsisten

// buat skenario test per API selengkap mungkin

// Jangan buatkan terlalu detail instruksi unit
// testnya. Buatkan saja skenario apa yang harus di
// test, biarkan manti yang implementasi detail
// skenario nya adalah junior programmer atau model
// yang lebih murah
