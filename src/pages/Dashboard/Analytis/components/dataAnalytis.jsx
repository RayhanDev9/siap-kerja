const dataAnalytis = {
  careerAnalytics: {
    title: "Analitik Karir",
    subtitle: "Perkembangan Anda minggu ini.",
  },
  summaryCards: {
    views: {
      value: 342,
      label: "Dilihat",
      trend: {
        value: 12,
        isPositive: true,
        text: "~ 12%",
      },
    },
    applications: {
      value: 18,
      label: "Lamaran",
      timeframe: "Minggu ini",
    },
    courses: {
      value: 5,
      label: "Kursus",
      description: "Diselesaikan bulan ini",
    },
  },
  profileEngagement: {
    title: "Keterlibatan Profil",
    subtitle: "Interaksi 7 hari terakhir",
    actionLabel: "Detail",
    chartData: [
      { name: "Sen", fullName: "Senin", value: 30 },
      { name: "Sel", fullName: "Selasa", value: 50 },
      { name: "Rab", fullName: "Rabu", value: 80 },
      { name: "Kam", fullName: "Kamis", value: 82 },
      { name: "Jum", fullName: "Jumat", value: 40 },
      { name: "Sab", fullName: "Sabtu", value: 60 },
    ],
  },
  skillDevelopment: {
    title: "Pengembangan Keahlian",
    skills: [
      {
        name: "Data Analysis (Python)",
        progressPercentage: 75,
      },
      {
        name: "UI/UX Research",
        progressPercentage: 40,
      },
    ],
    buttonLabel: "Lihat Semua Keahlian",
  },
  bottomNavigation: [
    { id: "dashboard", label: "Dashboard", isActive: false },
    { id: "explorer", label: "Explorer", isActive: false },
    { id: "profile", label: "Profile", isActive: true },
    { id: "roadmap", label: "Roadmap", isActive: false },
  ],
};

export default dataAnalytis;
