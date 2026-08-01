const dataSavedCareers = [
  {
    id: 1,
    role: "AI Solutions Architect",
    matchScore: 92,
    salaryEstimate: "Rp 25jt - 45jt/bln",
    tags: [
      {
        label: "TEKNOLOGI",
        theme: "purple",
      },
      {
        label: "TINGGI",
        theme: "orange",
      },
    ],
    skillReadiness: {
      label: "Kesiapan Skill",
      mastered: 4,
      total: 6,
      statusText: "Dikuasai",
      progressPercentage: 66.67,
    },
    aiRecommendation: {
      title: "Rekomendasi AI",
      headerIcon: "fa-regular fa-lightbulb",
      tasks: [
        {
          id: "task-1",
          text: 'Selesaikan modul "Advanced Neural Networks"',
          icon: "fa-regular fa-circle-check",
          theme: "blue",
        },
      ],
    },
  },

  {
    id: 2,
    role: "Front-End Web Developer",
    matchScore: 88,
    salaryEstimate: "Rp 12jt - 20jt/bln",
    tags: [
      {
        label: "JAVASCRIPT",
        theme: "yellow",
      },
      {
        label: "MENENGAH",
        theme: "green",
      },
    ],
    skillReadiness: {
      label: "Kesiapan Skill",
      mastered: 5,
      total: 6,
      statusText: "Dikuasai",
      progressPercentage: 83.33,
    },
    aiRecommendation: {
      title: "Rekomendasi AI",
      headerIcon: "fa-regular fa-lightbulb",
      tasks: [
        {
          id: "task-2",
          text: "Tingkatkan efisiensi komponen layout menggunakan Tailwind CSS",
          icon: "fa-regular fa-circle-check",
          theme: "blue",
        },
      ],
    },
  },
  {
    id: 3,
    role: "Java Software Engineer",
    matchScore: 75,
    salaryEstimate: "Rp 15jt - 28jt/bln",
    tags: [
      {
        label: "BACKEND",
        theme: "blue",
      },
      {
        label: "TINGGI",
        theme: "orange",
      },
    ],
    skillReadiness: {
      label: "Kesiapan Skill",
      mastered: 1,
      total: 5,
      statusText: "Dikuasai",
      progressPercentage: 60.0,
    },
    aiRecommendation: {
      title: "Rekomendasi AI",
      headerIcon: "fa-regular fa-lightbulb",
      tasks: [
        {
          id: "task-3",
          text: "Pelajari lebih dalam optimasi rendering grafik dengan Java Swing",
          icon: "fa-regular fa-circle-check",
          theme: "blue",
        },
      ],
    },
  },
];

export default dataSavedCareers;
