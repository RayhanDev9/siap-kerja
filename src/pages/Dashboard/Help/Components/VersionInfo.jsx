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
      version: "V1.0.0 (Rilis Perdana)",
      date: "25 Agustus 2026",
      theme: "stable",
      changes: [
        "Peluncuran resmi platform persiapan karir SiapKerja",
        "Learning Roadmap interaktif dengan navigasi modul langkah demi langkah (steps)",
        "Pelacakan waktu belajar aktif harian dan grafik interaksi mingguan",
        "Wawasan data tren industri dan tolok ukur rentang gaji",
        "Sistem evaluasi, rating bintang, dan ulasan modul pembelajaran",
        "Dukungan penuh antarmuka responsif dan tema gelap (Dark Mode)",
      ],
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari pembaruan..." isSerch={false} />

        <HeaderSection
          title="Informasi Versi & Pembaruan"
          description="Pantau perkembangan fitur terbaru dan status rilis sistem SiapKerja."
        />

        <Text className="mt-2 text-sm font-medium tracking-wide text-blue-500 dark:text-blue-400">
          Powered by Kelompok 9 Dev Team
        </Text>

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
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-emerald-200 transition-all duration-300 hover:shadow-emerald-100 md:p-8 dark:bg-neutral-900 dark:ring-emerald-500/50 dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              {/* Header Card */}
              <div className="flex flex-col border-b border-slate-100 pb-4 md:flex-row md:items-center md:justify-between dark:border-white/10">
                <h3 className="text-xl font-bold text-emerald-600 md:text-2xl dark:text-emerald-400">
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
                    <i className="fa-solid fa-circle-check mt-1 text-sm text-emerald-500 md:text-base"></i>
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
