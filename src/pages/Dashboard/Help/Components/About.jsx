import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import Logo from "../../../../ui/Logo";

const About = () => {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <TopBar placeholder="Tentang kami..." isSerch={false} />
        
        <div className="flex flex-col items-center text-center">
          <motion.div variants={cardVariants} className="mb-4">
             <div className="scale-150 py-10">
                <Logo />
             </div>
          </motion.div>
          <HeaderSection 
            title="Tentang SiapKerja" 
            description="Mempersiapkan masa depan karir Anda dengan teknologi AI terdepan."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            className="rounded-2xl bg-white p-8 shadow-sm dark:border dark:border-white/20 dark:bg-neutral-900"
          >
            <H3 className="mb-4 flex items-center gap-2">
              <i className="fa-solid fa-bullseye text-blue-600"></i> Misi Kami
            </H3>
            <Text>
              SiapKerja hadir untuk menjembatani kesenjangan antara pendidikan dan dunia kerja. Kami percaya setiap individu memiliki potensi unik yang bisa dimaksimalkan dengan bimbingan yang tepat dan data yang akurat.
            </Text>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="rounded-2xl bg-white p-8 shadow-sm dark:border dark:border-white/20 dark:bg-neutral-900"
          >
            <H3 className="mb-4 flex items-center gap-2">
              <i className="fa-solid fa-rocket text-purple-600"></i> Teknologi AI
            </H3>
            <Text>
              Kami menggunakan model machine learning terbaru untuk menganalisis jutaan titik data di pasar kerja global, memastikan Anda mendapatkan saran karir yang paling relevan dan terkini.
            </Text>
          </motion.div>
        </div>

        <motion.div
          variants={cardVariants}
          className="rounded-2xl bg-blue-600 p-10 text-center text-white dark:bg-blue-500"
        >
          <H3 className="mb-2 text-white text-2xl font-bold">Siap melangkah ke jenjang berikutnya?</H3>
          <p className="opacity-90">Bergabunglah dengan ribuan profesional lainnya yang telah menemukan jalur karir mereka bersama SiapKerja.</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
