import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import H2 from "../../../ui/H2";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";

const faqData = [
  {
    id: 1,
    question: "Bagaimana cara kerja AI di SiapKerja?",
    answer:
      "AI kami menganalisis pengalaman, keterampilan, dan minat Anda, lalu mencocokkannya dengan database jutaan titik data tren industri untuk memberikan rekomendasi karir yang sangat dipersonalisasi dan akurat.",
  },
  {
    id: 2,
    question: "Apakah data saya aman?",
    answer:
      "Ya, data Anda dilindungi dengan enkripsi tingkat enterprise dan kami mematuhi semua standar keamanan internasional. Data Anda tidak akan pernah dibagikan kepada pihak ketiga tanpa persetujuan Anda.",
  },
  {
    id: 3,
    question: "Bisakah saya membatalkan langganan kapan saja?",
    answer:
      "Tentu saja! Anda dapat membatalkan langganan kapan saja tanpa biaya tambahan atau pertanyaan. Akses akan tetap aktif hingga akhir periode penagihan Anda.",
  },
  {
    id: 4,
    question: "Berapa lama hasil rekomendasi karir terbaru?",
    answer:
      "Rekomendasi kami diperbarui setiap bulan berdasarkan tren pasar terbaru. Namun, Anda dapat meminta pembaruan manual kapan saja dari dashboard.",
  },
  {
    id: 5,
    question: "Apakah ada garansi uang kembali?",
    answer:
      "Ya, kami menawarkan garansi uang kembali 30 hari untuk paket berlangganan. Jika Anda tidak puas, hubungi tim support kami untuk pengembalian dana penuh.",
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
      className="w-full rounded-2xl bg-white py-16 md:py-24 dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
    >
      <div className="mx-auto max-w-4xl rounded-2xl px-4 md:px-8">
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
            Temukan jawaban atas pertanyaan yang paling sering diajukan tentang
            SiapKerja
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
                  ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-slate-800/50"
                  : "border-slate-200 bg-white dark:border-slate-700 dark:bg-neutral-900"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between rounded-2xl p-5 text-left transition-colors hover:bg-slate-50 md:p-6 dark:hover:bg-slate-800/30"
              >
                <h3
                  className={`flex-1 font-semibold transition-colors ${
                    openIndex === index
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-900 dark:text-white"
                  } text-sm md:text-base`}
                >
                  {faq.question}
                </h3>

                {/* Chevron Icon */}
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`ml-4 shrink-0 text-xl transition-colors ${
                    openIndex === index
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-400 dark:text-slate-500"
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
                    <div className="border-t-2 border-slate-200 px-5 py-4 md:px-6 md:py-5 dark:border-slate-700">
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 text-center md:p-8 dark:border-blue-900/50 dark:bg-slate-800/50"
        >
          <H3 className="mb-2 text-lg font-semibold text-slate-900 md:text-xl dark:text-white">
            Masih ada pertanyaan?
          </H3>
          <Text className="mb-4 text-slate-600 dark:text-slate-300">
            Hubungi tim support kami, kami siap membantu Anda 24/7
          </Text>
          <a
            href="mailto:rayhan@gmail.com"
            className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-all hover:bg-blue-700 md:px-8 md:py-3 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Hubungi Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default QNA;
