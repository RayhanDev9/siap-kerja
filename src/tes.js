async function tes() {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(
      // `${import.meta.env.VITE_API_BASE_URL}/ai/dashboard`
      // `${import.meta.env.VITE_API_BASE_URL}/ai/skill-gap`
      // `${import.meta.env.VITE_API_BASE_URL}/ai/roadmap`
      // `${import.meta.env.VITE_API_BASE_URL}/ai/analytics`
      // `${import.meta.env.VITE_API_BASE_URL}/careers`
      // `${import.meta.env.VITE_API_BASE_URL}/market-trends`
      // `${import.meta.env.VITE_API_BASE_URL}/saved-careers`
      // `${import.meta.env.VITE_API_BASE_URL}/settings`
      `${import.meta.env.VITE_API_BASE_URL}/profile`
      // `${import.meta.env.VITE_API_BASE_URL}/auth/google/redirect`
      // `${import.meta.env.VITE_API_BASE_URL}/auth/google/callback`
      // `${import.meta.env.VITE_API_BASE_URL}/onboarding`
      // `${import.meta.env.VITE_API_BASE_URL}/logout`
      ,

      {
        method: "GET",
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
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
