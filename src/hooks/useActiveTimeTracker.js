import { useEffect, useRef } from "react";

export function useActiveTimeTracker() {
  const timerRef = useRef(null);

  useEffect(() => {
    const sendOnlineTime = async () => {
      // Hanya kirim jika user sedang melihat tab (tidak diminimize / buka tab lain)
      if (document.visibilityState !== "visible") return;

      const token = localStorage.getItem("token"); // Ambil auth token
      if (!token) return;

      try {
        await fetch(
          " https://spotted-stoke-flattered.ngrok-free.dev/api/v1/analytics/time",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ minutes: 1 }), // Tambah 1 menit
          },
        );
      } catch (error) {
        console.error("Gagal memperbarui waktu aktif:", error);
      }
    };

    // Jalankan timer setiap 60.000 ms (1 menit)
    timerRef.current = setInterval(sendOnlineTime, 60000);

    // Cleanup interval saat komponen unmount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
}
