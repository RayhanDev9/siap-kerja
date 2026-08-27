import { motion } from "framer-motion";
import { useState } from "react";
import H2 from "../../../ui/H2";
import Text from "../../../ui/Text";
import Section from "../../../ui/Section";
import H3 from "../../../ui/H3";

const testimonialData = [
  {
    id: 1,
    quote:
      "Roadmap terstruktur di SiapKerja membantu saya beralih karir ke Data Science dalam 6 bulan dengan urutan modul belajar yang sangat jelas.",
    name: "Budi Santoso",
    position: "Data Scientist @ TechIndo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
  },
  {
    id: 2,
    quote:
      "Pelacakan jam belajar dan evaluasi progress step-by-step membuat saya tetap konsisten hingga berhasil mendapatkan promosi tahun ini.",
    name: "Siti Aminah",
    position: "Senior UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
  },
  {
    id: 3,
    quote:
      "Data tren pasar dan rentang gaji industrinya sangat akurat. Platform yang tepat bagi talenta digital yang ingin karirnya tetap relevan.",
    name: "Andi Wijaya",
    position: "Software Engineer Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section>
      <div
        id="testimonial"
        className="w-full rounded-2xl bg-white py-6  dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
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
              Kisah Sukses
            </H2>
            <Text className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
              Bagaimana SiapKerja membantu talenta digital menguasai keahlian baru
              dan mencapai potensi karir maksimal mereka.
            </Text>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative flex cursor-pointer flex-col rounded-2xl border-2 p-6 transition-all duration-300 md:p-7 ${
                  activeIndex === index
                    ? "border-white/35 bg-blue-50/50 dark:border-white/35 dark:bg-neutral-800/80"
                    : "border-slate-200 bg-white hover:border-blue-400 dark:border-white/10 dark:bg-neutral-900 hover:dark:border-white/25"
                }`}
              >
                {/* Quote Mark Icon */}
                <div className="mb-4 text-3xl text-blue-600/20 dark:text-blue-400/20">
                  <i className="fa-solid fa-quote-left"></i>
                </div>

                {/* Quote Text */}
                <Text className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 italic md:text-base dark:text-slate-300">
                  "{testimonial.quote}"
                </Text>

                {/* Divider */}
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border-2 border-blue-600 object-cover dark:border-blue-400"
                  />

                  {/* Name & Position */}
                  <div className="min-w-0 flex-1">
                    <H3 className="truncate text-sm font-semibold text-slate-900 md:text-base dark:text-white">
                      {testimonial.name}
                    </H3>
                    <p className="truncate text-xs md:text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicator Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-6 bg-blue-600 dark:bg-blue-400"
                    : "w-2 bg-slate-300 dark:bg-neutral-700"
                }`}
                aria-label={`Pilih testimoni ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Testimonial;