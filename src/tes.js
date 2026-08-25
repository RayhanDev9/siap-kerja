async function tes() {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(
      // Pilih endpoint yang ingin dites di bawah ini:
      // `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
      // `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      // `${import.meta.env.VITE_API_BASE_URL}/auth/me`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/profile`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/dashboard`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/skill-gap`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/analytics`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/roadmap`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/jobs`,
      `${import.meta.env.VITE_API_BASE_URL}/user/market-trends`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/jobs`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/profile`,
      // `${import.meta.env.VITE_API_BASE_URL}/user/onboarding`,
      {
        method: "GET",
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      },
    );

    const data = await res.json();
    console.log("✅ BENTUK ASLI RESPONSE :", data);
  } catch (error) {
    console.error("❌ Gagal mengambil API:", error);
  }
  return;
}

export default tes;
