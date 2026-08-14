import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";

const VersionInfo = () => {
  const versions = [
    {
      version: "v1.0.0 (Stabil)",
      date: "14 Agustus 2026",
      changes: [
        "Peluncuran perdana platform SiapKerja",
        "Fitur Rekomendasi Karir berbasis AI",
        "Dashboard analisis kesiapan kerja",
        "Sistem manajemen profil dan keahlian",
      ],
    },
    {
      version: "v0.9.5 (Beta)",
      date: "1 Juli 2026",
      changes: [
        "Pengujian fitur Skill Gap Analysis",
        "Integrasi dengan API tren pasar kerja",
        "Pembaruan desain antarmuka (UI)",
      ],
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari versi..." isSerch={false} />
        <HeaderSection 
          title="Informasi Versi & Pembaruan" 
          description="Pantau perkembangan fitur terbaru dan perbaikan sistem kami."
        />

        <div className="space-y-6">
          {versions.map((v, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl bg-white p-8 shadow-sm dark:border dark:border-white/20 dark:bg-neutral-900"
            >
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
                <H3 className="text-blue-600 dark:text-blue-400">{v.version}</H3>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{v.date}</span>
              </div>
              <ul className="space-y-3">
                {v.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <i className="fa-solid fa-check-circle mt-1 text-xs text-green-500"></i>
                    {change}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default VersionInfo;
