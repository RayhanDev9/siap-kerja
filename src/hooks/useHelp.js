import { useState } from "react";

export const useHelp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitBugReport = async (formDataPayload) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        " https://spotted-stoke-flattered.ngrok-free.dev/api/v1/bug-report",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            // Catatan penting: JANGAN set Content-Type secara manual kalau pakai FormData.
            // Browser bakal otomatis ngeset jadi multipart/form-data beserta boundary-nya.
          },
          body: formDataPayload,
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Gagal mengirim laporan ke server");
      }

      return { success: true, data: result.data };
    } catch (error) {
      console.error("Error submit bug:", error);
      return { success: false, message: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitBugReport, isLoading };
};
