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
    title: "Rekomendasi Karir AI",
    description:
      "Rekomendasi karir yang dipersonalisasi berdasarkan analisis cerdas minat dan keahlian Anda.",
    icon: "fa-solid fa-robot",
    color: "text-blue-600",
  },
  {
    title: "Analisis Skill Gap",
    description:
      "Identifikasi instan keterampilan yang harus ditingkatkan untuk mencapai target karir spesifik.",
    icon: "fa-solid fa-chart-line",
    color: "text-purple-600",
  },
  {
    title: "Roadmap Belajar Dinamis",
    description:
      "Panduan belajar terstruktur per tahapan untuk navigasi pengembangan diri yang efektif.",
    icon: "fa-solid fa-map-signs",
    color: "text-orange-600",
  },
  {
    title: "Tren Pasar Real-Time",
    description:
      "Visualisasi data gaji dan tren industri terkini untuk pengambilan keputusan yang tepat.",
    icon: "fa-solid fa-bolt",
    color: "text-yellow-600",
  },
  {
    title: "Dashboard Terintegrasi",
    description:
      "Pusat kendali komprehensif untuk memantau skor kesiapan, progres belajar, dan karir impian.",
    icon: "fa-solid fa-dashboard",
    color: "text-emerald-600",
  },
];

const About = () => {
  return (
    <Section>
      <div className="flex flex-col gap-7">
        <TopBar placeholder="Tentang kami..." isSerch={false} />

        {/* Hero Section */}
        <motion.div variants={cardVariants} className="mb-4"></motion.div>
        <HeaderSection
          title="Tentang SiapKerja"
          description="Ekosistem Karir Cerdas: Jembatan Pintar Menuju Karir Impian."
        />

        {/* <Text className="mt-4 max-w-2xl">
          SiapKerja adalah platform berbasis AI yang dirancang untuk membantu
          Anda menjembatani kesenjangan antara keterampilan Anda saat ini dan
          tuntutan industri modern.
        </Text> */}

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
            Kami berkomitmen untuk memberdayakan setiap individu dengan
            bimbingan karir berbasis data. Dengan teknologi mutakhir, kami
            mengubah cara Anda merencanakan, belajar, dan tumbuh di dunia
            profesional.
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
            Bergabunglah dengan ribuan profesional lainnya yang telah menemukan
            jalur karir mereka bersama SiapKerja.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
