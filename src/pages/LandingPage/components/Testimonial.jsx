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
      "SiapKerja AI membantu saya beralih karir ke Data Science dalam 6 bulan dengan rekomendasi kursus yang sangat presisi.",
    name: "Budi Santoso",
    position: "Data Scientist @ TechIndo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
  },
  {
    id: 2,
    quote:
      "Analisis keterlampilan sangat akurat. Saya tahu persis apa yang harus dipelajari untuk mendapatkan promosi tahun ini.",
    name: "Siti Aminah",
    position: "Senior UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
  },
  {
    id: 3,
    quote:
      "Platform yang luar biasa untuk melacak tren pasar. Sangat direkomendasikan untuk profesional IT yang ingin terlus relevan.",
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
    <Section className="">
      <div id="testimonial" className="w-full rounded-2xl bg-white  py-16 md:py-24 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
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
              Bagaimana SiapKerja membantu profesional mencapai potensi maksimal
              mereka.
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
                    ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-slate-800/50"
                    : "hover:dark:border-white-500 border-slate-200 bg-white hover:border-blue-400 dark:border-slate-700 dark:bg-neutral-900"
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
                    <p className="truncate text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicator Dots (Mobile) */}
          <div className="mt-8 flex justify-center gap-2 ">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-6 bg-blue-600 dark:bg-blue-400"
                    : "w-2 bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Testimonial;
