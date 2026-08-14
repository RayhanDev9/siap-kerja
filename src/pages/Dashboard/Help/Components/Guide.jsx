import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";

const Guide = () => {
  const steps = [
    {
      title: "Lengkapi Profil Anda",
      description: "Isi data diri, riwayat pendidikan, dan pengalaman kerja Anda di halaman Profil untuk hasil analisis AI yang lebih akurat.",
      icon: "fa-user-edit",
    },
    {
      title: "Cek Skor Kesiapan Karir",
      description: "Lihat seberapa siap Anda untuk peran impian Anda melalui Dashboard utama kami.",
      icon: "fa-chart-line",
    },
    {
      title: "Identifikasi Skill Gap",
      description: "Gunakan fitur Skill Gap untuk mengetahui keahlian apa saja yang masih perlu Anda pelajari.",
      icon: "fa-search-plus",
    },
    {
      title: "Ikuti Roadmap Belajar",
      description: "Dapatkan rekomendasi kursus dan materi pembelajaran yang disusun khusus untuk Anda.",
      icon: "fa-graduation-cap",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari panduan..." isSerch={false} />
        <HeaderSection 
          title="Panduan Penggunaan" 
          description="Ikuti langkah-langkah berikut untuk memaksimalkan potensi karir Anda dengan SiapKerja."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex gap-5 rounded-2xl bg-white p-7 shadow-sm dark:border dark:border-white/20 dark:bg-neutral-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <i className={`fa-solid ${step.icon} text-xl`}></i>
              </div>
              <div>
                <H3 className="mb-2">{step.title}</H3>
                <Text>{step.description}</Text>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={cardVariants}
          className="mt-4 rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center dark:border-white/10"
        >
          <Text className="italic">
            "Butuh bantuan lebih lanjut? Jangan ragu untuk menghubungi tim dukungan kami melalui menu bantuan."
          </Text>
        </motion.div>
      </div>
    </Section>
  );
};

export default Guide;
