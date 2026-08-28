import React from "react";
import { motion } from "framer-motion";
import { cardVariants } from "../../../util/animations";
import H2 from "../../../ui/H2";
import H3 from "../../../ui/H3";
import Text from "../../../ui/Text";
const valuesData = [
  {
    id: "transparency",
    title: "Transparansi Data",
    desc: "Menyajikan data pasar dan standar gaji secara terbuka, realistis, dan tanpa bias untuk semua pencari kerja.",
    icon: "fa-solid fa-scale-balanced",
    theme: "text-blue-500 bg-blue-500/10",
  },
  {
    id: "practicality",
    title: "Relevansi Praktis",
    desc: "Kurikulum dan materi pembelajaran difokuskan langsung pada standar kebutuhan industri kerja nyata saat ini.",
    icon: "fa-solid fa-briefcase",
    theme: "text-emerald-500 bg-emerald-500/10",
  },
  {
    id: "growth",
    title: "Orientasi Berkembang",
    desc: "Mendorong konsistensi belajar pengguna lewat pencapaian terukur agar terus siap menghadapi tantangan karir.",
    icon: "fa-solid fa-seedling",
    theme: "text-purple-500 bg-purple-500/10",
  },
];

function About() {
  return (
    <section id="about" className="space-y-3 ">
      {/* Header About Section */}
      <motion.div
        variants={cardVariants}
        className="mx-auto max-w-3xl space-y-4 text-center"
      >
        <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-600 sm:text-sm lg:text-base dark:bg-blue-400/10 dark:text-blue-400">
          Tentang SiapKerja
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
          Membangun Karir Digital dengan{" "}
          <span className="text-primary block sm:inline-block md:mt-2.5">
            Data & Arah Pasti
          </span>
        </h2>
        <Text className="text-base text-slate-600 sm:text-lg dark:text-neutral-400">
          SiapKerja adalah platform pengembangan karir dan pembelajaran terarah
          bagi talenta digital Indonesia, menghadirkan analisis tren industri,
          standar kompensasi, dan panduan belajar langkah demi langkah.
        </Text>
      </motion.div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Visi */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 dark:border-white/10 dark:bg-neutral-900/80 hover:dark:border-white/20"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
            <i className="fa-solid fa-bullseye text-xl"></i>
          </div>
          <div>
            <H3 className="text-xl font-bold text-slate-900 dark:text-white">
              Visi Kami
            </H3>
            <Text className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-neutral-400">
              Membangun ekosistem persiapan kerja yang transparan di Indonesia,
              di mana setiap individu memiliki akses ke kurikulum relevan dan
              wawasan pasar untuk meniti karir dengan percaya diri.
            </Text>
          </div>
        </motion.div>

        {/* Misi */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 dark:border-white/10 dark:bg-neutral-900/80 hover:dark:border-white/20"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 dark:text-purple-400">
            <i className="fa-solid fa-graduation-cap text-xl"></i>
          </div>
          <div>
            <H3 className="text-xl font-bold text-slate-900 dark:text-white">
              Misi Kami
            </H3>
            <Text className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-neutral-400">
              Menyediakan panduan roadmap langkah demi langkah, memantau
              perkembangan belajar pengguna, dan menyajikan perbandingan gaji
              aktual yang dapat diandalkan secara langsung.
            </Text>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="space-y-6 pt-4">
        <motion.div variants={cardVariants}>
          <H2
            type="secondry"
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            Nilai Utama Kami
          </H2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valuesData.map((val) => (
            <motion.div
              key={val.id}
              variants={cardVariants}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 dark:border-white/10 dark:bg-neutral-900 hover:dark:border-white/25"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${val.theme}`}
              >
                <i className={`${val.icon} text-lg`}></i>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {val.title}
              </h4>
              <Text className="text-sm text-slate-600 dark:text-neutral-400">
                {val.desc}
              </Text>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
