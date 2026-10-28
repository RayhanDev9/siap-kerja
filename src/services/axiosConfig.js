import axios from "axios";

// 1. Ambil Base URL dari README Backend
const apiClient = axios.create({
  baseURL: " https://spotted-stoke-flattered.ngrok-free.dev/api", // URL Backend Laravel kamu
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// 2. Buat Interceptor (Otomatis menyisipkan Token ke setiap request)
apiClient.interceptors.request.use(
  (config) => {
    // Ambil token dari localStorage yang disimpan saat login
    const token = localStorage.getItem("token") || localStorage.getItem("access_token");

    if (token) {
      // Sesuai instruksi README: Authorization: Bearer <TOKEN_ANDA>
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 3. Response Interceptor (Menangani token expired / 401 Unauthorized secara global)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Axios 401 Unauthorized. Membersihkan sesi & mengalihkan ke login...");
      localStorage.removeItem("token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");

      if (window.location.hash !== "#/login") {
        window.location.hash = "#/login";
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
