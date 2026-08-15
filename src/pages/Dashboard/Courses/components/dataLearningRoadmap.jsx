const dataLearningRoadmap = {
  overallProgress: {
    label: "Progres Keseluruhan",
    percentage: 45,
    estimatedTime: "4 Bulan",
  },
  stages: [
    {
      id: 1,
      stepLabel: "Tahap 1",
      badge: "SELESAI",
      title: "Dasar Jaringan Saraf Tiruan",
      description: "Pemahaman mendasar tentang perceptron, aktivasi, dan...",
      isLocked: false,
      status: "completed",
    },
    {
      id: 2,
      stepLabel: "Tahap 2",
      badge: "SEDANG BERLANGSUNG",
      title: "Arsitektur Lanjutan & NLP",
      description:
        "Mendalami Transformer, BERT, dan pemrosesan bahasa alami modern.",
      progress: 60,
      actionButton: "Lanjutkan",
      isLocked: false,
      status: "in_progress",
    },
    {
      id: 3,
      stepLabel: "Tahap 3",
      badge: "MENENGAH",
      title: "Computer Vision & MLOps",
      description:
        "Penerapan CNN dan deployment model ke environment produksi...",
      isLocked: true,
      status: "locked",
    },
    {
      id: 4,
      stepLabel: "Tahap 4",
      badge: "LANJUTAN",
      title: "Proyek Akhir & Sertifikasi",
      description:
        "Penyelesaian proyek nyata end-to-end untuk portofolio tingkat senior.",
      isLocked: true,
      status: "locked",
    },
  ],
};

export default dataLearningRoadmap;
