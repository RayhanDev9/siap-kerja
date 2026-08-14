const dataSkillGap = {
  // 1. Overall Readiness
  overallReadiness: {
    percentage: 68,
    message:
      "Anda memiliki dasar yang kuat. Fokus pada pengembangan kepemimpinan strategis.",
  },

  // 2. Competency Matrix (Estimated values from 0-100 scale based on chart)
  competencyMatrix: {
    labels: [
      "UI Design",
      "UX Research",
      "Prototyping",
      "Strategy",
      "Leadership",
      "Tech",
    ],
    datasets: [
      {
        label: "Keahlian Anda",
        data: [100, 50, 90, 40, 20, 40], // Solid blue dot
        color: "#0d6efd", // Blue
      },
      {
        label: "Target Peran",
        data: [90, 70, 80, 80, 70, 60], // Dashed purple dot
        color: "#6f42c1", // Purple
      },
    ],
  },

  // 3. Skill Category Details
  skillCategoryDetails: [
    {
      id: 1,
      category: "Teknologi & Tools",
      icon: "fa-cubes", // Estimated FontAwesome icon
      skills: [
        {
          name: "Figma (Advanced Prototyping)",
          status: "Tercapai",
          statusType: "success", // Can be used for badge styling
        },
        {
          name: "HTML/CSS Dasar",
          status: "Kesenjangan",
          statusType: "danger",
        },
      ],
    },
    {
      id: 2,
      category: "Kreatif & Strategi",
      icon: "fa-lightbulb", // Estimated FontAwesome icon
      skills: [
        {
          name: "Desain Sistem Skalabel",
          status: "Pengembangan",
          statusType: "warning",
        },
        {
          name: "Riset Pengguna Kualitatif",
          status: "Tercapai",
          statusType: "success",
        },
      ],
    },
  ],

  // 4. Market Demand Map
 marketDemandMap :[
  {
    id: 1,
    title: "Design Systems",
    level: "Very High",
    icon: "fa-solid fa-arrow-trend-up",
    bgClass: "border-blue-200 bg-[#F0F5FF]",
    textClass: "text-blue-700",
  },
  {
    id: 2,
    title: "HTML/CSS",
    level: "Moderate",
    icon: "fa-solid fa-code",
    bgClass: "border-orange-200 bg-[#F4F4F5]",
    textClass: "text-orange-600",
  },
  {
    id: 3,
    title: "User Research",
    level: "High",
    icon: "fa-solid fa-flask",
    bgClass: "border-green-200 bg-[#F0F5FF]",
    textClass: "text-green-700",
  },
  {
    id: 4,
    title: "Motion Design",
    level: "Growing",
    icon: "fa-solid fa-hurricane",
    bgClass: "border-purple-200 bg-[#F5F0FF]",
    textClass: "text-purple-600",
  },
]
};

export default dataSkillGap;
