export const errorMiddleware = (api) => (next) => (action) => {
  // Cek apakah action ini adalah hasil yang gagal (rejected dari API)
  if (action.type && action.type.endsWith("/rejected")) {
    // Cari indikasi 401 termasuk pesan bawaan Laravel
    const is401 =
      action.payload?.status === 401 ||
      action.payload?.statusCode === 401 ||
      action.error?.message?.includes("401") ||
      action.payload?.message === "Unauthenticated."; // 👈 Tambahkan baris ini

    if (is401) {
      console.warn("Mendeteksi 401 Unauthorized. Mengalihkan ke login...");

      // Hapus data sesi
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Paksa pindah halaman
      window.location.href = "/#/login";
    }
  }

  return next(action);
};
