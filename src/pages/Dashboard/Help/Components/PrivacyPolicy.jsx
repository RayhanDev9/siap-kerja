import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import Text from "../../../../ui/Text";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";

const PrivacyPolicy = () => {
  const privacyPoints = [
    {
      title: "1. Pengumpulan Informasi",
      icon: "fa-solid fa-database",
      color: "blue",
      items: [
        "Data identitas profil pengguna seperti nama lengkap, alamat email, dan foto profil.",
        "Aktivitas dan progres belajar pada modul silabus Learning Roadmap.",
        "Data evaluasi mandiri keahlian (Skill Gap Analysis) dan preferensi lowongan pekerjaan.",
        "Informasi log teknis perangkat termasuk alamat IP dan interaksi antarmuka.",
      ],
    },
    {
      title: "2. Penggunaan Data",
      icon: "fa-solid fa-chart-pie",
      color: "purple",
      items: [
        "Menyajikan kalkulasi persentase kecocokan karier (Career Match) yang akurat.",
        "Menganalisis kesenjangan kompetensi pengguna terhadap standar industri.",
        "Menyediakan wawasan analitik durasi belajar dan streak pembelajaran mingguan.",
        "Mengoptimalkan performa layanan, perbaikan bug, dan pembaruan sistem berkala.",
      ],
    },
    {
      title: "3. Keamanan & Kerahasiaan",
      icon: "fa-solid fa-shield-halved",
      color: "emerald",
      items: [
        "Penyimpanan kata sandi dan kredensial sensitif menggunakan enkripsi standar industri.",
        "Penggunaan token otentikasi aman (Laravel Sanctum / Bearer Auth).",
        "Kami tidak menjual atau memindahtangankan data pribadi pengguna kepada pihak ketiga tanpa izin.",
      ],
    },
    {
      title: "4. Hak dan Kendali Pengguna",
      icon: "fa-solid fa-user-gear",
      color: "amber",
      items: [
        "Pengguna berhak memperbarui dan memperbaiki profil akun kapan saja.",
        "Pengguna memiliki kontrol penuh terhadap status penyimpanan (bookmark) loker.",
        "Pengguna dapat menghubungi tim dukungan untuk penghapusan akun atau penarikan data.",
      ],
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari kebijakan privasi..." isSerch={false} />

        <HeaderSection
          title="Kebijakan Privasi"
          description="Komitmen kami dalam menjaga keamanan data, privasi, dan transparansi informasi pengguna SiapKerja."
        />

        <Text className="mt-2 text-sm font-medium tracking-wide text-blue-500 dark:text-blue-400">
          Terakhir diperbarui: 25 Agustus 2026 &bull; SiapKerja Security & Privacy
        </Text>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-4 flex w-full max-w-4xl flex-col gap-6"
        >
          {/* Card Pembuka */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-blue-200 transition-all duration-300 md:p-8 dark:bg-neutral-900 dark:ring-blue-500/40"
          >
            <h3 className="text-lg font-bold text-blue-600 md:text-xl dark:text-blue-400">
              Komitmen Privasi Kami
            </h3>
            <Text className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
              Privasi Anda adalah prioritas utama di <strong>SiapKerja</strong>. Dokumen Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, mengelola, serta melindungi data informasi pribadi yang Anda berikan saat menggunakan seluruh layanan ekosistem SiapKerja.
            </Text>
          </motion.div>

          {/* List Poin Kebijakan */}
          {privacyPoints.map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-lg md:p-8 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]"
            >
              {/* Header Poin */}
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <i className={`${section.icon} text-lg`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 md:text-xl dark:text-white">
                  {section.title}
                </h3>
              </div>

              {/* Rincian Poin */}
              <ul className="mt-1 flex flex-col gap-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check mt-1 text-sm text-blue-500 md:text-base dark:text-blue-400"></i>
                    <Text className="text-sm leading-relaxed text-slate-700 md:text-base dark:text-slate-200">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Card Kontak Dukungan Privasi */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 dark:bg-neutral-800/60 dark:ring-neutral-700 md:p-8"
          >
            <h4 className="text-base font-bold text-slate-900 dark:text-white md:text-lg">
              Pertanyaan Seputar Privasi?
            </h4>
            <Text className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Jika Anda memiliki pertanyaan mengenai tata kelola privasi data ini, silakan hubungi kami melalui menu <strong>Pusat Bantuan &gt; Hubungi Dukungan</strong> atau kirimkan email langsung ke <span className="font-semibold text-blue-600 dark:text-blue-400">m.rayhanoi26@gmail.com</span>.
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default PrivacyPolicy;