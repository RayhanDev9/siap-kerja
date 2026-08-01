import { getDate } from "../../../../util/helpers";

const dashboardData = {
  // 1. Data Pengguna
  user: {
    firstName: "Halo,Alex",
    currentDate: getDate(),
  },

  // 2. Kesiapan Karier (Grafik Melingkar)
  careerReadiness: {
    scoreData: [
      { name: "Skor", value: 78 },
      { name: "Sisa", value: 22 },
    ],
    progressMessage: "Kesiapan kamu meningkat 5 poin minggu ini!",
  },

  // 3. Kartu Metrik (Highlight Cards)
  metrics: {
    aiReadiness: {
      grade: "A-",
      description: "Top 15%",
      icon: "fa-solid fa-user-gear",
    },
    learningStreak: {
      days: 12,
      label: "Hari",
      icon: "fa-fire-flame-curved",
    },
  },

  // 4. Celah Keterampilan (Bisa di-map menggunakan array)
  prioritySkills: [
    {
      id: 1,
      title: "Machine Learning",
      subtitle: "Fundamental & Applied",
      icon: "fa-solid fa-brain", // Contoh nama icon FontAwesome
    },
    {
      id: 2,
      title: "Cloud Architecture",
      subtitle: "AWS / GCP Basics",
      icon: "fa-solid fa-cloud",
    },
  ],

  // 5. Rekomendasi Karier (Bisa di-map menggunakan array)
  careerRecommendations: [
    {
      id: 101,
      role: "Product Manager",
      matchPercentage: 92,
      description: "Berdasarkan kemampuan analitis dan komunikasi Anda.",
      themeColor: "purple", // Untuk menentukan warna border/icon di Tailwind
      icon: "fa-solid fa-briefcase ",
    },
    {
      id: 102,
      role: "Solutions Architect",
      matchPercentage: 88, // Nilai asumsi
      description:
        "Cocok dengan kemampuan teknis Anda pada infrastruktur cloud.",
      themeColor: "blue",
      icon: "fa-solid fa-compass-drafting",
    },
    {
      id: 103,
      role: "Frontend Developer",
      matchPercentage: 92, // Nilai asumsi
      description:
        "Sangat pas dengan fokus Anda dalam membangun antarmuka web interaktif menggunakan ekosistem JavaScript.",
      themeColor: "indigo",
      icon: "fa-solid fa-laptop-code",
    },
    {
      id: 104,
      role: "Software Engineer",
      matchPercentage: 85, // Nilai asumsi
      description:
        "Sejalan dengan pemahaman kuat Anda pada logika komputasi dan pengembangan aplikasi terstruktur.",
      themeColor: "emerald",
      icon: "fa-solid fa-server",
    },
  ],
};
export default dashboardData;
