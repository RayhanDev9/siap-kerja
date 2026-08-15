import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import Text from "../../../../ui/Text";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";

const VersionInfo = () => {
  const versions = [
    {
      version: "V1.0.0 (Stabil)",
      date: "14 Agustus 2026",
      theme: "stable", // Penanda untuk warna tema RACST
      changes: [
        "Peluncuran perdana platform SiapKerja",
        "Fitur Rekomendasi Karir berbasis AI",
        "Dashboard analisis kesiapan kerja",
        "Sistem manajemen profil dan keahlian",
      ],
    },
    {
      version: "V0.9.5 (Beta)",
      date: "1 Juli 2026",
      theme: "beta", // Penanda untuk warna tema RACST
      changes: [
        "Pengujian fitur Skill Gap Analysis",
        "Integrasi dengan API tren pasar kerja",
        "Pembaruan desain antarmuka (UI)",
      ],
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6 ">
        {/* TopBar konsisten dengan BugReport */}
        <TopBar placeholder="Cari pembaruan..." isSerch={false} />

          <HeaderSection
            title="Informasi Versi & Pembaruan"
            description="Pantau perkembangan fitur terbaru dan perbaikan sistem kami."
          />
          {/* Subtitle RACST System */}
          <Text className="mt-2 text-sm font-medium tracking-wide text-blue-500 dark:text-blue-400">
            Powered by RACST UI System
          </Text>

        {/* Container Utama dengan Animasi Framer Motion & Responsive Max-Width */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-4 flex w-full max-w-4xl flex-col gap-6"
        >
          {versions.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Card Styling: Menggabungkan base BugReport dengan Glow Effect RACST
              className={`flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 transition-all duration-300 md:p-8 dark:bg-neutral-900 ${
                item.theme === "stable"
                  ? "ring-emerald-200 hover:shadow-emerald-100 dark:ring-emerald-500/50 dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "ring-blue-200 hover:shadow-blue-100 dark:ring-blue-500/50 dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              }`}
            >
              {/* Header Card (Judul Versi & Tanggal) */}
              <div className="flex flex-col border-b border-slate-100 pb-4 md:flex-row md:items-center md:justify-between dark:border-white/10">
                <h3
                  className={`text-xl font-bold md:text-2xl ${
                    item.theme === "stable"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {item.version}
                </h3>
                <Text className="mt-1 text-sm font-medium text-slate-500 md:mt-0 dark:text-slate-400">
                  {item.date}
                </Text>
              </div>

              {/* List Pembaruan */}
              <ul className="mt-2 flex flex-col gap-3">
                {item.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start gap-3">
                    {/* Menggunakan FontAwesome Icon asumsikan sama seperti BugReport */}
                    <i
                      className={`fa-solid fa-circle-check mt-1 text-sm md:text-base ${
                        item.theme === "stable"
                          ? "text-emerald-500"
                          : "text-blue-500"
                      }`}
                    ></i>
                    <Text className="text-sm text-slate-700 md:text-base dark:text-slate-200">
                      {change}
                    </Text>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default VersionInfo;