const dataCareerExplorer = {
  headerData: {
    title: "Eksplorasi Karir",
    description: "Temukan peluang karir yang sesuai dengan profil AI Anda.",
  },
  filterCategories: [
    { id: "all", label: "Semua", isActive: true },
    { id: "tech", label: "Teknologi", isActive: false },
    { id: "business", label: "Bisnis", isActive: false },
    { id: "creative", label: "Kreatif", isActive: false },
  ],
  jobListings: [
    {
      id: 1,
      title: "AI Product Manager",
      company: "Perusahaan Teknologi Terkemuka",
      badge: {
        text: "AI MATCH",
        type: "primary", // Bisa digunakan untuk menentukan warna ungu di CSS/Tailwind
      },
      matchPercentage: 92,
      skills: ["Machine Learning", "Agile", "Data Strategy"],
      salary: "Rp 25-35 Jt/bln",
      linkText: "Lihat Detail",
    },
    {
      id: 2,
      title: "Cloud Solutions Architect",
      company: "Global IT Services",
      badge: {
        text: "HOT",
        type: "warning", // Bisa digunakan untuk menentukan warna oranye di CSS/Tailwind
      },
      matchPercentage: 85,
      skills: ["AWS/Azure", "System Design", "DevOps"],
      salary: "Rp 30-45 Jt/bln",
      linkText: "Lihat Detail",
    },
    {
      id: 3,
      title: "UX/UI Engineer",
      company: "Startup Unicorn",
      badge: {
        text: "AI MATCH",
        type: "success",
      },
      matchPercentage: 88,
      skills: ["Figma", "React", "User Research"],
      salary: "Rp 15-25 Jt/bln",
      linkText: "Lihat Detail",
    },
  ],
};

export default dataCareerExplorer;
