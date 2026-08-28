import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import Logo from "../../../../ui/Logo";

const advantages = [
  {
    title: "Roadmap Terstruktur",
    description:
      "Kurikulum belajar langkah demi langkah per tahapan yang disusun sistematis dari level dasar hingga mahir.",
    icon: "fa-solid fa-graduation-cap",
    color: "text-blue-600",
  },
  {
    title: "Analisis Kesenjangan Skill",
    description:
      "Identifikasi kompetensi yang perlu ditingkatkan untuk memenuhi kualifikasi peran kerja yang ditargetkan.",
    icon: "fa-solid fa-chart-pie",
    color: "text-purple-600",
  },
  {
    title: "Pelacakan Jam Belajar",
    description:
      "Pencatatan waktu aktif belajar harian secara otomatis yang dirangkum dalam grafik interaksi mingguan.",
    icon: "fa-solid fa-clock-rotate-left",
    color: "text-orange-600",
  },
  {
    title: "Wawasan Tren & Gaji",
    description:
      "Akses perbandingan standar kompensasi dan permintaan industri terkini untuk perencanaan karir yang tepat.",
    icon: "fa-solid fa-arrow-trend-up",
    color: "text-yellow-600",
  },
  {
    title: "Dashboard Terintegrasi",
    description:
      "Pusat kendali komprehensif untuk memantau status modul kursus, skor kesiapan, dan rating pembelajaran.",
    icon: "fa-solid fa-table-columns",
    color: "text-emerald-600",
  },
];

const About = () => {
  return (
    <Section>
      <div className="flex flex-col gap-7">
        <TopBar placeholder="Tentang kami..." isSerch={false} />

        {/* Hero Section */}
        <HeaderSection
          title="Tentang SiapKerja"
          description="Ekosistem Persiapan Karir Terarah: Langkah Nyata Menuju Profesi Impian."
        />

        {/* Core Advantages */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-200 dark:border dark:border-white/20 dark:bg-neutral-900 dark:hover:border-blue-500"
            >
              <H3 className="mb-4 flex items-center gap-3">
                <i className={`${adv.icon} ${adv.color}`}></i> {adv.title}
              </H3>
              <Text>{adv.description}</Text>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl bg-neutral-100 p-8 transition-all duration-200 dark:border-white/25 dark:bg-neutral-800 dark:hover:border-white/35"
        >
          <H3 className="mb-4">Misi Kami</H3>
          <Text>
            Kami berkomitmen memberdayakan talenta digital Indonesia melalui
            pembelajaran terstruktur dan data pasar kerja yang transparan. Dengan
            panduan roadmap yang teruji, kami membantu Anda belajar secara
            efisien dan berkembang dengan arah yang jelas di dunia profesional.
          </Text>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl bg-blue-600 p-10 text-center text-white dark:bg-blue-500"
        >
          <H3 className="mb-2 text-2xl font-bold text-white">
            Siap melangkah ke jenjang berikutnya?
          </H3>
          <p className="opacity-90">
            Bergabunglah dengan ribuan talenta lainnya yang telah memulai langkah
            persiapan karir mereka bersama SiapKerja.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;