import axios from 'axios';

// 1. Ambil Base URL dari README Backend
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // URL Backend Laravel kamu
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// 2. Buat Interceptor (Otomatis menyisipkan Token ke setiap request)
apiClient.interceptors.request.use(
  (config) => {
    // Ambil token dari localStorage yang disimpan saat login
    const token = localStorage.getItem('access_token'); 
    
    if (token) {
      // Sesuai instruksi README: Authorization: Bearer <TOKEN_ANDA>
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;