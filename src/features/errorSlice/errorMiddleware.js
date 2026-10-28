export const errorMiddleware = (api) => (next) => (action) => {
  // Cek apakah action ini adalah hasil yang gagal (rejected dari API)
  if (action.type && action.type.endsWith("/rejected")) {
    const is401 =
      action.payload?.status === 401 ||
      action.payload?.statusCode === 401 ||
      action.error?.message?.includes("401") ||
      action.payload === "Unauthenticated." ||
      (typeof action.payload === "string" &&
        (action.payload.toLowerCase().includes("unauthenticated") ||
          action.payload.toLowerCase().includes("sesi telah habis") ||
          action.payload.toLowerCase().includes("sesi kedaluwarsa") ||
          action.payload.toLowerCase().includes("unauthorized")));

    if (is401) {
      console.warn("Mendeteksi 401 Unauthorized / Token Kadaluarsa. Membersihkan sesi & mengalihkan ke login...");

      // Hapus data sesi
      localStorage.removeItem("token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");

      // Reset state auth di Redux
      api.dispatch({ type: "auth/forceLogout" });

      // Alihkan ke hash login yang kompatibel dengan local dev maupun GitHub Pages
      if (window.location.hash !== "#/login") {
        window.location.hash = "#/login";
      }
    }
  }

  return next(action);
};
