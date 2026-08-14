import { Link } from "react-router-dom";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";

const Guide = () => {
  const steps = [
    {
      title: "Lengkapi Profil Anda",
      description:
        "Lengkapi profil Anda dengan mencantumkan tujuan karir dan keahlian saat ini, agar sistem kami dapat menganalisis dan memetakan jalur karir yang paling tepat untuk Anda.",
      icon: "fa-user-pen",
      path: "/profile",
    },
    {
      title: "Cek Skor Kesiapan Karir",
      description:
        "Lihat seberapa siap Anda untuk peran impian Anda melalui Dashboard utama kami.",
      icon: "fa-chart-line",
      path: "/",
    },
    {
      title: "Identifikasi Skill Gap",
      description:
        "Gunakan fitur Skill Gap untuk mengetahui keahlian apa saja yang masih perlu Anda pelajari.",
      icon: "fa-magnifying-glass-chart",
      path: "/skillGap",
    },
    {
      title: "Ikuti Roadmap Belajar",
      description:
        "Dapatkan rekomendasi kursus dan materi pembelajaran yang disusun khusus untuk Anda.",
      icon: "fa-graduation-cap",
      path: "/learningRoadmap",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari panduan..." isSerch={false} />
        <HeaderSection
          title="Panduan Penggunaan"
          description="Ikuti langkah-langkah berikut untuk memaksimalkan potensi karir Anda dengan SiapKerja."
        />

        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <Link to={step.path} key={index} className="group block">
              <motion.div
                variants={cardVariants}
                className="relative flex cursor-pointer gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md dark:border-white/25 dark:bg-neutral-900 dark:hover:border-blue-500"
              >
                {/* Background Watermark Number */}
                <div className="pointer-events-none absolute -top-2 right-6 text-8xl font-black text-white transition-colors duration-300 select-none group-hover:text-blue-500/10 dark:text-neutral-700/25 dark:group-hover:text-blue-400/10">
                  0{index + 1}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 dark:bg-black dark:text-blue-400">
                  <i className={`fa-solid ${step.icon} text-xl`}></i>
                </div>

                {/* Content */}
                <div className="relative z-10 pr-6">
                  <H3 className="mb-2 text-slate-800 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {step.title}
                  </H3>
                  <Text className="text-sm text-gray-600 dark:text-white/75">
                    {step.description}
                  </Text>
                </div>

                {/* Interactive Arrow Icon */}
                <div className="absolute right-6 bottom-6 translate-x-2 transform text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-blue-600 group-hover:opacity-100 dark:text-zinc-600 dark:group-hover:text-blue-400">
                  <i className="fa-solid fa-arrow-right text-base"></i>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Solid Call to Action (CTA) Section */}
        <motion.div
          variants={cardVariants}
          className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:shadow-sm md:flex-row dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            {/* Support Headset Icon Box */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-black dark:text-blue-400">
              <i className="fa-solid fa-headset text-xl"></i>
            </div>
            <div>
              <Text className="leading-relaxed font-semibold text-slate-800 dark:text-white">
                Butuh bantuan lebih lanjut? Jangan ragu untuk menghubungi tim
                dukungan kami melalui menu bantuan.
              </Text>
            </div>
          </div>

          {/* Support Redirect Button */}
          <div className="w-full shrink-0 md:w-auto">
            <Link
              to="/help/support"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 bg-transparent px-6 py-3 text-sm font-semibold tracking-wider text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white focus:outline-none active:scale-95 md:w-auto md:text-base lg:text-lg dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-zinc-950"
            >
              <span>Hubungi Dukungan</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Guide;
