import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AuthSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 1. Ambil parameter 'token' dari URL
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      // 2. Simpan token ke localStorage
      localStorage.setItem("token", token);

      // 3. Arahkan user ke halaman utama/dashboard
      navigate("/dashboard");
    } else {
      // Jika gagal, kembalikan ke halaman login
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Sedang memproses login...</p>
    </div>
  );
}

export default AuthSuccess;
