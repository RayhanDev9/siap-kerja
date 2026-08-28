import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import H2 from "../../../ui/H2";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";

const faqData = [
  {
    id: 1,
    question: "Bagaimana cara kerja platform SiapKerja?",
    answer:
      "SiapKerja menyediakan alur roadmap pembelajaran langkah demi langkah yang terstruktur sesuai kategori karir, lengkap dengan pelacakan progres belajar harian dan wawasan standar gaji industri terkini.",
  },
  {
    id: 2,
    question: "Apakah materi kursus dan roadmap selalu diperbarui?",
    answer:
      "Ya, kurikulum modul dan rekomendasi keahlian terus diselaraskan secara berkala mengikuti kebutuhan nyata dan standar teknologi yang sedang dicari oleh perusahaan di Indonesia.",
  },
  {
    id: 3,
    question: "Bagaimana cara melacak perkembangan belajar saya?",
    answer:
      "Setiap langkah kursus yang Anda selesaikan dapat ditandai langsung. Sistem juga otomatis mencatat durasi waktu aktif belajar Anda ke dalam grafik mingguan di dashboard Analitik Karir.",
  },
  {
    id: 4,
    question: "Apakah data profil dan progres saya aman?",
    answer:
      "Keamanan data Anda adalah prioritas kami. Semua informasi akun, progres modul, dan aktivitas belajar disimpan dengan aman dan tidak akan dibagikan kepada pihak luar tanpa izin Anda.",
  },
  {
    id: 5,
    question: "Apakah saya bisa mengakses platform melalui ponsel?",
    answer:
      "Tentu saja! Antarmuka SiapKerja sepenuhnya responsif dan dioptimalkan agar nyaman diakses baik melalui browser smartphone, tablet, maupun layar desktop/laptop.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function QNA() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="w-full rounded-2xl bg-white py-6 my-12 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <H2
            type="secondaryBold"
            className="mb-3 text-slate-900 dark:text-white"
          >
            Pertanyaan Umum
          </H2>
          <Text className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            Temukan jawaban atas pertanyaan yang paling sering diajukan seputar
            alur belajar dan fitur di SiapKerja.
          </Text>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className={`rounded-2xl border-2 transition-all duration-300 ${
                openIndex === index
                  ? "border-blue-500 bg-blue-50/50 dark:border-border-blue-500 dark:bg-neutral-800/80"
                  : "border-slate-200 bg-white dark:border-white/10 dark:bg-neutral-900 hover:dark:border-white/25"
              }`}
            >
              {/* Question Button */}
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between rounded-2xl p-5 text-left transition-colors hover:bg-slate-50/50 md:p-6 dark:hover:bg-neutral-800/40"
              >
                <span
                  className={`flex-1 text-sm font-semibold transition-colors sm:text-base md:text-lg ${
                    openIndex === index
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Chevron Icon */}
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`ml-4 shrink-0 text-base transition-colors sm:text-lg ${
                    openIndex === index
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-400 dark:text-neutral-500"
                  }`}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </motion.div>
              </button>

              {/* Answer Accordion */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-200 px-5 py-4 md:px-6 md:py-5 dark:border-white/10">
                      <Text className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base lg:text-lg dark:text-neutral-300">
                        {faq.answer}
                      </Text>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-6 text-center md:p-8 dark:border-white/10 dark:bg-neutral-800/60"
        >
          <H3 className="mb-2 text-lg font-semibold text-slate-900 md:text-xl dark:text-white">
            Masih ada pertanyaan seputar platform?
          </H3>
          <Text className="mb-5 text-sm text-slate-600 sm:text-base dark:text-neutral-300">
            Hubungi tim support kami, kami siap membantu kelancaran persiapan
            karir Anda.
          </Text>
          <a
            href="mailto:rayhan@gmail.com"
            className="inline-block rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 md:px-8 md:py-3 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Hubungi Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default QNA;
