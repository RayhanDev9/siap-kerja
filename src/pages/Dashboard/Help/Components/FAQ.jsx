import React, { useState } from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";
import { useNavigate } from "react-router-dom";
// Hapus import Disclosure dari @headlessui/react karena kita akan membuat custom accordion

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // State untuk melacak ID FAQ yang sedang terbuka
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Apa itu SiapKerja?",
      answer:
        "SiapKerja adalah platform persiapan dan akselerasi karir digital yang membantu Anda mempelajari keterampilan baru lewat alur roadmap langkah demi langkah, melacak progres belajar harian, serta mengakses data gaji dan kebutuhan industri kerja secara transparan.",
    },
    {
      id: 2,
      question: "Bagaimana cara kerja Roadmap Belajar di platform ini?",
      answer:
        "Setiap kategori karir memiliki alur kurikulum berjenjang yang terbagi menjadi beberapa tahapan (steps). Anda dapat mempelajari materi, menandai status penyelesaian setiap step, serta memberikan rating dan ulasan pada modul kursus terkait.",
    },
    {
      id: 3,
      question: "Bagaimana cara sistem menghitung waktu belajar aktif saya?",
      answer:
        "Sistem secara otomatis mencatat durasi waktu saat Anda aktif mengakses modul pembelajaran dan merangkumnya ke dalam grafik interaksi mingguan pada halaman Analitik Karir.",
    },
    {
      id: 4,
      question: "Dari mana data tren pasar dan estimasi gaji diperoleh?",
      answer:
        "Data tren industri dan rentang gaji dikurasi berdasarkan agregasi kebutuhan peran kerja serta standar kompensasi talenta digital terkini di Indonesia yang disajikan secara berkala.",
    },
    {
      id: 5,
      question: "Bagaimana cara meningkatkan Skor Kesiapan Karir saya?",
      answer:
        "Skor kesiapan karir Anda akan meningkat seiring banyaknya tahapan kursus (steps) yang Anda selesaikan dan konsistensi waktu belajar Anda di dalam Learning Roadmap.",
    },
    {
      id: 6,
      question: "Apakah data profil dan progres belajar saya aman?",
      answer:
        "Ya, semua informasi akun, riwayat kursus, dan data analitik pribadi Anda disimpan secara aman dan tidak akan dibagikan kepada pihak ketiga tanpa izin Anda.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Fungsi untuk toggle (buka/tutup) FAQ
  const toggleFaq = (id) => {
    // Jika ID yang diklik sudah terbuka, tutup (set jadi null). Jika tidak, buka ID tersebut.
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <Section>
      <div className="flex flex-col gap-6">
        {/* Search Bar terintegrasi dengan TopBar logic */}
        <TopBar
          placeholder="Cari bantuan atau pertanyaan..."
          isSerch={true}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <HeaderSection
          title="FAQ (Tanya Jawab)"
          description="Temukan jawaban cepat untuk pertanyaan umum mengenai penggunaan platform SiapKerja."
        />

        {/* FAQ List with Search Feedback */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  variants={cardVariants}
                  className={`group overflow-hidden rounded-2xl bg-white transition-all duration-200 hover:shadow-md dark:bg-neutral-900 ${
                    isOpen
                      ? "border-l-4 border-blue-500 shadow-md ring-1 ring-slate-200 dark:ring-white/10"
                      : "border-l-4 border-transparent hover:border-blue-400 dark:border dark:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left outline-none"
                  >
                    <H3
                      className={`text-sm transition-colors md:text-base ${
                        isOpen
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {faq.question}
                    </H3>
                    <i
                      className={`fa-solid fa-chevron-up text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-0 text-blue-500" : "rotate-180"
                      }`}
                    ></i>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <hr className="mb-4 border-slate-100 dark:border-white/5" />
                          <Text className="text-sm leading-relaxed md:text-base">
                            {faq.answer}
                          </Text>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              variants={cardVariants}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-neutral-800">
                <i className="fa-solid fa-magnifying-glass text-3xl text-slate-400"></i>
              </div>
              <H3>FAQ tidak ditemukan</H3>
              <Text>
                Maaf, kami tidak dapat menemukan jawaban untuk kata kunci "
                {searchQuery}"
              </Text>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={cardVariants}
          className="mt-8 overflow-hidden rounded-2xl bg-blue-50 p-1 dark:bg-blue-500/5"
        >
          <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-blue-100 bg-white p-8 md:flex-row dark:border-blue-500/20 dark:bg-neutral-900">
            <div className="space-y-2 text-center md:text-left">
              <H3 className="text-xl">
                Tidak menemukan jawaban yang Anda cari?
              </H3>
              <Text>
                Hubungi tim kami langsung untuk bantuan lebih lanjut mengenai
                kendala Anda.
              </Text>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => navigate("/help/support")}
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 md:text-base lg:text-lg dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Hubungi Dukungan
              </button>
              <button
                onClick={() => navigate("/help/bug-report")}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 md:text-base lg:text-lg dark:border-white/25 dark:bg-black dark:text-white dark:hover:bg-black hover:dark:border-white/35"
              >
                Laporkan Masalah
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FAQ;