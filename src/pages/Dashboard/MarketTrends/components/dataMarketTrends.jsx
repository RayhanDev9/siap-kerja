const dataMarketTrends = {
  jobGrowth: {
    title: "Pertumbuhan Pekerjaan",
    period: "Q3 2023 vs Q3 2024",
    trend: {
      text: "+15%",
      isPositive: true,
    },
    chartData: [
      { name: "IT Support", value: 30 },
      { name: "", value: 50 },
      { name: "Data", value: 70 },
      { name: "", value: 90 },
      { name: "AI/ML", value: 110 },
    ],
  },
  topSkills: {
    title: "Keahlian Paling Dicari",
    items: [
      {
        rank: "#1",
        name: "AI & Machine Learning",
        description: "Permintaan naik tinggi",
        icon: "fa-solid fa-microchip ",
        thame: "purple",
      },
      {
        rank: "#2",
        name: "Cloud Architecture",
        description: "AWS, GCP, Azure",
        icon: "fa-solid fa-cloud ",
        thame: "blue",
      },
    ],
  },
  salaryAnalysis: {
    title: "Analisis Gaji",
    items: [
      {
        role: "AI Engineer",
        salaryRange: "Rp 25M - 45M",
        description: "Rata-rata per bulan",
        progressPercentage: 85,
      },
    ],
  },
};

export default dataMarketTrends;
