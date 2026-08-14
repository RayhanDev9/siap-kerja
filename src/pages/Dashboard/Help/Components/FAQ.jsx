import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";

const FAQ = () => {
  const faqs = [
    {
      question: "Apa itu SiapKerja?",
      answer: "SiapKerja adalah platform bimbingan karir berbasis AI yang membantu Anda menemukan jalur karir terbaik, mengidentifikasi celah keahlian, dan memberikan rekomendasi pembelajaran yang dipersonalisasi.",
    },
    {
      question: "Bagaimana cara kerja Rekomendasi Karir AI?",
      answer: "AI kami menganalisis profil, keahlian, dan minat Anda untuk mencocokkannya dengan tren pasar kerja saat ini, memberikan skor kesiapan karir yang akurat.",
    },
    {
      question: "Apakah platform ini gratis?",
      answer: "SiapKerja menawarkan fitur dasar secara gratis untuk membantu semua orang memulai perjalanan karir mereka. Kami juga memiliki paket premium untuk analisis yang lebih mendalam.",
    },
    {
      question: "Bagaimana cara melaporkan masalah teknis?",
      answer: "Anda dapat menggunakan fitur 'Laporkan Bug' di menu bantuan untuk mengirimkan detail kendala yang Anda alami kepada tim teknis kami.",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari bantuan..." isSerch={true} />
        <HeaderSection 
          title="FAQ (Tanya Jawab)" 
          description="Temukan jawaban cepat untuk pertanyaan umum mengenai SiapKerja."
        />

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border dark:border-white/20 dark:bg-neutral-900"
            >
              <H3 className="mb-2 text-blue-600 dark:text-blue-400">
                {faq.question}
              </H3>
              <Text>
                {faq.answer}
              </Text>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
