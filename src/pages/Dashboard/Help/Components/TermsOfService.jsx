import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import Text from "../../../../ui/Text";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";

const TermsOfService = () => {
  const terms = [
    {
      title: "1. Penerimaan Ketentuan",
      icon: "fa-solid fa-handshake",
      items: [
        "Dengan mengakses dan mendaftar di SiapKerja, Anda menyetujui seluruh ketentuan layanan yang berlaku.",
        "Jika Anda tidak menyetujui salah satu bagian dari ketentuan ini, Anda disarankan untuk tidak melanjutkan penggunaan platform.",
        "Pengguna bertanggung jawab penuh atas segala aktivitas yang dilakukan menggunakan kredensial akun miliknya.",
      ],
    },
    {
      title: "2. Akun & Keamanan Pengguna",
      icon: "fa-solid fa-user-shield",
      items: [
        "Pengguna wajib menyediakan informasi pendaftaran yang akurat, valid, dan dapat dipertanggungjawabkan.",
        "Menjaga kerahasiaan kata sandi dan token akses akun sepenuhnya merupakan tanggung jawab pengguna.",
        "SiapKerja berhak menonaktifkan atau membatasi akun jika ditemukan indikasi penyalahgunaan atau aktivitas mencurigakan.",
      ],
    },
    {
      title: "3. Penggunaan Platform & Konten",
      icon: "fa-solid fa-laptop-code",
      items: [
        "Seluruh materi, silabus roadmap, dan modul pembelajaran hanya ditujukan untuk tujuan edukasi dan pengembangan karier pribadi.",
        "Dilarang keras menyalin, mendistribusikan ulang, atau mengeksploitasi konten platform secara komersial tanpa izin tertulis.",
        "Dilarang melakukan tindakan yang dapat mengganggu kestabilan server atau integritas sistem API SiapKerja.",
      ],
    },
    {
      title: "4. Informasi Lowongan Kerja & Rekomendasi",
      icon: "fa-solid fa-briefcase",
      items: [
        "Fitur Career Match dan analisis kesenjangan skill merupakan sistem evaluasi panduan dan bukan jaminan penerimaan kerja.",
        "Informasi lowongan eksternal disajikan sebagai referensi; proses rekrutmen sepenuhnya berada di bawah kendali masing-masing perusahaan penyedia kerja.",
      ],
    },
    {
      title: "5. Pembaruan & Perubahan Ketentuan",
      icon: "fa-solid fa-file-pen",
      items: [
        "SiapKerja berhak memperbarui syarat dan ketentuan ini sewaktu-waktu demi peningkatan mutu layanan.",
        "Perubahan substansial akan diinformasikan melalui pembaruan tanggal revisi pada halaman ini.",
      ],
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari ketentuan layanan..." isSerch={false} />

        <HeaderSection
          title="Ketentuan Layanan"
          description="Syarat, ketentuan, dan pedoman penggunaan platform SiapKerja yang perlu Anda ketahui."
        />

        <Text className="mt-2 text-sm font-medium tracking-wide text-blue-500 dark:text-blue-400">
          Terakhir diperbarui: 25 Agustus 2026 &bull; SiapKerja Legal Terms
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
              Selamat Datang di SiapKerja
            </h3>
            <Text className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
              Halaman ini memuat syarat dan ketentuan penggunaan layanan <strong>SiapKerja</strong>. Mohon membaca dokumen ini dengan seksama agar Anda memahami hak dan kewajiban saat memanfaatkan fitur pembelajaran, analisis kompetensi, dan eksplorasi karier kami.
            </Text>
          </motion.div>

          {/* List Ketentuan */}
          {terms.map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-lg md:p-8 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]"
            >
              {/* Header Card */}
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

          {/* Card Penutup & Kontak */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 dark:bg-neutral-800/60 dark:ring-neutral-700 md:p-8"
          >
            <h4 className="text-base font-bold text-slate-900 dark:text-white md:text-lg">
              Butuh Informasi Lebih Lanjut?
            </h4>
            <Text className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Apabila terdapat pasal atau aturan yang membutuhkan penjelasan lebih detail, jangan ragu untuk menghubungi kami via halaman <strong>Pusat Bantuan</strong> atau email ke <span className="font-semibold text-blue-600 dark:text-blue-400">m.rayhanoi26@gmail.com</span>.
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default TermsOfService;